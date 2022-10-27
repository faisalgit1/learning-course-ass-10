import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ category }) => {
    const { name, img, price, details, id } = category
    return (
        <div>
            <div className="rounded-md border-teal-400 p-2 border shadow-md  ">
                <div className='justify-center flex w-full'>
                    <img src={img} alt="" className="bg-sky-400  object-center w-50 h-60 rounded-t-md  " />
                </div>
                <div className="flex flex-col p-4  rounded-lg bg-violet-400 justify-between  space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-center font-bold dark:text-white tracking-wide">{name}</h2>
                        <p className="dark:text-gray-300">{details.slice(0, 60)}...</p>

                        <div className='flex font-semibold justify-between'>
                            <p>Price:{price}</p>
                            <div className='flex items-center'>

                            </div>
                        </div>
                    </div>

                    <Link to={`/courses/`}>
                        <Link to={`course-categories/${id}`} type="button" className="flex items-center justify-center w-full p-3 bg-cyan-500 font-bold hover:bg-cyan-700  tracking-wide rounded-md "> Course Details</Link>

                    </Link>



                </div>
            </div>
        </div>
    );
};

export default Courses;