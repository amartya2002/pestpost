import React from "react";
import ImageSlider from "../image-slider/ImageSlider";

export default function SecondSection() {
  const SecondSectionImgOne = [
    'https://picsum.photos/500',
    'https://picsum.photos/501',
    'https://picsum.photos/502',
  ];
  return (
    <div className="bg-white text-black mx-auto max-w-7xl">
      <div className="mt-16 space-y-4 px-8 text-center">
        <p className="text-red-400 font-semibold">
          Results Focused, Customer Centered
        </p>
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            We've Been Here from the Beginning
          </h1>
        </div>
        <p className="max-w-[20rem] sm:max-w-[38rem] mx-auto text-sm lg:text-base">
          With over 120 years of pest control experience since 1901, we've
          established ourselves as industry leaders in specialized protection
          against common pests like insects, termites, rodents, and more. Our
          extensive experience ensures your peace of mind.
        </p>
      </div>

      <div className="sm:mt-36">
        <div className="sm:flex sm:px-20 sm:bg-gray-100 ">
          <div className="sm:-mt-10 mt-6">
          <ImageSlider images={SecondSectionImgOne} />
          </div>
          <div className="flex flex-col justify-center items-center w-full my-8 sm:my-0 ">
            <div className="space-y-4 px-8 text-center">
              <p className="text-red-400 font-semibold">
                Results Focused, Customer Centered
              </p>
              <div>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                  We've Been Here from the Beginning
                </h1>
              </div>
              <p className="max-w-[20rem] sm:max-w-[38rem] mx-auto text-sm lg:text-base font-sans">
                With over 120 years of pest control experience since 1901, we've
                established ourselves as industry leaders in specialized
                protection against common pests like insects, termites, rodents,
                and more. Our extensive experience ensures your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
