import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header';


const Main = () => {
    const quizeTopics = useLoaderData()
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>

        </div >
    );
};

export default Main;