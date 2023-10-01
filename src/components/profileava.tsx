import React from 'react'
import Image from 'next/image'
import { type } from 'os'

type profileAva ={
    name : string;
    job : string;
}

export default function Ava(prop : profileAva) {
  return (
    <div className="flex flex-col    p-6 lg:m-4 mb-10 ">
        <div className=" h-32 w-32 overflow-hidden border-2 mx-auto bg-white rounded-full relative">
                <Image
                    className="w-full object-cover transform transition-transform duration-300 hover:scale-110 p-2"
                    src='/services.svg'
                    alt="Image Description"
                    fill
                />
            </div>
            <div className="text-center">
                <h3 className="text-lg  font-semibold text-primary ">
                    {prop.name}
                </h3>
                <p className='text-black'>{prop.job}</p>
            </div>

    </div>
        
    

   
  )
}
