import mongoose from "mongoose";

// function to connect mongodb

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database connected"));
  await mongoose.connect(`${process.env.MONGODB_URI}`);
};
export default connectDB;
