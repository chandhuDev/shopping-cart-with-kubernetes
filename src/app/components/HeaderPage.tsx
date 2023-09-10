"use client"
import React from 'react'
import Image from 'next/image'
import shopping from '../../../public/shopping.svg'
import useCartStore from '../storeData/useCartStore' 

const HeaderPage = () => {
  const cart = useCartStore(state => state.cart);
  const total = cart.reduce((acc, product) => acc + product.price * (product.quantity as number), 0);
  const totalItems: number = useCartStore( store => store.totalItems)
  return (
    <header className='w-full h-full flex justify-end font-bold text-2xl gap-32 px-10 py-5 bg-red-200'>
      <h2>Products</h2>
      <div className='relative'>
        <Image src={shopping} alt='shoppint-cart' className='w-10 h-10'/>
        <p className='absolute left-7 bottom-5 text-white'>{totalItems}</p>
      </div>
      <h5>Total value: <span className='font-bold text-black/70'>${total.toFixed(2)}</span></h5>
    </header>
  )
}

export default HeaderPage