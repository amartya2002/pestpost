import React, { useState, useEffect } from 'react';

interface TextSliderProps {
  texts: { title: string; title_highlight: string }[];
}

const TextSlider: React.FC<TextSliderProps> = ({ texts }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="mb-10 bg-red-70 h-[10rem] sm:h-72 font-serif">
      <h2 className="mb-4 max-w-lg text-4xl font-light leading-snug tracking-tight text-black sm:text-6xl sm:leading-snug">
      {texts[textIndex].title}
                <span className="my-1 inline-block border-b-8 border-black bg-[#CC092F] px-4 font-bold text-white rounded">
                {texts[textIndex].title_highlight}
                </span>
              </h2>
    </div>
  );
};

export default TextSlider;


              {/* <div>
              <p className="flex text-sm text-[#CC092F]">
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
                Best Snake management Service in Kolkata.
              </p>
              <h2 className="mb-4 max-w-lg text-5xl font-light leading-snug tracking-tight text-black sm:text-7xl sm:leading-snug">
              Say Goodbye to Unwanted Pests
                <span className="my-1 inline-block border-b-8 border-black bg-[#CC092F] px-4 font-bold text-white rounded">
                Today
                </span>
              </h2>
              <p className="text-base text-gray-700">
              Discover comprehensive pest control solutions tailored to your needs. Our expert team is dedicated to ensuring your home or business remains pest-free, so you can enjoy peace of mind and a healthier environment.
              </p>
            </div> */}