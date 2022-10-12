import React from 'react';

const QuizDetails = ({quiz}) => {
    const {correctAnswer, options, question, id} = quiz;
    return (
        <div className='m-20 mb-8 rounded-lg border border-gray-200'>
            <h1 className='text-3xl m-20'>Some text Here:{question}</h1>
            <div className="grid m-20 mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col m-3 justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{options[0]}</h3>
                    </blockquote>

                </figure>
                <figure className="flex flex-col m-3 justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{options[1]}</h3>
                    </blockquote>
                </figure>
                <figure className="flex flex-col m-3 justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{options[2]}</h3>
                    </blockquote>
                </figure>
                <figure className="flex flex-col m-3 justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{options[3]}</h3>
                    </blockquote>
                </figure>
            </div>
        </div>
    );
};

export default QuizDetails;