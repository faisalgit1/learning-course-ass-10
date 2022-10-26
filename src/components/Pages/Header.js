import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="https://flowbite.com/" className="flex items-center">
                        <img src="https://kansasteachingandleadingproject.org/wp-content/uploads/2020/09/southeast-education-service-center-greenbush-continuous-learning-favicon.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Learning Course</span>
                    </Link>

                    <div
                        className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="blog" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
                            </li>
                            <li>
                                <Link to="register" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</Link>
                            </li>
                            <li>
                                <Link to="login" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log in</Link>
                            </li>
                            <li>
                                <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log Out</Link>
                            </li>
                        </ul>
                    </div>


                    {/* Mobile menu */}
                    <div class="lg:hidden">
                        <button aria-label="Open Menu"
                            onClick={() => setOpen(true)}
                            title="Open Menu"
                            class="p-2 -mr-1 transition 
                             duration-200 rounded focus:outline
                             -none focus:shadow-outline">
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        {/* Mobile menu dropdown */}
                        {isOpen && (
                            <div class="absolute top-0 left-0
                             w-full">
                                <div class="p-5 bg-white border 
                         rounded shadow-sm">
                                    <div class="flex items-center
                             justify-between mb-4">

                                        <div>
                                            <button aria-label="Close Menu"
                                                onClick={() => setOpen(false)}
                                                title="Close Menu"
                                                class="p-2 -mt-2 -me-2 
                                             transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                                <svg class="w-5 text-gray-600"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,
                                             0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4
                                             -1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3
                                             ,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19
                                             .9,4.7,20,5,20s0.5-0.1,0.7-0.3l6
                                             .3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0
                                             .7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,
                                             0.4-1,0-1.4L13.4,12l6.3-6.3C20.1
                                             ,5.3,20.1,4.7,19.7,4.3z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav className='text-center'>
                                        <ul class="space-y-4">
                                            <li><Link to="/"

                                                class="font-medium tracking-wide
                                              text-gray-700 transition-colors
                                               duration-200 hover:text-deep
                                               -purple-accent-
                                               400">Home</Link></li>
                                            <li><Link to="/blog"

                                                class="font-medium tracking-wide
                                                     text-gray-700 transition-colors duration-200 
                                                     hover:text-deep-purple-accent
                                                     -400">Blog</Link></li>
                                            <li><Link to="/login"

                                                class="font-medium tracking-wide
                                               text-gray-700 transition-colors
                                                duration-200 hover:text-
                                                deep-purple-accent
                                                -400">Log in</Link></li>
                                            <li><Link to="/register"
                                                class="font-medium tracking-wide
                                                text-gray-700 transition-colors
                                                 duration-200 hover:text-
                                                 deep-purple-accent
                                                 -400"
                                            >Register</Link></li>
                                            <li><Link to=""
                                                class="font-medium tracking-wide
                                                text-gray-700 transition-colors
                                                 duration-200 hover:text-
                                                 deep-purple-accent
                                                 -400"
                                            >Log Out</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;