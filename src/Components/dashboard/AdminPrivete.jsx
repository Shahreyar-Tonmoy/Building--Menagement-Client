/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Login/Firebase/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import UserAdmin from "../Hooks/UserAdmin";


const AdminPrivete = ({children}) => {
    const {isAdmin,isAdminLoading} =UserAdmin()
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()
    const Navigate = useNavigate()
    

    if(loading || isAdminLoading){
        return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}

    >
        <CircularProgress color="inherit" />
    </Backdrop>
    }
    if(user && isAdmin){
        return children
    }
    


    return <Navigate state={location.pathname} to ="/SignIn"></Navigate>
};

export default AdminPrivete;