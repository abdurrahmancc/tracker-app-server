const Expense = require("../models/ExpenseSchema");

/* ==========  add Expense Service ======== */
exports.addExpenseService = async (info) => {
  return await Expense.create(info);
};
/* ==========  get Expense Service ======== */
exports.getExpenseService = async () => {
  return await Expense.find({});
};

/* ==========   get Last Week Expense Service  ======== */
exports.getLastWeekExpenseService = async () => {
  var d = new Date();
  d.setDate(d.getDate() - 7);
  return await Expense.find({ createdAt: { $gt: d } });
};

/* ==========   get Last month Expense Service  ======== */
exports.getLastMonthExpenseService = async () => {
  var d = new Date();
  d.setDate(d.getDate() - 30);
  return await Expense.find({ createdAt: { $gt: d } });
};
