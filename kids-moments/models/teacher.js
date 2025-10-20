import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    classroom: { type: String, required: true },
  },
  { timestamps: true }
);

teacherSchema.index({ email: 1 }, { unique: true });

export default mongoose.model("Teacher", teacherSchema);
