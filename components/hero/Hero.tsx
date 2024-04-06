import React from "react";

function Hero() {
  return (
    <div className="bg-stone-200">
      <div className=" mx-auto h-full px-4 py-20 md:py-18 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className=" ">
            <div className="lg:max-w-xl lg:pr-5">
              <p className="flex text-sm uppercase text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                An agency for high growth startups
              </p>
              <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-black sm:text-7xl sm:leading-snug">
                We make you look
                <span className="my-1 inline-block border-b-8 border-black bg-red-600 px-4 font-bold text-white">
                  different
                </span>
              </h2>
              <p className="text-base text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque it.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-red-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
              >
                Stream Now{" "}
              </a>
              <a
                href="/"
                aria-label=""
                className="group inline-flex items-center font-semibold text-red-600"
              >
                Watch how it works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/500" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-white text-black w-[80%] mx-auto flex p-10">
        <div className="max-w-[70%]">
          <h1 className="text-2xl font-semibold mb-4">Find Your Local Branch</h1>
          <p className="text-sm ">
            Orkin Pros are experts in your local pests because they live and
            work where you do. Call 844-305-1435 or search based on your ZIP
            code.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
