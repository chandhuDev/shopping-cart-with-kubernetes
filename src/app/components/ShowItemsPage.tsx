"use client"
import React from 'react'
import Buttons from '../re-use/Buttons'
import CartItem from './CartItem'
import useCartStore from '../storeData/useCartStore'


const ShowItemsPage = () => {

  const changeIsCheckedFunc = useCartStore( store => store.changeIsChecked);
  const cart = useCartStore(state => state.cart);

  const handler = () => {
     changeIsCheckedFunc()
  }

  return (
    <section className='w-2/6 h-full transition justify-between items-center px-5 py-10 duration-300 ease-out text-black bg-gray-200 rounded-tl-md rounded-bl-md z-20 absolute top-0 right-0 flex flex-col'>
      <h3 className='text-2xl font-bold'>Total Amount</h3>
      <section className='flex flex-col mt-6 gap-y-6 justify-center items-center'>
      <ul>
       {cart.map(product => (
       <CartItem key={product.id} product={product} />
       ))}
      </ul>
      </section>
      <Buttons theme={true} text='Close' handler={handler}/>
    </section>
  )
}

export default ShowItemsPage
