import { useState } from "react";
import useStore from "../store/useStore";

const AddExpense = () => {
  const {
    currentGroup,
    addExpense,
    deleteExpense,
    calculateSettlement,
    settlements,
    resetCurrent,
  } = useStore();

  const [paidBy, setPaidBy] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  if (!currentGroup) return null;

  const handleAdd = async () => {
    if (!paidBy || !amount) return;

    await addExpense({
      paidBy,
      amount: Number(amount),
      description: desc,
    });

    setAmount("");
    setDesc("");
  };

  return (
    <div className="container">
      <div className="top-bar">
        <button onClick={resetCurrent}>← Back</button>
      </div>

      <h2>💸 {currentGroup.name}</h2>

      <div className="input-group">
        <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
          <option value="">Select Member</option>
          {currentGroup.members.map((m, i) => (
            <option key={i}>{m}</option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <input
          className="input-field"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          className="input-field"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <button className="add-expense-btn" onClick={handleAdd}>
        Add Expense
      </button>

      {/* 🔥 Expense List */}
      <div className="expense-list">
        {currentGroup.expenses.map((e) => (
          <div key={e.id} className="expense-item">
            <span>
              {e.paidBy} paid ₹{e.amount} ({e.description})
            </span>

            <button
              className="delete-expense-btn"
              onClick={() => deleteExpense(e.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>

      <button className="add-expense-btn" onClick={calculateSettlement}>
        Settle Up
      </button>

      {settlements.length > 0 && (
        <div className="settlement-box">
          <h3>💰 Settlement</h3>
          {settlements.map((s, i) => (
            <div key={i} className="settlement-item">
              {s.from} → {s.to} ₹{s.amount}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddExpense;