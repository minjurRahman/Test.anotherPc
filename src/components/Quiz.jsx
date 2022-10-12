import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {

    const quiz = useLoaderData();
    const quizData = quiz.data.questions;
    console.log(quizData)

    return (

        <div>
            {
                quizData.map(quiz => <QuizDetails
                    key={quiz.id}
                    quiz={quiz}

                ></QuizDetails>)
            }
        </div>

    );
};

export default Quiz;