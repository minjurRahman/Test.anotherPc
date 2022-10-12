import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizTopisContexts } from "./Main/Main";
import QuizHome from "./QuizHome";



const Home = () => {
    const quizTopics = useContext(QuizTopisContexts);

    return (
        <section>
            <div className="bg-gray-100">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                        Welcome To Random Quiz
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                        Best Online quiz platform for gather more knowledge on Computer science and engineering.
                        You can perform in every topics.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/shop">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                            >
                                Nothing
                            </button>
                        </Link>
                        <Link to="/about">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
                            >
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* My div */}
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                    {
                        quizTopics.map(quiz => <QuizHome
                            key={quiz.id}
                            quiz={quiz}
                        ></QuizHome>)
                    }
                </div>
            </div>
            {/* <img
                src=''
                alt=""
                className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
            /> */}
        </section>
    );
};

export default Home;