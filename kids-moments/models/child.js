import mongoose from "mongoose";

const childSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    age: { type: Number, required: true, min: 1 },
    parentEmail: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
    enrolledDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

childSchema.index({ parentEmail: 1 });

export default mongoose.model("Child", childSchema);
