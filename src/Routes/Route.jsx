import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Notfound from "./Notfound";
import Admission from "../Components/Admission";
import Mycollege from "../Components/Mycollege";
import Login from "../Components/Registration/Login";
import Signup from "../Components/Registration/SignUp";
import AllCollege from "../Components/allCollege";
import Collegedetails from "./Collegedetails";
import Eventsports from "./Eventsports";
import PrivateRoute from "./PrivateRoute";
import Information from "../Components/Information";
import Updateinfo from "../Components/Updateinfo";

 
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
                                path:'allcollege',
                                element:<AllCollege></AllCollege>,
                                loader: () => fetch('https://college-booking-server-alpha.vercel.app/allcollege?search')
                        },
                        {
                                path:'details/:id',
                                element: <PrivateRoute><Collegedetails></Collegedetails></PrivateRoute>,
                                loader: ({params}) => fetch(`https://college-booking-server-alpha.vercel.app/${params.id}`)
                        },
                        {
                                path:'detail/:id',
                                element: <PrivateRoute><Eventsports></Eventsports></PrivateRoute>,
                                loader: ({params}) => fetch(`https://college-booking-server-alpha.vercel.app/${params.id}`)
                        },
                        {
                                path:'admission',
                                element:<Admission></Admission>
                        },
                        {
                                path:'updateinfo/:id',
                                element:<Updateinfo></Updateinfo>,
                                loader: ({params}) => fetch(`https://college-booking-server-alpha.vercel.app/addinfo/${params.id}`)
                        },
                        {
                                path:'info',
                                element: <PrivateRoute><Information></Information></PrivateRoute>
                        },
                        {
                                path:'mycollege',
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