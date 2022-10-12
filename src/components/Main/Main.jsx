import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header';

export const QuizTopisContexts = createContext([])

const Main = () => {
    const quizTopics = useLoaderData()
    const quizTopicsArray = quizTopics.data;

    return (
        <div>

            <QuizTopisContexts.Provider value={quizTopicsArray}>
                <Header></Header>
                <Outlet></Outlet>
            </QuizTopisContexts.Provider>

        </div >
    );
};

export default Main;