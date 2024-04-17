import React from 'react'

export default function Footer() {
    return (

        <footer className='bg-black'>
            <div className="px-8 pt-16 pb-24 mx-auto md:px-12 lg:px-32 max-w-7xl ">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div>
                        <p className="text-2xl font-bold uppercase text-white">Company</p>
                        <p className="mt-2 text-sm font-medium text-zinc-500 lg:w-4/5">
                            A set of
                            <em className="text-accent-600"></em> elements,
                            templates &amp; layouts
                            <span className="lg:block"> made with Tailwind CSS and Alpine.js</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-12 text-sm font-medium text-gray-500 lg:grid-cols-3 lg:mt-0 xl:col-span-2">
                        <div>
                            <h3 className="text-base text-white">Information</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                <li>
                                    <a href="#_" className="hover:text-black">
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base text-white">Socials</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                <li>
                                    <a href="https://twitter.com/lexingtonthemes" className="hover:text-black">
                                        @lexingtonthemes
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Mike_Andreuzza" className="hover:text-black">
                                        @Mike_Andreuzza
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-base text-white">Premium Themes</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                <li>
                                    <a href="https://lexingtonthemes.com/" className="hover:text-black">
                                        Lexington Themes
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pt-12 md:flex-row md:items-center md:justify-between" x-data="{ year: new Date().getFullYear() }">
                    <span className="text-sm font-medium text-gray-500">
                        Copyright © <span x-text="year">2024</span>
                        <a aria-label="Michael Andreuzza" href="#_" className="mx-2 text-red-500 hover:text-gray-500">michael andreuzza</a>
                        Since 1985
                    </span>
                </div>
            </div>
        </footer>

    )
}
