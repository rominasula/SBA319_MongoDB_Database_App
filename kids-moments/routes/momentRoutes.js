import express from "express";
import Moment from "../models/momentModel.js";

const router = express.Router();

// CREATE a moment
router.post("/", async (req, res) => {
  try {
    const moment = await Moment.create(req.body);
    res.status(201).json(moment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



export default router;
