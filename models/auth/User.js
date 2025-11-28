const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false // password will NOT come in queries unless `.select("+password")`
    },

    role: {
      type: String,
      enum: ["ADMIN", "SALES", "SUPPORT", "RESTAURANT"],
      default: "RESTAURANT"
    },

    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      default: null
    },

    isActive: {
      type: Boolean,
      default: true // to suspend accounts without deleting
    }
  },
  { timestamps: true }
);
