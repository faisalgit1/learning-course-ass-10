import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' md:px-20 px-4 my-10'>
                <div className='my-10'>
                    <div className=" text-3xl font-semibold text-black">
                        <h1 className='text-3xl my-2 '>1. What is the purpose of React Router?</h1>
                    </div>
                    <p className='font-semibold text-black'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='my-10'>
                    <div className="text-3xl font-semibold text-black">
                        <h1 className='text-3xl  my-2   '>2: How does Context API works?</h1>
                    </div>
                    <p className='font-semibold text-black'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                </div>

                <div className='my-10'>
                    <div className="text-3xl font-semibold text-black">
                        <h1 className='text-3xl my-2 '>3: What is UseRef Hook</h1>
                    </div>
                    <p className='font-semibold text-black'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
                <div className='my-10'>
                    <div className="text-3xl font-semibold text-black">
                        <h1 className='text-3xl  my-2   '>4:  What is SPA website?</h1>
                    </div>
                    <p className='font-semibold text-black'>A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;