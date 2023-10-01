
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { type } from "os";

type blogDataType = {
    id: number;
    title: string;
    author: string;
    date: string;
    category: string;
    content: string;
}


export default function CardBlog(prop: blogDataType) {
    return (
        <Link
            className="flex flex-col w-full border  border-gray-200 hover:bg-primary hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-sm p-6   "
            href={`/Blog/${prop.id}`}
        >
            {/* <div className="w-full h-20 overflow-hidden rounded-xl bg-red-400 relative">
                <Image
                    className=" object-cover rounded-xl"
                    src='https://source.unsplash.com/random/?japan'
                    alt="Image Description"
                    fill
                />
            </div> */}
            <div className="">
                <h3 className="text-sm font-semibold text-gray-800  ">
                    {prop.title}
                </h3>
                
                
            </div>

        </Link>
    )
}
