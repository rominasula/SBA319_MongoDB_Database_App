import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import teacherRoutes from "./routes/teacherRoutes.js";
import childRoutes from "./routes/childRoutes.js";
import momentRoutes from "./routes/momentRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/teachers", teacherRoutes);
app.use("/api/children", childRoutes);
app.use("/api/moments", momentRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error("MongoDB connection error:", err));

