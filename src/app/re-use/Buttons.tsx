"use client"
import React from 'react'

interface buttonTypes {
  theme: boolean,
  text: string,
  styles?: string,
}

const Buttons = ({ theme, text, styles= 'w-full px-0' }: buttonTypes) => {
  return (
    <button className={`${styles} rounded-xl ${theme ? 'bg-zinc-600' : 'bg-blue-900/90'} text-center cursor-pointer font-semibold text-2xl py-3`} onClick={()=>console.log("clicked")}>
      {text}
    </button>
  )
}

export default Buttons
