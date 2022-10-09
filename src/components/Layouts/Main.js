import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';

const main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default main;