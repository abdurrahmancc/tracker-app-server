const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "category is required"],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "success"],
      default: "success",
    },
    mobile: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
