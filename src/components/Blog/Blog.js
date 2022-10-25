import React from 'react';

const Blog = () => {
    return (
        <div className='p-5'>
            <h1 className='text-4xl text-center font-bold'>Frequently Question</h1>
            <div className='my-10'>
                <div className=" text-3xl font-semibold text-black">
                    <h1 className='text-3xl my-2 '>1. What is Cors?</h1>
                </div>
                <p className='font-semibold text-black'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='my-10'>
                <div className="text-3xl font-semibold text-black">
                    <h1 className='text-3xl  my-2   '>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                </div>
                <p className='font-semibold text-black'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>
                <br />
                <p className='font-semibold text-black'>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>

            <div className='my-10'>
                <div className="text-3xl font-semibold text-black">
                    <h1 className='text-3xl my-2 '>3: How does the private route work?</h1>
                </div>
                <p className='font-semibold text-black'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='my-10'>
                <div className="text-3xl font-semibold text-black">
                    <h1 className='text-3xl  my-2   '>4: What is Node? How does Node work?</h1>
                </div>
                <p className='font-semibold text-black'>Node.js is an open source server environment.Node.js is free.
                    Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)Node.js uses JavaScript on the server</p>
                <br />
                <p className='font-semibold text-black'>
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>
        </div>
    );
};

export default Blog;