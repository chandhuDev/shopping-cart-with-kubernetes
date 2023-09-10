import mongoose, { Document, Schema } from 'mongoose';
interface IProduct extends Document {
  name: string;
  image: string;
  price: number;
}

const productSchema = new Schema<IProduct>({
  name: { type: String },
  image: { type: String },
  price: { type: Number },
});

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product;
