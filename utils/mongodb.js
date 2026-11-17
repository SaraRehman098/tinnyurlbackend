import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
