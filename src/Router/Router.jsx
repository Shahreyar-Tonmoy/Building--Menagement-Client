/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Register from "../Login/Register";
import SignIn from "../Login/SignIn";
import Apartment from "../Pages/Apartment/Apartment";
import AddRents from "../Components/Add Rents/AddRents";
import Dashboard from "../Components/dashboard/Dashboard";
import PrivateRoute from "../Login/PrivateRoute";
import UserProfile from "../Components/dashboard/UserProfile";
import AgreementRequest from "../Components/dashboard/AgreementRequest";
import MemberManage from "../Components/dashboard/MemberManage";
import Announcement from "../Components/dashboard/Announcement";
import MakeAnnouncement from "../Components/dashboard/MakeAnnouncement";







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
        {
            path : "/apartment",
            element : <Apartment></Apartment>
           
        },
        {
            path : "/app",
            element : <AddRents></AddRents>
        },
        
       
    
        
        
       ]
       
    },
    {
        path : "/dashboard",
        element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children : [
            {
                path : "/dashboard/adminProfile",
                element: <UserProfile></UserProfile>,
            },
            {
                path : "/dashboard/agreementRequest",
                element: <AgreementRequest></AgreementRequest>
            },
            {
                path : "/dashboard/manageMembers",
                element: <MemberManage></MemberManage>
            },
            {
                path : "/dashboard/Announcement",
                element: <Announcement></Announcement>
            },
            {
                path : "/dashboard/makeAnnouncement",
                element: <MakeAnnouncement></MakeAnnouncement>
            },
        ]
    },
    
])

export default Router;