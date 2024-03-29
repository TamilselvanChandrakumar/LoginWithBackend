const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userOtpSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userotp", userOtpSchema);
