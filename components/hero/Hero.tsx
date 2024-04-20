"use client"
import React from "react";
import ImageSlider from "../image-slider/ImageSlider";
import TextSlider from "../text-slider/TextSlider";

function Hero() {
  const heroImgOne = [
    'https://picsum.photos/500',
    'https://picsum.photos/501',
    'https://picsum.photos/502',
  ];
  return (
    <div className="bg-stone-200 pb-10 px-4">
      <div className=" mx-auto h-full pt-12 md:py-18 sm:max-w-xl md:max-w-full md:px-12 lg:max-w-screen-xl lg:px-14 ">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className=" ">
            <div className="">

              <TextSlider
                texts={
                  [
                    { title: 'Say Goodbye to Unwanted Pests', title_highlight: 'Today' },
                    {
                      title: 'Protect Your Home from Termites',
                      title_highlight: 'Expertly'
                    },
                    {
                      title: 'Keep Your Property Rodent-Free',
                      title_highlight: 'Year-Round'
                    },
                    {
                      title: 'Effective Bed Bug Elimination',
                      title_highlight: 'Guaranteed'
                    }


                  ]
                }
              />


              <div className="flex flex-col items-center md:flex-row mb-6 sm:mb-0">
                <a
                  href="/"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-[#CC092F] px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-[#CC092F] focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                >
                  Get Your Personalized quote
                </a>
                <a
                  href="/"
                  aria-label=""
                  className="group inline-flex items-center font-semibold text-[#CC092F]"
                >
                  Explore Our Proven Process
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




          </div>
          <div className="mb-10">
            <ImageSlider images={heroImgOne} />
          </div>
        </div>
      </div>

      <div className=" bg-white text-black w-[90%]  rounded mx-auto flex  p-10 max-w-7xl">
        <div className="">
          <h1 className="text-2xl font-semibold mb-4 font-serif">Find Your Local Branch</h1>
          <p className="text-sm mb-4 ">
            Orkin Pros are experts in your local pests because they live and
            work where you do. Call 844-305-1435 or search based on your ZIP
            code.
          </p>
          <a className="text-red-500 font-medium" href="Contact Us">Contact Us &#10141;</a>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
