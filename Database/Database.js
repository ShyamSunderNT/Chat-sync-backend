import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
 

const connectDB = async (req, res) => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected successfully");
    return connection;
  } catch (error) {
    console.log(error);
    
  }
};
export default connectDB;