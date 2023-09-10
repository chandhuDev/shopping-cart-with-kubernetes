"use client"
import React from 'react'
interface buttonTypes {
  theme: boolean,
  text: string,
  styles?: string,
  handler: () => void,
}

const Buttons = ({ theme, text, styles= 'w-full px-0', handler }: buttonTypes) => {
  return (
    <button className={`${styles} rounded-xl ${theme ? 'bg-zinc-500/100' : 'bg-blue-900/90'} text-center cursor-pointer font-semibold text-2xl py-3`} onClick={handler}>
      {text}
    </button>
  )
}

export default Buttons
