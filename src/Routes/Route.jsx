import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Notfound from "./Notfound";
import College from "../Components/College";
import Admission from "../Components/Admission";
import Mycollege from "../Components/Mycollege";
import Login from "../Components/Registration/Login";
import Signup from "../Components/Registration/SignUp";

 
 const router = createBrowserRouter([
          {
                path: '/',
                element: <Main></Main>,
                errorElement: <Notfound></Notfound>,
                children: [
                        {
                                path:'/',
                                element:<Home></Home>
                        },
                        {
                                path:'college',
                                element:<College></College>
                        },
                        {
                                path:'admission',
                                element:<Admission></Admission>
                        },
                        {
                                path: 'mycollege',
                                element:<Mycollege></Mycollege>
                        },
                        {
                                path:'login',
                                element:<Login></Login>
         
                         },
                         {
                                path:'signup',
                                element:<Signup></Signup>
                         }
                ]
          }
 ])

 export default router;