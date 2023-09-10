import mongoose from "mongoose";
const API_SECRET: string= process.env.MONGODB_URI_KEY as string;
const connectMongoDB = async () => {
 try {
    await mongoose.connect(`mongodb+srv://chandhudev0:${API_SECRET}@cluster0.0xnmtrt.mongodb.net/`);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;