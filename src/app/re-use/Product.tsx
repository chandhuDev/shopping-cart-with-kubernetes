import Image from 'next/image'
import React from 'react'
import victor from '../../../public/shopping.svg'
import Buttons from './Buttons'

const Product = () => {
  


  return (
    <section className='flex flex-col items-center gap-y-2'>
    <div className='rounded-2xl'>
      <Image src={victor} alt='product' className='w-48 h-40 object-cover rounded-2xl'/>
    </div>
      <h4 className='text-black text-xl font-medium'>Carrot</h4>
      <Buttons theme={false} text='Add to cart'/>
    </section>
  )
}

export default Product
