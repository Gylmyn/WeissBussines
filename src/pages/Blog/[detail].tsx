import Footer from "@/components/footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { type } from "os";
import { useEffect, useState } from "react";
import jsonBlogData from "@/data/blog-data.json"
import { Nav } from "@/components/nav";
import { Comic_Neue } from 'next/font/google'

const inter2 = Comic_Neue({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

type blogDataType = {
    id: number;
    title: string;
    author: string;
    date: string;
    category: string;
    content: string;
}

export default function Project() {
  const [servicesData, setServicesData] = useState<blogDataType>();
  const router = useRouter();
  useEffect(() => {
    if (router.isReady){
      const detail = router.query.detail as string;
      const getData = jsonBlogData.find((item)=> item.id === parseInt(detail) )
      setServicesData(getData)
    }
  }, [router])
  
  return (
    <div className={inter2.className}>
      <Nav />
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          {/* Avatar Media */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0 relative h-12 w-12">
                <Image
                  className="rounded-full"
                  src="https://source.unsplash.com/random/?people"
                  alt="Image Description"
                  fill
                />
              </div>
              <div className="grow">
                <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
                  <div>
                    {/* Tooltip */}
                    <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-left cursor-pointer">
                        <span className="font-semibold text-gray-800 ">
                          {servicesData?.author}
                        </span>
                      </div>
                    </div>
                    {/* End Tooltip */}
                    <ul className="text-xs text-gray-500">
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full ">
                        Jan 18
                      </li>
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full ">
                        8 min read
                      </li>
                    </ul>
                  </div>
                  {/* Button Group */}
                  <div>
                    <button
                      type="button"
                      className="py-1.5 px-2.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm "
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                      Tweet
                    </button>
                  </div>
                  {/* End Button Group */}
                </div>
              </div>
            </div>
          </div>
          {/* End Avatar Media */}
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl ">{servicesData?.title}</h2>
              <p className="text-lg text-gray-800 ">{servicesData?.content}</p>
              {/* <p className="text-lg text-gray-800 opacity-60">{servicesData?.}</p> */}
              {/* {servicesData?.features.map((item, index) => <p key={index} className=" leading-none text-gray-800 max-w-xs">{item}</p> )} */}
            </div>

            <div>
              <div className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
                {servicesData?.category}
              </div>
              <div className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
              {servicesData?.date}
              </div>
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
      <Footer />
    </div>
  );
}