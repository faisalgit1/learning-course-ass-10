import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const alldata = useLoaderData();

    const { name, img, price, details } = alldata
    return (
        <div className='flex bg-white pb-36 dark:bg-slate-900 text-slate-900 dark:text-white  justify-center p-5 md:p-20'>
            <div className='flex p-2 mb-10  items-center rounded-lg drop-shadow-xl shadow-xl border borderg-teal-400  flex-col text-center justify-around md:flex-row'>
                <div className='flex  justify-center'>
                    <img className='w-72 mx-2 ' src={img} alt="" />
                </div>
                <div className='px-5 my-4 text-start md:text-center'>
                    <div className='flex mb-2 p-2 rounded-lg  bg-sky-200 justify-between'>
                        <h1 className="text-3xl  font-semibold">{name}</h1>


                    </div>
                    <p className='md:w-96 text-start w-80 text-gray-400'>{details}</p>
                    <div className="flex flex-col md:my-0 my-4  items-center md:flex-row mt-2 justify-between">
                        <p className='font-semibold'>Price: {price}</p>
                        <Link to='/buy-course'>
                            <button type="button" className="font-semibold py-2 px-4 my-4 rounded-md bg-sky-400 hover:bg-sky-700 text-gray-100">Buy Course</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;