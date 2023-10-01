
import { type } from 'os'
import React from 'react'


type btn = {
  title : string;
}
export default function Button(prop : btn) {
  return (
    <button className="transition duration-150 ease-out hover:ease-in w-32 bg-primary text-base p-2 rounded-full  text-white">{prop.title}</button>
  )
}
