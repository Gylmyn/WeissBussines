import Footer from "@/components/footer";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { type } from "os";
import { useEffect, useState } from "react";
import jsonServicesData from "@/data/services-data.json"
import { Nav } from "@/components/nav";
import { Comic_Neue } from 'next/font/google'

const inter2 = Comic_Neue({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

type servicesDataType = {
  serviceId: number;
  service_name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];

};

export default function Project() {
  const [servicesData, setServicesData] = useState<servicesDataType>();
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const detail = router.query.detail as string;
      const getData = jsonServicesData.find((item) => item.serviceId === parseInt(detail))
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
            
          </div>
          {/* End Avatar Media */}
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <figure className="w-full h-80 relative">
              <Image
                className="w-full object-cover rounded-xl"
                src='https://source.unsplash.com/random/?tech'
                alt="Image Description"
                fill
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                Disini judul
              </figcaption>
            </figure>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl ">{servicesData?.service_name}</h2>
              <p className="text-lg text-gray-800 ">{servicesData?.description}</p>
              <p className="text-lg text-gray-800 opacity-60">{servicesData?.features}</p>
              {/* {servicesData?.features.map((item, index) => <p key={index} className=" leading-none text-gray-800 max-w-xs">{item}</p> )} */}
            </div>

            <div>
              <div className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
                {servicesData?.price}
              </div>
              <div className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
              {servicesData?.duration}
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