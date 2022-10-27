import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ category }) => {
    const { name, id } = category
    return (
        <div>
            <Link to={`course-categories/${id}`}><p className='font-bold mb-2'>{name}</p></Link>
        </div>
    );
};

export default CourseList;

