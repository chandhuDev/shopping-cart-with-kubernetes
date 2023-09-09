import React from 'react'
import Product from '../re-use/Product';
import Buttons from '../re-use/Buttons';
import ShowItemsPage from './ShowItemsPage';

const ProductPage = async () => {
  const arrayDummy : number = 6;
  
const emptyArray = Array.from({ length: arrayDummy }, () => undefined);

  

  return (
    <section className='relative w-full h-full flex flex-col gap-y-10 py-3 justify-center items-center'>
      <section className='mx-auto w-4/5 h-5/6 bg-slate-200 grid gap-6 py-4 grid-cols-3 grid-rows-2'>
         {
          emptyArray.map((_,index)=>{
            return (
              <div key={index}>
                 <Product />
              </div>
            )
          })
         }
      </section>
      <Buttons theme={true} text='Checkout' styles='w-auto px-4'/>
      <ShowItemsPage />
    </section>
  )
}

export default ProductPage
