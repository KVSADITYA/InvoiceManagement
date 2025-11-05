const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");

// Create
router.post("/", async (req, res) => {
  try {
    const inv = new Invoice(req.body);
    const saved = await inv.save();
    res.json(saved);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  const list = await Invoice.find().sort({ createdAt: -1 });
  res.json(list);
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Invoice.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Bulk delete
router.post("/bulk-delete", async (req, res) => {
  try {
    await Invoice.deleteMany({ _id: { $in: req.body.ids || [] } });
    res.json({ message: "Bulk delete successful" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
