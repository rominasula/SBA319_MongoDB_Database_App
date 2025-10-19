import mongoose from "mongoose";

const momentSchema = new mongoose.Schema({
  childName: {
    type: String,
    required: [true, "Child name is required"],
  },
  photoUrl: {
    type: String,
    required: [true, "Photo URL is required"],
  },
  description: {
    type: String,
    maxlength: [200, "Description cannot exceed 200 characters"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Index for faster searching by child name
momentSchema.index({ childName: 1 });

const Moment = mongoose.model("Moment", momentSchema);

export default Moment;
