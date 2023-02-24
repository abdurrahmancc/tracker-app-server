const express = require("express");
const controller = require("../../controllers/expense.controller");
const router = express.Router();

router.post("/", controller.addExpenseController);
router.get("/", controller.getExpenseController);
router.get("/get-last-week-expense", controller.getLastWeekExpense);
router.get("/get-last-month-expense", controller.getLastMonthExpenseController);

module.exports = router;
