import React from 'react'
import servicesData from '@/data/services-data.json'
import Footer from '@/components/footer'
import CardService from '@/components/serviceCard'
import { Comic_Neue } from 'next/font/google'
import { Nav } from '@/components/nav'

const inter2 = Comic_Neue({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

export default function Service() {
  return (
    <div className={inter2.className}>
      <Nav />
      <div className='bg-gray-100 min-h-max w-full '>
        <div className='lg:pb-6 pt-1'>
          <div className=' lg:mt-20 mt-10 lg:mx-auto lg:text-center mx-10 '>
            <h1 className='text-5xl font-bold uppercase  text-primary tracking-widest'>Services</h1>
            <p className='max-w-2xl lg:mx-auto pt-2 text-base pb-2 '>We are the compass for your business success. Our services involve strategy, innovation and expertise to deliver solutions that transform your company, build a vision for the future and
              create extraordinary results. With us, your business is ready to conquer the world.</p>
          </div>
          <div className=' mx-auto grid lg:grid-cols-3 lg:-6 lg:w-2/4 '>
            {servicesData.map((item, index) => (
              <CardService
                key={index}
                service_name={item.service_name}
                description={item.description}
                price={item.price}
                serviceId={item.serviceId}
                duration={item.duration}
                features={item.features} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
