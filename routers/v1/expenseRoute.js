const express = require("express");
const controller = require("../../controllers/expense.controller");
const router = express.Router();

router.post("/", controller.addExpenseController);
router.get("/", controller.getExpenseController);
router.get("/get-last-week-expense", controller.getLastWeekExpense);

module.exports = router;
