
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Quiz from './components/Quiz';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/quiz/:quizId',
        loader: async ({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Quiz></Quiz>,
      },
    ]
  }

])

function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
