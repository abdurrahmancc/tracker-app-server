const mongoose = require("mongoose");
const validator = require("validator");

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
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      unique: true,
      validate: [validator.isEmail, "provide a valid email"],
      lowercase: true,
    },
    status: {
      type: String,
      enum: ["pending", "success"],
      default: "success",
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
