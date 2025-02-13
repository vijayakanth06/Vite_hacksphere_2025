const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({
  username: { type: String, ref: "User", required: true },
  query: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Search", searchSchema);
