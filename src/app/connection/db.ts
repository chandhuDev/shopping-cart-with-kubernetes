import mongoose from "mongoose";

const connectMongoDB = async () => {
 

  try {
    await mongoose.connect(`mongodb+srv://chandhudev0:${process.env.MONGODB_URI_KEY}@cluster0.0xnmtrt.mongodb.net/`);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;