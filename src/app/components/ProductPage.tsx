"use client"
import React, { useEffect } from 'react'
import Product from '../re-use/Product';
import Buttons from '../re-use/Buttons';
import ShowItemsPage from './ShowItemsPage';
import useCartStore from '../storeData/useCartStore';
import { useProductsStore } from '../storeData/useProductStore';

const ProductPage = () => {

const isChecked = useCartStore( store=> store.isChecked)

const changeIsCheckedFunc = useCartStore( store => store.changeIsChecked)
const handler = () => {
  changeIsCheckedFunc()
}
const { products, isLoading, fetchData } = useProductsStore()
useEffect(() => { fetchData() }, [fetchData])
return (
    <main className='relative w-full h-full flex flex-col gap-y-10 py-3 justify-center items-center'>
      <section className='mx-auto w-4/5 h-5/6 bg-slate-100 grid gap-6 py-4 grid-cols-3 grid-rows-2'>
      {isLoading 
        ? <div className='text-center text-lg'>Loading...</div> 
        : <>
        {
          products.map((product,index)=>{
            return (
              <div key={index}>
                 <Product product={product}/>
              </div>
            )
          })
         }
       </> 
      }
      </section>
      <Buttons theme={true} text='Checkout' styles='w-auto px-4' handler={handler}/>
      { isChecked ? <ShowItemsPage /> : null }
    </main>
  )
}

export default ProductPage
