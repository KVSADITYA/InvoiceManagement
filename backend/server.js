import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/invoicedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Schema
const invoiceSchema = new mongoose.Schema({
  client: String,
  amount: Number,
  dueDate: String,
  status: String,
});

// Model
const Invoice = mongoose.model("Invoice", invoiceSchema);

// Default route
app.get("/", (req, res) => {
  res.send("Invoice API Running ✅");
});

// POST route (to add a new invoice)
app.post("/api/invoices", async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json({ message: "Invoice added", invoice });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET route (to get all invoices)
app.get("/api/invoices", async (req, res) => {
  const invoices = await Invoice.find();
  res.json(invoices);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
