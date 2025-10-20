import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import childRoutes from "./routes/childRoutes.js";
import momentRoutes from "./routes/momentRoutes.js";
// import teacherRoutes from "./routes/teacherRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

app.use("/api/children", childRoutes);
app.use("/api/moments", momentRoutes);
app.use("/api/teachers", teacherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
