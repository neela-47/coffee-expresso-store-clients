import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayOut = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;