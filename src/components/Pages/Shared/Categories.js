import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learning-course-server-steel.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='p-4'>
            <h4 className='text-center font-bold text-3xl mb-10'>Course Lists: {categories.length}</h4>
            <div >
                {
                    categories.map(category => <p className='text-center font-bold mb-2' key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Categories;