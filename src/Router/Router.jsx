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
import UserOnlyProfile from "../Components/dashboard/UserOnlyProfile";
import MemberProfile from "../Components/dashboard/MemberProfile";
import AnnouncementCard from "../Components/dashboard/Announcement";
import ManageCoupons from "../Components/dashboard/ManageCoupons";
import MakePayment from "../Components/dashboard/MakePayment";
import PaymentHistory from "../Components/dashboard/PaymentHistory";








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
            element : <Apartment></Apartment>,
            loader: () => fetch("http://localhost:5000/pagination")
           
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

            // admin


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
                path : "/dashboard/makeAnnouncement",
                element: <MakeAnnouncement></MakeAnnouncement>
            },
            {
                path : "/dashboard/manageCoupons",
                element: <ManageCoupons></ManageCoupons>
            },
            // admin end

            // member

            {
                path : "/dashboard/member/profile",
                element: <MemberProfile></MemberProfile>
            },
            {
                path : "/dashboard/makePayment",
                element: <MakePayment></MakePayment>
            },
            {
                path : "/dashboard/paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },


            // user

            {
                path : "/dashboard/user/profile",
                element: <UserOnlyProfile></UserOnlyProfile>
            },
            {
                path : "/dashboard/Announcement",
                element: <AnnouncementCard></AnnouncementCard>
            },



        ]
    },
    
])

export default Router;