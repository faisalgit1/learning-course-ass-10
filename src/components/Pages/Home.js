import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseList from './CourseList';
import Courses from './Courses';
import HomeHeder from './HomeHeder';



const Home = () => {
    const allCategories = useLoaderData()
    console.log(allCategories)

    return (

        <div>
            <div className='bg-sky-400'>
                <HomeHeder></HomeHeder>
            </div>
            <div class="flex p-6">
                <div class="flex-none text-center  w-80 h-80 bg-sky-400 rounded hidden md:block  ...">
                    <h1 className='text-3xl font-bold mt-5 mb-7'>Total Course: {allCategories.length}</h1>
                    {
                        allCategories.map(category => <CourseList
                            key={category.id}
                            category={category}
                        ></CourseList>)
                    }
                </div>
                <div class="grow  grid gap-5 grid-cols-1 md:grid-cols-3 px-4 md:px-10 ">
                    {
                        allCategories.map(category => <Courses key={category.id}
                            category={category}></Courses>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Home;