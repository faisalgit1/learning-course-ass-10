import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Pages/Home';

import Login from '../components/Pages/Login/Login';
import Register from '../components/Pages/Login/Register';
import Main from '../layout/Main';

const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            loader: () => fetch('http://localhost:5000/course-categories'),
            element: <Home></Home>
        },

    ]
}])


export default routes;

