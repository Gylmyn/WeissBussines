
import Button from '@/components/button';
import Footer from '@/components/footer';
import React from 'react';
import Image from 'next/image';
import servicesData from '@/data/services-data.json';
import projectData from '@/data/project-data.json';
import blogData from '@/data/blog-data.json';
import { Poppins } from 'next/font/google'
import { Comic_Neue } from 'next/font/google'
import CardService from '@/components/serviceCard';
import CardProject from '@/components/projectCard';
import { BsShop } from 'react-icons/bs';
import { Nav } from '@/components/nav';
import Ava from '@/components/profileava';
import CardBlog from '@/components/blogCard';
import Link from 'next/link';



const inter = Poppins({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})
const inter2 = Comic_Neue({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  return (
    <div className={inter2.className}>
      <div className="w-full fixed z-50 top-0">
        <Nav />
      </div>

    {/* Home */}
      <div className='max-w-7xl w-full h-auto py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-col lg:flex-row lg:my-28 my-16'>
        <div className='flex  flex-col justify-center lg:mx-auto lg:w-1/2 text-start mx-6'>
          <p className='text-primary lg:text-2xl font-bold uppercase'>Bussines Web</p>
          <p className={`font-bold lg:text-4xl text-3xl`}>
            EDELWEISS <span className=''>BUSSINES</span>
          </p>
          <p className='mb-2 max-w-lg text-sm lg:text-sm lg:pt-2'>Deep Innovation and Unwavering Quality are Our Foundation. We Embrace Business Complexity, Bring Ease of Decision Making,
            and Inspire Your Growth. We Are Transformation Partners Shaping the Future Together</p>
          <div className='pt-2'>

            <Button title='Get Started' />
          </div>
        </div>
        <div className='h-96 lg:w-1/2 relative mt-10 lg:mt-0 z-[-100px]'>
          <Image
            className='max-h-80 lg:max-h-full'
            src='/banner.png'
            fill
            alt=''

          />
        </div>
      </div>
    {/* Home */}

    {/* Services */}
      <div className='bg-gray-100 min-h-max w-full lg:mt-56  '>
        <div className='lg:py-16 pt-1'>
          <div className=' mt-20 lg:mx-auto lg:text-center mx-10 '>
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
    {/* Services */}

    {/* Portfolio */}
      <div className='lg:mt-32 flex flex-col lg:flex-row justify-center lg:mx-64 mx-auto '>
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
    {/* Portfolio */}

    {/* About */}
      <div className='flex min-h-max lg:py-20 flex-col  items-center justify-center mt-10 lg:mt-20 bg-gray-100 text-white'>
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
    {/* About */}
    
    {/* Blog */}
      <div className=' min-h-max w-full flex justify-center  lg:mt-20'>
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
    {/* About */}
    
    {/* Contact */}
      <div className=" min-h-max px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-28 bg-gray-100">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold uppercase  text-primary tracking-widest">
              Contact Us
            </h1>
            <p className="mt-1 text-gray-600 ">
              We&apos;d love to talk about how we can help you.
            </p>
          </div>
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Card */}
            <div className="flex flex-col border bg-white shadow-md rounded-xl p-4 sm:p-6 lg:p-8 ">
              <h2 className="mb-8 text-xl font-semibold text-primary ">
                 Message
              </h2>
              <form className=''>
                <div className="grid gap-4">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="sr-only"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-contacts-1"
                        id="hs-firstname-contacts-1"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-contacts-1"
                        className="sr-only"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-contacts-1"
                        id="hs-lastname-contacts-1"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autoComplete="email"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="hs-about-contacts-1" className="sr-only">
                      Details
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      rows={4}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                      placeholder="Details"
                      defaultValue={""}
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-primary border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
                  >
                    Send Message
                  </button>
                </div>
                
              </form>
            </div>
            {/* End Card */}
            <div className="mx-6">
              {/* Icon Block */}
              <div className="flex gap-x-7 py-6">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-primary ">Instagram</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Contact us via Instagram Direct Message
                  </p>
                  <Link
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800  "
                    href="#"
                  >
                    Direct Message
                    <svg
                      className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className=" flex gap-x-7 py-6">
                <svg
                  viewBox="0 0 860 1000"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M752 80c29.333 0 54.667 10.333 76 31s32 45.667 32 75v646c0 29.333-10.667 54.667-32 76s-46.667 32-76 32H590V630h114V496H590v-70c0-20 9.333-30 28-30h86V244h-96c-49.333 0-90.667 18-124 54s-50 80-50 132v66H330v134h104v310H108c-29.333 0-54.667-10.667-76-32S0 861.333 0 832V186c0-29.333 10.667-54.333 32-75s46.667-31 76-31h644" />
                </svg>
                <div>
                  <h3 className="font-semibold text-primary ">Facebook</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Contact us via Facebook
                  </p>
                  <Link
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800  "
                    href="#"
                  >
                    Message
                    <svg
                      className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className=" flex gap-x-7 py-6">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    fill="currentColor"
                    d="M13.641 2.325A7.869 7.869 0 008.032 0C3.663 0 .107 3.556.107 7.928c0 1.397.366 2.763 1.059 3.963L.041 16l4.203-1.103a7.929 7.929 0 003.787.966h.003c4.369 0 7.928-3.556 7.928-7.928a7.887 7.887 0 00-2.322-5.609zm-5.607 12.2a6.583 6.583 0 01-3.356-.919l-.241-.144-2.494.653.666-2.431-.156-.25a6.537 6.537 0 01-1.009-3.506 6.599 6.599 0 016.594-6.591c1.759 0 3.416.688 4.659 1.931a6.554 6.554 0 011.928 4.662c-.003 3.637-2.959 6.594-6.591 6.594zm3.613-4.937c-.197-.1-1.172-.578-1.353-.644s-.313-.1-.447.1c-.131.197-.512.644-.628.778-.116.131-.231.15-.428.05s-.838-.309-1.594-.984c-.588-.525-.987-1.175-1.103-1.372s-.013-.306.088-.403c.091-.088.197-.231.297-.347s.131-.197.197-.331c.066-.131.034-.247-.016-.347s-.447-1.075-.609-1.472c-.159-.388-.325-.334-.447-.341-.116-.006-.247-.006-.378-.006s-.347.05-.528.247c-.181.197-.694.678-.694 1.653s.709 1.916.809 2.05c.1.131 1.397 2.134 3.384 2.991.472.203.841.325 1.128.419.475.15.906.128 1.247.078.381-.056 1.172-.478 1.338-.941s.166-.859.116-.941c-.047-.088-.178-.137-.378-.238z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-primary ">WhatsApp</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Contact us via WhatsApp
                  </p>
                  <Link
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800  "
                    href="#"
                  >
                    +6285239515270
                    <svg
                      className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className=" flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 "
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-primary ">Email</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Contact us via Email
                  </p>
                  <Link
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800  "
                    href="#"
                  >
                    EdelwaissBusines@gmail.com
                  </Link>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
        </div>
      </div>
    {/* Contact */}

      <Footer />
    </div>
  );
}
