import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import Footer from "../Pages/Footer/Footer";
// import { useContext } from "react";
// import { AuthContext } from "../Login/Firebase/AuthProvider";
// import { Backdrop, CircularProgress } from "@mui/material";
const MainLayout = () => {
//     const {loading} =useContext(AuthContext)
//     if(!user){
//         return <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={open}

//     >
//         <CircularProgress color="inherit" />
//     </Backdrop>
// }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;