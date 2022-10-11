
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        
      }
    ]
  }

])

function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
