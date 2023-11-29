import { useContext } from "react";
import { AuthContext } from '../../Login/Firebase/AuthProvider';
import { Backdrop, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import PieCharts from "./Chart/PieCharts";











const UserProfile = () => {



    const { user } = useContext(AuthContext)


    const { isPending, isError, error, data } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/status",

            )
            return res.json()
        }

    })

    const {isPending:Pending, error:Error, data: Available } = useQuery({
        queryKey: ["Available"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/pagination"

            )
            return res.json()
        }

    })

    const count = Available?.count

    console.log(count)


    
    // console.log(count - data?.length);




    if (isPending) {
        return <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    }
    if (Pending) {
        return <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    if (Error) {
        return <span>Error: {error.message}</span>
    }



    return (
        
            <div className="h-[90vh] overflow-y-scroll">
                <div className=" mx-auto  overflow-y-scroll h-[90vh]  rounded-lg  p-5">
            <img className="w-32 h-32 shadow-xl rounded-full mx-auto" src={user?.photoURL} alt="Profile picture" />
            <h2 className="text-center text-2xl font-semibold mt-3">Name: {user?.displayName}</h2>
            <p className="text-center text-gray-600 mt-1">Email: {user?.email}</p>

            <div className="mt-5">
                <div>

                    <section className=" ">
                        <div className="   block  relative bg-opacity-50  z-40  ">
                            <div className="relative mx-auto h-full px-4 sm:max-w-xl md:max-w-full  ">
                                
                                
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                                    
                                    <div className="  mt-12 lg:mt-20 flex justify-center ">

                                    
                                    <PieCharts  booked={data?.length} count={count}></PieCharts>
                                       
                                        <div></div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div></section>

                </div>
            </div>


        </div>





                

            </div>


     



        




    );
}


export default UserProfile;



