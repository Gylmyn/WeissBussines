import React from "react";

export default function FeatureSection() {
  return (
    <div className="max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
        {/* Icon Block */}
        <div>
          <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl ">
            <svg
              className="w-7 h-7 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 ">Service</h3>
            <p className="mt-1 text-gray-600 ">
              Responsive, and mobile-first project on the web
            </p>
          </div>
        </div>
        {/* End Icon Block */}
        {/* Icon Block */}
        <div>
          <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl ">
            <svg
              className="w-7 h-7 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
              <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
              <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 ">
              Portfolio
            </h3>
            <p className="mt-1 text-gray-600 ">
              Components are easily customized and extendable
            </p>
          </div>
        </div>
        {/* End Icon Block */}
        {/* Icon Block */}
        <div>
          <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl ">
            <svg
              className="w-7 h-7 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 ">
              About Us
            </h3>
            <p className="mt-1 text-gray-600 ">
              Every component and plugin is well documented
            </p>
          </div>
        </div>
        {/* End Icon Block */}
        {/* Icon Block */}
        <div>
          <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl ">
            <svg
              className="w-7 h-7 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 ">
             Blog
            </h3>
            <p className="mt-1 text-gray-600 ">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
        {/* End Icon Block */}
        <div>
            <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">Everything you need to run your books.</h2>
            <p className="mt-6 text-lg tracking-tight text-blue-100">Well everything you need if you aren`t that picky about minor details like tax compliance.</p>
            </div>
        </div>
        <div>
        <div className="mx-auto max-w-2xl">
            <div className="w-9 rounded-lg bg-blue-600">
                <svg aria-hidden="true" className="h-9 w-9" fill="none"><defs>
                    <linearGradient id=":R2mella:" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse">
                        <stop offset=".194" stop-color="#fff"></stop>
                        <stop offset="1" stop-color="#6692F1"></stop>
                        </linearGradient>
                        </defs>
                        <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:R2mella:)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <h3 className="mt-6 text-sm font-medium text-blue-600">Reporting</h3>
                            <p className="mt-2 font-display text-xl text-slate-900">Stay on top of things with always up-to-date reporting features.</p>
                            <p className="mt-4 text-sm text-slate-600">We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.</p>
        </div>
        </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Loved by businesses worldwide.</h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.</p>
                </div>
            </div>
        <li><ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
            <li><figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                </svg>
                <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.</p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                        <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                        <div className="mt-1 text-sm text-slate-500">CEO at Lynch LLC</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                            {/* <img alt="" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" className="h-14 w-14 object-cover" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=128&amp;q=75"> */}
                        </div>
                </figcaption>
                </figure>
                </li>
                <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                        </svg>
                        <blockquote className="relative">
                            <p className="text-lg tracking-tight text-slate-900">I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                            <div>
                                <div className="font-display text-base text-slate-900">Amy Hahn</div>
                                <div className="mt-1 text-sm text-slate-500">Director at Velocity Industries</div>
                                </div>
                            <div className="overflow-hidden rounded-full bg-slate-50"> </div>
                                {/* <img alt="" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" className="h-14 w-14 object-cover" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75"></div> */}
                        </figcaption>
                        </figure>
                        </li>
                        </ul>
                        </li>
      </div>
    </div>
  );
}
