const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 In-memory DB
let groups = [];
let expenses = [];

// ✅ Create Group
app.post("/groups", (req, res) => {
  const group = { id: Date.now(), ...req.body };
  groups.push(group);
  res.json(group);
});

// ✅ Get Groups
app.get("/groups", (req, res) => {
  res.json(groups);
});

// ✅ Delete Group
app.delete("/groups/:id", (req, res) => {
  groups = groups.filter((g) => g.id != req.params.id);
  expenses = expenses.filter((e) => e.groupId != req.params.id);
  res.json({ success: true });
});

// ✅ Add Expense
app.post("/expenses", (req, res) => {
  const expense = { id: Date.now(), ...req.body };
  expenses.push(expense);
  res.json(expense);
});

// ✅ Get Expenses by Group
app.get("/expenses/:groupId", (req, res) => {
  const groupExpenses = expenses.filter(
    (e) => e.groupId == req.params.groupId
  );
  res.json(groupExpenses);
});

// ✅ DELETE EXPENSE (🔥 FIXED)
app.delete("/expenses/:id", (req, res) => {
  expenses = expenses.filter((e) => e.id != req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});