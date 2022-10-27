import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Errorpage from '../components/ErrorPage/Errorpage';
import Home from '../components/Pages/Home';
import Login from '../components/Pages/Login'
import Register from '../components/Pages/Register'
import CourseBuy from '../components/Pages/Shared/CourseBuy';
import CourseDetails from '../components/Pages/Shared/CourseDetails';
import Main from '../layout/Main';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
        {
            path: '/',
            loader: () => fetch('https://learning-course-server-steel.vercel.app/course-categories'),
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
        },
        {
            path: 'course-categories/:id',
            loader: ({ params }) => fetch(`https://learning-course-server-steel.vercel.app/course-categories/${params.id}`),
            element: <CourseDetails></CourseDetails>
        },

        {
            path: '/buy-course',
            element: <PrivateRoute><CourseBuy></CourseBuy></PrivateRoute>
        }
    ]
}])


export default routes;

