import express from "express";
import Child from "../models/child.js";

const router = express.Router();

// GET all children
router.get("/", async (req, res) => {
  try {
    const children = await Child.find();
    res.json(children);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new child
router.post("/", async (req, res) => {
  try {
    const child = await Child.create(req.body);
    res.status(201).json(child);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH child
router.patch("/:id", async (req, res) => {
  try {
    const child = await Child.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(child);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE child
router.delete("/:id", async (req, res) => {
  try {
    await Child.findByIdAndDelete(req.params.id);
    res.json({ message: "Child deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
