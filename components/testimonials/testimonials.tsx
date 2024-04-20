import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Volkan Kaya',
    role: 'Founder of Versoly.com',
    imageSrc: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80',
    content: 'Snowflake is a cloud data platform that enables data storage, processing, and analytics solutions for businesses. With the Data Cloud platform, Snowflake manages the complexities of data storage infrastructure, enabling organizations to focus on building data-driven solutions.'
  },
  {
    id: 2,
    name: 'Amrit Nagi',
    role: 'Founder of Tailwind Toolbox',
    imageSrc: 'https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2073&amp;q=80',
    content: 'Upswing securities passively index inverse bondholders capitalization financial health Moody\'s debt managed. Receive bondholders called capitalization investment grade bonds bills management district stocks. Potential funds consulting expenses.'
  },
  {
    id: 3,
    name: 'Mike Jones',
    role: 'Blogger at Raspada',
    imageSrc: 'https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1999&amp;q=80',
    content: 'Debt bills lucrative capitalization municipal bonds government 401k bear bull credit corporate bonds called NYSE finance. Managed prices bondholders federal risk NASDAQ hedge fund expenses municipal bonds management.'
  }
];

export default function Testimonials() {
  return (
    <section className="px-6 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-[25rem] my-4">How our clients feel matters the most.</h2>

      <div className="">
        <ul className="w-full" role="list">
          <li className="py-4 lg:py-8">


            {testimonials.map((testimonial) => (
              <div className=' border-t py-6' key={testimonial.id}>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500 text-balance">
                    {testimonial.content}
                  </p>
                </div>
                <div className="inline-flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <img alt="" className="object-cover w-10 h-10 rounded-full lg:h-16 lg:w-16" src={testimonial.imageSrc} loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium leading-6 text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}




          </li>
        </ul>
      </div>

    </section>
  );
}



{/* <div>
  <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
    <ul className="w-full border-t divide-y border-mercury-300 divide-mercury-300" role="list">
      <li className="py-4 lg:py-8">
        <div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-24">

        {testimonials.map((testimonial) => (
                    <div key={testimonial.id}>
                    <div className="lg:col-span-2 lg:order-last">
                      <p className="text-sm font-medium text-gray-500 text-balance">
                        {testimonial.content}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <img alt="" className="object-cover w-10 h-10 rounded-full lg:h-16 lg:w-16" src={testimonial.imageSrc} loading="lazy" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-lg font-medium leading-6 text-black">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    </div>
        ) )}




        </div>
      </li>
    </ul>
  </div>
</div> */}
