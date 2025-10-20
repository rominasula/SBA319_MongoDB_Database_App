import mongoose from "mongoose";

const momentSchema = new mongoose.Schema(
  {
    childId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "child",
      required: true,
    },
    photoUrl: { type: String, required: true },
    description: { type: String, maxlength: 300 },
    category: { type: String, enum: ["Playtime", "Learning", "Meal", "Nap"], default: "Playtime" },
    date: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

momentSchema.index({ childId: 1 });

export default mongoose.model("Moment", momentSchema);

