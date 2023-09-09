"use client"
import React from 'react'
import Image from 'next/image'
import shopping from '../../../public/shopping.svg'
 

const HeaderPage = () => {
  return (
    <section className='w-full h-full flex justify-end font-bold text-2xl gap-32 px-10 py-5 bg-red-300'>
      <h2>Products</h2>
      <div className='relative'>
        <Image src={shopping} alt='shoppint-cart' className='w-10 h-10'/>
        <p className='absolute left-7 bottom-5 text-white'>0</p>
      </div>
      <h5>Total value: $20</h5>
    </section>
  )
}

export default HeaderPage