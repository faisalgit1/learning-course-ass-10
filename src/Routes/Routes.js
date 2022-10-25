import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Home from '../components/Pages/Home';
import Login from '../components/Pages/Login'
import Register from '../components/Pages/Register'
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
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
    ]
}])


export default routes;

