
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { type } from "os";

type projectDataType = {
    projectId : number;
    project_name: string;
    description: string;
    client: string;
    completed_date: string;
    services_provided: string[];
}


export default function CardProject(prop: projectDataType) {
    return (
        <Link
            className=" border-2 rounded-lg m-4 lg:m-0 p-4 text-center lg:text-start "
            href={`/Portfolio/${prop.projectId}`}
        >
            <div className='flex flex-col lg:flex-row'>
            <div className=" h-72 lg:h-40 w-full overflow-hidden  bg-white  relative">
                <Image
                    className=" object-cover transform transition-transform duration-300 hover:scale-110 p-2"
                    src='/project.svg'
                    alt="Image Description"
                    fill
                />
            </div>
            <div className="lg:pl-10 mx-auto lg:pt-6">
                <h3 className="text-xl  font-semibold text-primary ">
                    {prop.project_name}
                </h3>
                
                {/* <p className="mt-5 text-gray-600 text-xs ">
                    {prop.description}
                </p> */}
                {/* <div className="mt-5 text-gray-600 ">
                    {prop.features.map((feature , index) => (<div key={index}>{feature}</div>) )}
                </div> */}
                {/* <div className='flex flex-col '>
                    <div className="mt-5 text-gray-600 ">
                        
                        {prop.price}
                    </div>
                    <div className="mt-5 text-gray-600 ">
                     
                        {prop.duration}
                    </div>
                </div> */}
            <p>{prop.description}</p>
            </div>
            </div>
            

        </Link>
    )
}
