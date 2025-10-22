import mongoose from "mongoose";

const momentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    childName: { type: String, required: true },
    description: { type: String, maxlength: 300 },
    date: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

momentSchema.index({ childName: 1 });

export default mongoose.model("Moment", momentSchema);
