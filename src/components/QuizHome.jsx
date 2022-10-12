import React from 'react';

const QuizHome = ({ quiz }) => {
    const { id, logo, name, total } = quiz;

    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg'>
            <img
                className='object-cover bg-blue-600 w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
                src={logo}
                alt=''
            />
            <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
            <p className='text-gray-700 '>Total Question: {total}</p>
            {/* <p className='text-gray-700 font-bold'>Price: {price}$</p> */}
            {/* <button
                type='button'
                className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
            >
                Add To Cart
            </button> */}

            <a href="quiz" class="inline-flex items-center py-3 px-8 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Start Practice
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

        </div>
    )
};

export default QuizHome; 