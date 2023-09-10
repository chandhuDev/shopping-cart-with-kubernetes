import { create } from 'zustand';
import { persist } from "zustand/middleware"
import { Product } from "../types"

  
interface State {
  cart: Product[];
  isChecked: boolean;
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: Product) => void
  removeFromCart: (Item: Product) => void
  changeIsChecked: () => void;
}


const INITIAL_STATE: State = {
  cart: [],
  isChecked: false,
  totalItems: 0,
  totalPrice: 0,
}


 const useCartStore = create(
  persist<State & Actions>(
  (set, get) => ({
  cart: INITIAL_STATE.cart,
  isChecked: INITIAL_STATE.isChecked,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  
  addToCart: (product: Product) => {
   const cart = get().cart
   const cartItem = cart.find(item => item.id === product.id)
 
   
   if (cartItem) {
    const updatedCart = cart.map(item =>
     item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
    )
    set(state => ({
     cart: updatedCart,
     totalItems: state.totalItems + 1,
     totalPrice: state.totalPrice + product.price as number,
    }))
   } else {
    const updatedCart = [...cart, { ...product, quantity: 1 }]
 
    set(state => ({
     cart: updatedCart,
     totalItems: state.totalItems + 1,
     totalPrice: state.totalPrice + product.price as number,
    }))
   }
  },
  removeFromCart: (product: Product) => {
   set(state => ({
    cart: state.cart.filter(item => item.id !== product.id),
    totalItems: state.totalItems - 1,
    totalPrice: state.totalPrice - product.price as number,
   }))
  },
  changeIsChecked: () => {
       set((state) => ({
          isChecked : !state.isChecked,
    }))
  },
}),
{
  name: "cart-storage",
}
)
);

export default useCartStore;


 