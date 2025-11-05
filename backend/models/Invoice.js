const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  client: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: String, required: true },
  status: { type: String, enum: ["Paid", "Unpaid", "Overdue"], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
