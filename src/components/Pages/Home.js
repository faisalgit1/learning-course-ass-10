import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Courses from './Courses';
import Categories from './Shared/Categories';


const Home = () => {
    const allCategories = useLoaderData()
    console.log(allCategories)

    return (
        // <div>
        //     {
        //         allCategories.map(category => <Categories
        //             key={category.id}
        //             category={category}
        //         ></Categories>)
        //     }
        // </div>

        <div class="flex p-6">
            <div class="flex-none text-center border
                 border-slate-500 w-80 h-80 bg-sky-400 rounded hidden md:block  ...">
                <h1 className='text-3xl font-bold mt-5 mb-7'>Total Course: {allCategories.length}</h1>
                {
                    allCategories.map(category => <Link
                        key={category.id} ><p className='font-bold mb-2'>{category.name}</p></Link>)
                }
            </div>
            <div class="grow border  border-slate-500 grid gap-5 grid-cols-1 md:grid-cols-3 px-4 md:px-10 ">
                {
                    allCategories.map(category => <Courses key={category.id}
                        category={category}></Courses>)
                }

            </div>

        </div>
    );
};

export default Home;