import { Nav } from '@/components/nav'
import React from 'react'
import blogData from '@/data/blog-data.json'
import CardBlog from '@/components/blogCard'
import Button from '@/components/button'
import Footer from '@/components/footer'
import { Comic_Neue } from 'next/font/google'

const inter2 = Comic_Neue({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

export default function Blog() {
  return (
    <div className={inter2.className}>
        <Nav />
        <div className=' min-h-max w-full flex justify-center mb-20 lg:mt-20'>
        <div className=' mt-20 flex flex-col-reverse lg:flex-row'>
          <div>
            <div className='text-center'>
              <div className=' lg:w-2/4 lg:mx-auto mx-4 grid grid-cols-2 gap-2 pb-2'>
                {blogData.map((item, index) => (
                  <CardBlog
                    key={index}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    category={item.category}
                    content={item.content}
                    author={item.author}
                  />))
                }
              </div>
            </div>
            <div className='text-center'>
              <div className=' lg:w-2/4 lg:mx-auto mx-4 grid grid-cols-2 gap-2 pb-2'>
                {blogData.map((item, index) => (
                  <CardBlog
                    key={index}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    category={item.category}
                    content={item.content}
                    author={item.author}
                  />))
                }
              </div>
            </div>
          </div>
          <div className='mx-6 lg:mx-0 pb-6'>
          <h1 className='text-5xl font-bold uppercase  text-primary tracking-widest'>Blog</h1>
          <p className='max-w-xl lg:max-w-md pt-2 text-base pb-2 mx-auto'>Exploring the Business World: Providing News, Insights, and Solutions to Elevate Your Success
            Every Step of the Way, Together with You, We Empower Your Journey to Prosperity and Growth</p>
            <Button title='Show'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
