/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Firebase/AuthProvider";
import { useContext } from "react";
import { Backdrop, CircularProgress } from "@mui/material";


const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
   
    if(loading){
        return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}

    >
        <CircularProgress color="inherit" />
    </Backdrop>
    }
    if(user){
        return children
    }
    


    return <Navigate state={location.pathname} to ="/SignIn"></Navigate>
};

export default PrivateRoute;