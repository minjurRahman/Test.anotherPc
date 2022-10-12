import React from 'react';

const Quiz = () => {
    return (

        <div>
            <h1 className='text-3xl m-20'>Some text Here</h1>
            <div class="grid m-20 mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure class="flex flex-col m-3 justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                    </blockquote>

                </figure>
                <figure class="flex flex-col m-3 justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                    </blockquote>
                </figure>
                <figure class="flex flex-col m-3 justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                    </blockquote>
                </figure>
                <figure class="flex flex-col m-3 justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                    </blockquote>
                </figure>
            </div>
        </div>

    );
};

export default Quiz;