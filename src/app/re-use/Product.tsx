"use client"
import Image from 'next/image'
import React from 'react'
import Buttons from './Buttons'
import useCartStore from '../storeData/useCartStore'
import { Product } from '../types'
interface Props {
	product: Product
}

const Product = ( {product} : Props) => {
  const addToCartFunc = useCartStore( store => store.addToCart)
  const handler = () => {
    addToCartFunc(product)
  }

  return (
    <section className='flex flex-col items-center gap-y-2'>
    <div className='rounded-2xl'>
      <Image src={product.image} alt='product' width={30} height={30} className='w-48 h-40 object-cover rounded-2xl'/>
    </div>
    <h4 className='text-black text-xl font-medium'>{product.title}</h4>
    <Buttons theme={false} text='Add to cart' handler={handler}/>
    </section>
  )
}

export default Product
