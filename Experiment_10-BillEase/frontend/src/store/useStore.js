import { create } from "zustand";

const useStore = create((set, get) => ({
  groups: [],
  currentGroup: null,
  settlements: [],
  screen: "create",
  editingGroupIndex: null,

  setScreen: (screen) => set({ screen }),

  // 🔥 FETCH GROUPS
  fetchGroups: async () => {
    const res = await fetch("http://localhost:5000/groups");
    const data = await res.json();
    set({ groups: data });
  },

  // 🔥 CREATE GROUP
  createGroup: async (group) => {
    const res = await fetch("http://localhost:5000/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(group),
    });

    const data = await res.json();

    set((state) => ({
      groups: [...state.groups, { ...data, expenses: [] }],
    }));
  },

  // 🔥 SELECT GROUP + FETCH EXPENSES
  selectGroup: async (group) => {
    const res = await fetch(
      `http://localhost:5000/expenses/${group.id}`
    );
    const expenses = await res.json();

    set({
      currentGroup: { ...group, expenses },
      screen: "expense",
      settlements: [],
    });
  },

  // 🔥 DELETE GROUP
  deleteGroup: async (index) => {
    const group = get().groups[index];

    await fetch(`http://localhost:5000/groups/${group.id}`, {
      method: "DELETE",
    });

    set((state) => ({
      groups: state.groups.filter((_, i) => i !== index),
    }));
  },

  startEditGroup: (index) => set({ editingGroupIndex: index }),

  updateGroup: (updatedGroup) =>
    set((state) => {
      const groups = [...state.groups];
      groups[state.editingGroupIndex] = {
        ...groups[state.editingGroupIndex],
        ...updatedGroup,
      };

      return {
        groups,
        editingGroupIndex: null,
      };
    }),

  cancelEdit: () => set({ editingGroupIndex: null }),

  // 🔥 ADD EXPENSE
  addExpense: async (expense) => {
    const { currentGroup } = get();

    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupId: currentGroup.id,
        ...expense,
      }),
    });

    const res = await fetch(
      `http://localhost:5000/expenses/${currentGroup.id}`
    );
    const updatedExpenses = await res.json();

    set((state) => ({
      currentGroup: {
        ...state.currentGroup,
        expenses: updatedExpenses,
      },
    }));
  },

  // 🔥 DELETE EXPENSE (API)
  deleteExpense: async (expenseId) => {
    const { currentGroup } = get();

    await fetch(`http://localhost:5000/expenses/${expenseId}`, {
      method: "DELETE",
    });

    // refresh
    const res = await fetch(
      `http://localhost:5000/expenses/${currentGroup.id}`
    );
    const updatedExpenses = await res.json();

    set((state) => ({
      currentGroup: {
        ...state.currentGroup,
        expenses: updatedExpenses,
      },
    }));
  },

  // 🔥 SETTLEMENT
  calculateSettlement: () => {
    const { currentGroup } = get();
    if (!currentGroup) return;

    const members = currentGroup.members;
    const expenses = currentGroup.expenses;

    const balance = {};
    members.forEach((m) => (balance[m] = 0));

    let total = 0;
    expenses.forEach((e) => {
      total += e.amount;
      balance[e.paidBy] += e.amount;
    });

    const share = parseFloat((total / members.length).toFixed(2));

    members.forEach((m) => {
      balance[m] -= share;
    });

    let creditors = [];
    let debtors = [];

    for (let p in balance) {
      if (balance[p] > 0) creditors.push([p, balance[p]]);
      else if (balance[p] < 0) debtors.push([p, -balance[p]]);
    }

    let settlements = [];
    let i = 0,
      j = 0;

    while (i < debtors.length && j < creditors.length) {
      let [d, da] = debtors[i];
      let [c, ca] = creditors[j];

      let min = Math.min(da, ca);

      settlements.push({
        from: d,
        to: c,
        amount: Math.round(min * 100) / 100,
      });

      debtors[i][1] -= min;
      creditors[j][1] -= min;

      if (debtors[i][1] === 0) i++;
      if (creditors[j][1] === 0) j++;
    }

    set({ settlements });
  },

  resetCurrent: () =>
    set({
      currentGroup: null,
      settlements: [],
      screen: "create",
    }),
}));

export default useStore;