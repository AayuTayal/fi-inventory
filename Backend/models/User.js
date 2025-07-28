const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  //here created an Admin portal also mentioned under Optional goals
  isAdmin: {
    type: Boolean,
    default: false   
  }
});

module.exports = mongoose.model("User", userSchema);
