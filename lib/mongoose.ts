import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MISSING MONGODB_URL");
  }

  if (isConnected) {
    return console.log("MongoDB is already Connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devFlow",
    });

    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error", error);
  }
};
