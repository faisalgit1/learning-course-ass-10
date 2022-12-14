import React, { useState } from 'react';
import { Link, NavLink, } from 'react-router-dom';
import { useContext } from 'react';
import { FaUser } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { AuthContext } from '../../Context/AuthProvider';


const Header = () => {
    const [open, setOpen] = useState(false)

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log('error', error); })
    }
    const [allCategories, setCourses] = useState([])
    useEffect(() => {
        fetch('https://learning-course-server-steel.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className=' bg-white text-gray-900 dark:text-white dark:bg-gray-800 z-50 drop-shadow-xl sticky top-0       items-center md:px-10 px-4 py-3 flex justify-between w-full'>

            <div className='flex items-center'>
                <img className='h-10 border z-10 dark:border-2  shadow-2xl rounded-full mr-2' src='https://kansasteachingandleadingproject.org/wp-content/uploads/2020/09/southeast-education-service-center-greenbush-continuous-learning-favicon.png' alt="" />
                <h1 className='md:text-3xl  text-2xl z-50 font-bold'>Learning Course</h1>

            </div>
            <div >
                <ul className={`md:flex rounded-lg items-center right-0 z-0 bg-white dark:bg-gray-800 w-full  text-center justify-center ease-in  md:static  absolute ${open ? 'top-14' : 'top-[-800px]'}`}>
                    <li className='font-semibold my-2 mr-4'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-green-500 ' : undefined
                        }

                            to='/'>Home</NavLink >
                    </li>

                    <li className='font-semibold my-2 mr-4'>
                        <NavLink className={({ isActive }) =>
                            isActive ? ' text-green-500' : undefined
                        } to='/blog'>Blogs</NavLink >
                    </li>




                    {/* User  */}
                    {
                        user?.uid ?
                            <>
                                <li className='font-semibold my-2 ' >
                                    <Link to='/user'>

                                        <span>{user.displayName ?
                                            <span className='flex justify-center items-center mr-2'>

                                                <ReactTooltip place="bottom" type="dark" effect="solid"></ReactTooltip>

                                                <img data-tip={user.displayName} className='rounded-full mx-2' style={{ height: '30px' }} src={user.photoURL} alt="" />
                                            </span>
                                            :
                                            <div className='flex justify-center items-center gap-2 mr-3'>
                                                <ReactTooltip place="bottom" type="dark" effect="solid"></ReactTooltip>
                                                <FaUser data-tip="Anonymus"></FaUser>
                                            </div>
                                        }</span>
                                    </Link>
                                </li>
                                <li className='font-semibold mr-4'>
                                    <Link to='/'><button onClick={handleLogOut} className="px-2 py-1 md:my-0 my-2 font-semibold rounded-full z-10 bg-sky-700 ">Log Out</button></Link>

                                </li>

                            </>
                            :
                            <>
                                <li>
                                    <Link to='/login'><button className="px-3 py-1 md:my-0 mt-2 font-semibold rounded-full  text-white bg-sky-700 mr-2">Sign In</button></Link>
                                </li>
                                <li>
                                    <Link to='/register'><button className="px-3 py-1 md:my-0 my-2 font-semibold rounded-full border border-sky-700 text-white  bg-sky-700">Sign Up</button></Link>
                                </li>
                            </>
                    }
                    <li>
                        <div className='md:hidden block'>
                            <h2 className="text-3xl text-center  text-teal-500 font-bold ">Catagory</h2>
                            {
                                allCategories.map(category => <Link key={category.id} to={`course-categories/${category.id}`}><p className="font-semibold">{category.name}</p></Link>)
                            }
                        </div>
                    </li>

                </ul>
                <div onClick={() => setOpen(!open)} className="h-6 ease-in duration-300 transition   text-teal-600 w-6 md:hidden" >
                    {open ? <XMarkIcon />
                        : <Bars3Icon />
                    }
                </div>
            </div>
        </div >
    );
};

//  
//
export default Header;