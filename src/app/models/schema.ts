import mongoose, { Document, Schema } from 'mongoose';

// Define a TypeScript interface for the product document
interface IProduct extends Document {
  name: string;
  image: string;
  price: number;
}

// Define the Mongoose schema for the product
const productSchema = new Schema<IProduct>({
  name: { type: String },
  image: { type: String },
  price: { type: Number },
});

// Create the Mongoose model for the product
module.exports = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);


