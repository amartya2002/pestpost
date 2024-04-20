import CircularPestList from '@/components/pest-library/circular-pest-card';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const MobileNav = () => {
    return (
        <div>
            {/* 1st Section  */}
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

            {/* 2nd section  */}
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

            {/* 3rd Section            */}

            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4 px-6 py-10 sm:py-16 mx-auto md:px-12 lg:px-32 max-w-7xl'>

                <CircularPestList title='Cockroach' description='Cockroach ' redirect_url='' image_uri='https://picsum.photos/400' text_color='dark' />

                <CircularPestList title='Cockroach' description='Cockroach ' redirect_url='' image_uri='https://picsum.photos/200' text_color='dark' />

                <CircularPestList title='Cockroach' description='Cockroach ' redirect_url='' image_uri='https://picsum.photos/200' text_color='dark' />

                <CircularPestList title='Cockroach' description='Cockroach ' redirect_url='' image_uri='https://picsum.photos/200' text_color='dark' />

                <CircularPestList title='Cockroach' description='Cockroach ' redirect_url='' image_uri='https://picsum.photos/200' text_color='dark' />

            </div>

            {/* 4th Section  */}
            <div>
                <section>
                    <div className="px-6 py-10 sm:py-16 mx-auto md:px-12 lg:px-32 max-w-7xl">
                        <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                            <div className="md:order-first">
                                <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 text-balance">
                                    Building one pagers together,
                                    <span className="text-gray-600">wherever and anywhere</span>
                                </h1>
                                <p className="mt-4 text-base font-medium text-gray-500">
                                    Control and added security. With decentralization, users have more
                                    control over their data and transactions, and the platform is less
                                    susceptible to malicious attacks.
                                </p>

                                <dl className="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6 text-pretty">
                                    <div>
                                        <div>❖</div>
                                        <dt className="mt-4 font-medium text-gray-900">
                                            No warranty disclaimer
                                        </dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            The license comes with no warranties. The licensor provides the
                                            work "as is," and users must use it at their own risk.
                                        </dd>
                                    </div>
                                    <div>
                                        <div>❖</div>
                                        <dt className="mt-4 font-medium text-gray-900">
                                            Commercial use allowed
                                        </dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            You are allowed to use the licensed work for both non-commercial
                                            and commercial purposes.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                                <div className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
                                    <img alt="#_" className="relative w-full rounded-2xl drop-shadow-2xl" src="https://picsum.photos/500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* 5th Section  */}

            <section>

                <div className="px-6 py-10 sm:py-16 mx-auto md:px-12 lg:px-32 max-w-7xl">
                    <div>
                        <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl text-balance">
                            Building one pagers together,
                            <span className="text-gray-600">wherever and anywhere</span>
                        </h1>
                        <p className="mt-4 text-base font-medium text-gray-500 text-balance">
                            Control and added security. With decentralization, users have more
                            control over their data and transactions, and the platform is less
                            susceptible to malicious attacks.
                        </p>

                        <div className="grid grid-cols-2 mt-12 gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                            <div>
                                <div>
                                    <span className="flex items-center justify-center rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
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
                                    <span className="flex items-center justify-center rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
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
                                    <span className="flex items-center justify-center rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
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
                                    <span className="flex items-center justify-center rounded-full size-12 bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-gray-600">
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
            </section>

            {/* 6th Section  */}


            <div className="px-6 py-10 sm:py-16 mx-auto md:px-12 lg:px-32 max-w-7xl">
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
    );
};

export default MobileNav;
