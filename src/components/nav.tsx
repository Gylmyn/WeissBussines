import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <Link
                    href="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >

                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        WeissBussines
                    </span>
                </Link>
                <div className="font-semibold lg:inline-flex gap-10 pr-20 hidden ">
                    <Link className="hover:text-primary" href="/">Home</Link>
                    <Link className="hover:text-primary" href="/Services">Services</Link>
                    <Link className="hover:text-primary" href="/Portfolio">Portfolio</Link>
                    <Link className="hover:text-primary" href="/about">AboutUs</Link>
                    <Link className="hover:text-primary" href="/Blog">Blog</Link>
                    <Link className="hover:text-primary" href="/contact">ContactUs</Link>
                </div>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />~
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 right-0 w-3/5 z-50 ">
                            <div className="p-6 bg-white border rounded shadow-sm text-center">
                                <div className=" mb-2 ml-36">
                                    <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                        </svg>
                                    </button>

                                </div>
                                <div className="flex flex-col text-start gap-6">
                                    <Link className="hover:text-primary" href="/">Home</Link>
                                    <Link className="hover:text-primary" href="/Services">Services</Link>
                                    <Link className="hover:text-primary" href="/Portfolio">Portfolio</Link>
                                    <Link className="hover:text-primary" href="/about">AboutUs</Link>
                                    <Link className="hover:text-primary" href="/Blog">Blog</Link>
                                    <Link className="hover:text-primary" href="/contact">ContactUs</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};