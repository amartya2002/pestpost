import React from 'react'

export default function Faq() {
  return (
    <section className="px-6 py-10 sm:py-16 mx-auto md:px-12 lg:px-32 max-w-7xl">
    <div className="max-w-5xl mx-auto text-start mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
            Frequently Asked Questions
        </h2>
    </div>
    <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    Can I cancel at anytime?
                </h3>
                <p className="mt-2 text-gray-600">
                    Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    My team has credits. How do we use them?
                </h3>
                <p className="mt-2 text-gray-600">
                    Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    How does Preline's pricing work?
                </h3>
                <p className="mt-2 text-gray-600">
                    Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    How secure is Preline?
                </h3>
                <p className="mt-2 text-gray-600">
                    Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    Do you offer discounts?
                </h3>
                <p className="mt-2 text-gray-600">
                    We've built in discounts at each tier for teams. The time has come to bring those ideas and plans to life.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    What is your refund policy?
                </h3>
                <p className="mt-2 text-gray-600">
                    We offer refunds. We aim high at being focused on building relationships with our clients and community.
                </p>
            </div>
        </div>
    </div>
</section>
  )
}
