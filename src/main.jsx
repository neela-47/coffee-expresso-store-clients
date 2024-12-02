import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import MainLayOut from './Components/MainLayOut.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Users from './Components/Users.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayOut></MainLayOut>,
    children:[
      {
        path: "/",
        element: <App></App>,
        loader: ()=>fetch('http://localhost:5000/addCoffee')
      },
      {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'updateCoffee/:id',
      element:<UpdateCoffee></UpdateCoffee>,
      loader: ({params})=>fetch(`http://localhost:5000/addCoffee/${params.id}`)
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader: ()=> fetch('http://localhost:5000/users')
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
