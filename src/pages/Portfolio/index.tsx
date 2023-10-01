import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'
import projectData from '@/data/project-data.json'
import CardProject from '@/components/projectCard'
import Footer from '@/components/footer'
import { Nav } from '@/components/nav'
import { Comic_Neue } from 'next/font/google'

const inter2 = Comic_Neue({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

export default function Portfolio() {
  return (
    <div className={inter2.className}>
      <Nav />
      <div className='lg:mt-10 flex flex-col lg:flex-row justify-center lg:mx-64 mx-auto '>
        <div className=' mt-20 lg:mx-auto mx-10 '>
          <h1 className='text-5xl font-bold uppercase  text-primary tracking-widest'>Portfolio</h1>
          <p className='max-w-2xl  pt-2 text-base pb-2 '>In the World of Design and Creativity, We Make Your Vision a Reality. Our Portfolio Is a Reflection of Our Achievements, Showcasing Our Intelligence and Skill in Designing
            Extraordinary Solutions. Find Inspiration With Us to Realize Your Best Potential</p>
          <Button title='More Info' />
          <div className='relative h-72 w-full mt-10'>
            <Image
              className=" object-cover transform transition-transform duration-300 hover:scale-110 p-2"
              src='/project2.svg'
              alt="Image Description"
              fill
            />
          </div>
        </div>
        <div className=' grid lg:grid-rows-3 grid-cols-1 lg:w-full '>
          {projectData.map((item, index) => (
            <CardProject
              key={index}
              project_name={item.project_name}
              description={item.description}
              client={item.client}
              projectId={item.projectId}
              completed_date={item.completed_date}
              services_provided={item.services_provided} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
