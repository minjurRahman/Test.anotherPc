
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
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
