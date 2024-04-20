import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function page() {
    return (
        <div>

            {/* 1st section  */}

            <div className="sm:flex justify-between px-6 py-10 sm:py-16 mx-auto md:px-12 lg:px-32 max-w-7xl">
                <div className='my-6'>
                    <p className="text-red-500 text-sm uppercase mb-2">Pest problem? We can help</p>
                    <h1 className="font-semibold text-4xl">Targeted Treatments for the Most Common Household Pests</h1>
                </div>

                <div className="my-6 mt-9">
                    <p className="text-lg text-gray-600 mb-2 font-medium">Don't let pests take over your home</p>
                    <p className="text-base text-gray-600 leading-relaxed">
                        With award-winning training and advanced technology, your Orkin specialist will look for conditions that invite pests and then tackle current infestations.
                    </p>
                </div>
            </div>

            {/* 2nd section  */}

            <div className="relative">
                <img
                    src="https://picsum.photos/1920/720"
                    alt="Placeholder"
                    className="block mx-auto h-72 sm:h-auto"
                    style={{ maxWidth: '100%' }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 px-2">
                    <h1 className="text-3xl font-bold text-white">Building one pagers together</h1>
                    <p className="text-lg text-gray-300">Wherever and anywhere</p>
                    <div className="flex justify-center mt-8 space-x-4">
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaGithub size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* 3rd Section  */}

            <section className='px-6 py-10 sm:py-16 mx-auto md:px-12 lg:px-32 max-w-7xl'>

                <div className='md:flex gap-36'>

                    <div className="text-centr">
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
                                Building one pagers together,
                                <span className="text-gray-600">wherever and anywhere</span>
                            </h1>
                            <p className="mt-4 text-base font-medium text-gray-500 text-balance">
                                Control and added security. With decentralization, users have more
                                control over their data and transactions, and the platform is less
                                susceptible to malicious attacks.
                            </p>

                            <div className="grid grid-cols-2 mt-12 text-center gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-16">
                                <div>
                                    <div>
                                        <span className="flex items-center justify-center mx-auto rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-medium text-gray-900">Live editing</h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Instantly see the result of every change you make.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="flex items-center justify-center mx-auto rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg></span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-medium text-gray-900">Autocompletion</h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            spotless will suggest the right classes for you as you type.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="flex items-center justify-center mx-auto rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-medium text-gray-900">Hide/show classes</h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Hide or show classes to see how your design changes.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="flex items-center justify-center mx-auto rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"></path></svg></span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-medium text-gray-900">Color preview</h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            See the color of every class in the autocompletion view.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="flex items-center justify-center mx-auto rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"></path></svg></span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-medium text-gray-900">Easy navigation</h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Hover over any element to see its Tailwind classes. Press Space to
                                            easily pin and edit the element.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="flex items-center justify-center mx-auto rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path></svg></span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-medium text-gray-900">Persistence</h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            spotless will remember all your changes to every element so you
                                            can copy all changes at once!
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="flex items-center justify-center mx-auto rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path></svg></span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-medium text-gray-900">Screenshot tool</h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Make screenshots of a particular part of the screen to share quick
                                            and easy!
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="flex items-center justify-center mx-auto rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path></svg></span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-medium text-gray-900">Breakpoint info</h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Instantly know what Tailwind breakpoint you're currently on.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' md:w-[80rem] mt-12 sm:mt-0'>
                        <div className="overflow-hidden">
                            {/* <!-- First section --> */}
                            <div className="bg-zinc-300 p-8">
                                <p className="text-xs md:text-sm text-red-500 uppercase mb-2">Get a free ant control quote</p>
                                <h1 className="text-lg md:text-xl font-semibold mb-2">Ant problems? We can help.</h1>
                                <p className="text-gray-600">Call <span className="font-medium text-red-500">855-512-3479</span></p>
                                <div className="mt-4"><a href="#" className="bg-red-500 px-6 py-2 text-white hover:bg-red-600">Get a quote</a></div>
                                <img src="https://picsum.photos/300" alt="" className="mt-6 mx-auto" />
                            </div>

                            {/* <!-- Second section --> */}
                            <div className="bg-zinc-800 p-8">
                                <h1 className="text-lg md:text-2xl font-semibold text-white mb-2">The Orkin Guarantee</h1>
                                <p className="text-gray-200 text-sm">Upfront pricing. 30-day money-back guarantee, and free returns if ants come back between ant treatments.</p>
                                <a href="#" className="text-red-500 font-semibold mt-4 hover:text-red-600">See the Orkin difference <span>&#10137;</span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4th Section  */}

            <div className="relative">
                <img
                    src="https://picsum.photos/1920/720"
                    alt="Placeholder"
                    className="block mx-auto h-[40rem] sm:h-auto"
                    style={{ maxWidth: '100%' }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
                    <div className='w-[22rem]'>
                        <div className="overflow-hidden">
                            {/* <!-- First section --> */}
                            <div className="bg-zinc-300 p-8">
                                <p className="text-xs md:text-sm text-red-500 uppercase mb-2">Get a free ant control quote</p>
                                <h1 className="text-lg md:text-xl font-semibold mb-2">Ant problems? We can help.</h1>
                                <p className="text-gray-600">Call <span className="font-medium text-red-500">855-512-3479</span></p>
                                <div className="mt-4"><a href="#" className="bg-red-500 px-6 py-2 text-white hover:bg-red-600">Get a quote</a></div>
                            </div>

                            {/* <!-- Second section --> */}
                            <div className="bg-zinc-800 p-8">
                                <h1 className="text-lg md:text-2xl font-semibold text-white mb-2">The Orkin Guarantee</h1>
                                <p className="text-gray-200 text-sm">Upfront pricing. 30-day money-back guarantee, and free returns if ants come back between ant treatments.</p>
                                <a href="#" className="text-red-500 font-semibold mt-4 hover:text-red-600">See the Orkin difference <span>&#10137;</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5th Section  */}

            <div className='px-6 py-10 sm:py-16 mx-auto md:px-12 lg:px-32 max-w-7xl'>
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
            </div>


        </div>
    )
}
