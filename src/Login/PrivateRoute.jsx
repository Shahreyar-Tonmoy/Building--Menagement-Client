/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Firebase/AuthProvider";
import { useContext } from "react";


const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
   
    if(loading){
        return <div className="flex justify-center items-center"><progress className=" progress w-56"></progress></div>
    }
    if(user){
        return children
    }
    


    return <Navigate state={location.pathname} to ="/SignIn"></Navigate>
};

export default PrivateRoute;