"use client"
import React from 'react'
import Buttons from '../re-use/Buttons'

const ShowItemsPage = () => {
  return (
    <section className='w-2/6 h-full transition justify-center items-center px-5 py-10 duration-300 ease-out bg-gray-600 rounded-tl-md rounded-bl-md z-20 absolute top-0 right-0 flex flex-col'>
      <h3 className='text-2xl font-bold'>Total Amount</h3>
      <section className='flex flex-col mt-6 gap-y-6 justify-center items-center'>
        <p>carrot: 20</p>
        <p>carrot: 20</p>
        <p>carrot: 20</p>
        <p>carrot: 20</p>
      </section>
      <Buttons theme={true} text='Close'/>
    </section>
  )
}

export default ShowItemsPage
