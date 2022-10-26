import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Pages/Header';
import Categories from '../components/Pages/Shared/Categories';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div class="flex p-6">
                <div class="flex-none  border
                 border-slate-500 w-80  ...">
                    <Categories></Categories>
                </div>
                <div class="grow border  border-slate-500  ">
                    <Outlet></Outlet>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;