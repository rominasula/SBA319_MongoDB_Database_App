// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Teacher from "./models/teacher.js";
import Child from "./models/child.js";
import Moment from "./models/moment.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding...");

    // Clear existing data
    await Teacher.deleteMany();
    await Child.deleteMany();
    await Moment.deleteMany();

    // Create teachers
    const teachers = await Teacher.insertMany([
      { name: "Ms. Sofia", email: "sofia@daycare.com", classroom: "Butterflies" },
      { name: "Mr. Daniel", email: "daniel@daycare.com", classroom: "Sunshines" },
    ]);

    // Create children
    const children = await Child.insertMany([
      { name: "Liam", age: 4, parentEmail: "liam.parent@gmail.com" },
      { name: "Emma", age: 5, parentEmail: "emma.parent@gmail.com" },
    ]);

    // Create moments
    const moments = await Moment.insertMany([
      {
        childId: children[0]._id,
        description: "Liam painting with colors during art time",
        photoUrl: "https://picsum.photos/200/200?random=1",
        likes: 3,
      },
      {
        childId: children[1]._id,
        description: "Emma building a tall block tower 🧱",
        photoUrl: "https://picsum.photos/200/200?random=2",
        likes: 5,
      },
    ]);

    console.log("Data seeded successfully!");
    console.log({ teachers, children, moments });
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
