import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Shared/Category';

const Home = ({ img }) => {
    const allCategories = useLoaderData()
    console.log(allCategories)

    return (
        <div>
            {
                allCategories.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Home;