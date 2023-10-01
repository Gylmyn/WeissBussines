import Footer from '@/components/footer'
import { Nav } from '@/components/nav'
import Ava from '@/components/profileava'
import React from 'react'
import { Comic_Neue } from 'next/font/google'

const inter2 = Comic_Neue({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

export default function About() {
  return (
    <div className={inter2.className}>
      <Nav />
      <div className='flex min-h-max flex-col  items-center py-10 bg-gray-100 text-white'>
        <div className=" lg:max-w-5xl w-full mx-auto pt-10">
          <h1 className="text-5xl font-bold uppercase text-center pb-2 text-primary tracking-widest">
            About Us
          </h1>
          <p className="text-lg text-center text-black mx-6">
            We are a team dedicated to providing the best solutions in
            world of technology.
          </p>
          <p className='text-black text-center'>developed by the edelweiss group</p>
        </div>
        <div className='grid lg:grid-cols-5 grid-cols-2 '>
          <Ava name='Muhamad Gilman' job='FrontEnd Developer' />
          <Ava name='Reza Ramadhan' job='FrontEnd Developer' />
          <Ava name='Muhamad Anhar' job='FrontEnd Developer' />
          <Ava name='Muhamad Ryas' job='Ui/Ux Designer' />
          <Ava name='Verzha Mahardika' job='Ui/Ux Designer' />
        </div>
      </div>
      <Footer />
    </div>
  )
}
