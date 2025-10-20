import express from "express";
import Moment from "../models/moment.js";

const router = express.Router();

// GET all moments
router.get("/", async (req, res) => {
  try {
    const moments = await Moment.find().populate("childId");
    res.json(moments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET moments by child
router.get("/child/:childId", async (req, res) => {
  try {
    const moments = await Moment.find({ childId: req.params.childId });
    res.json(moments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new moment
router.post("/", async (req, res) => {
  try {
    const moment = await Moment.create(req.body);
    res.status(201).json(moment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH update moment (likes or description)
router.patch("/:id", async (req, res) => {
  try {
    const moment = await Moment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(moment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a moment
router.delete("/:id", async (req, res) => {
  try {
    await Moment.findByIdAndDelete(req.params.id);
    res.json({ message: "Moment deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
