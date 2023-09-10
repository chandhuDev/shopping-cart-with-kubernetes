"use client"
import { FaTrashAlt } from "react-icons/fa"
import  useCartStore from "../storeData/useCartStore"
import { Product } from "../types"

interface Props {
	product: Product
}

export default function CartItem({ product }: Props) {
const removeFromCart = useCartStore(state => state.removeFromCart)

 return (
  <li className='flex justify-between items-center gap-4 mb-2 shadow-xl p-3'>
    <h5>{product.title}<span className="ml-2">{product.quantity} x {product.price} = ${product.price * product.quantity}</span></h5>
    <div>
    <button
     title='Remove Item'
     className='text-red-500 hover:text-red-600 rounded-full'
     onClick={() => removeFromCart(product)}
    >
     <FaTrashAlt size={18} />
    </button>
   </div>
  </li>
 )
}