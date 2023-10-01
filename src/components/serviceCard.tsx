
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { type } from "os";

type servicesDataType = {
    serviceId : number;
    service_name : string;
    description : string;
    price : string;
    duration : string;
    features : string[];
}


export default function CardService(prop: servicesDataType) {
    return (
        <Link
            className="flex flex-col rounded-lg border mx-10 bg-white p-6 lg:m-4 mb-10 "
            href={`/Services/${prop.serviceId}`}
        >
            <div className=" h-32 w-32 overflow-hidden border-2 mx-auto bg-white rounded-full relative">
                <Image
                    className="w-full object-cover transform transition-transform duration-300 hover:scale-110 p-2"
                    src='/services.svg'
                    alt="Image Description"
                    fill
                />
            </div>
            <div className="text-start">
                <h3 className="text-lg  font-semibold text-primary ">
                    {prop.service_name}
                </h3>
                <div className='text-start'>
                <p>{prop.features[0]}</p>
                <p>{prop.features[1]}</p>
                </div>
            </div>

        </Link>
    )
}
