const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  hostingPlan: { type: String, required: true },
  renewalDate: { type: Date, required: true },
});

module.exports = mongoose.model("Client", clientSchema);
