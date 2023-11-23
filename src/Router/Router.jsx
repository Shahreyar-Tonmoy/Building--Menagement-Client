/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Register from "../Login/Register";
import SignIn from "../Login/SignIn";







const Router = createBrowserRouter([
    
    {
        path :"/",
       element :<MainLayout></MainLayout> ,
       errorElement :<Error></Error>,
       children :[
        {
            path : "/",
            element : <Home></Home>,
           
        },
        {
            path : "/signin",
            element : <SignIn></SignIn>,
           
        },
        {
            path : "/register",
            element : <Register></Register>
           
        },
        
       
    
        
        
       ]
       
    }
])

export default Router;