const createHttpError = require("http-errors");
const {
  addExpenseService,
  getExpenseService,
  getLastWeekExpenseService,
  getLastMonthExpenseService,
} = require("../services/expense.service");

/* =============== add expense controller ================ */
exports.addExpenseController = async (req, res, next) => {
  try {
    const data = await addExpenseService(req.body);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(err);
    next(createHttpError(500, err.message));
  }
};

/* =============== get expense controller ================ */
exports.getExpenseController = async (req, res, next) => {
  try {
    const data = await getExpenseService();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};

/* =============== get Last Week Expense controller ================ */
exports.getLastWeekExpense = async (req, res, next) => {
  try {
    const data = await getLastWeekExpenseService();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};

/* =============== get Last month Expense controller ================ */
exports.getLastMonthExpenseController = async (req, res, next) => {
  try {
    const data = await getLastMonthExpenseService();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};
