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

    const { isPending: Pending, error: Error, data: Available } = useQuery({
        queryKey: ["Available"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/pagination"

            )
            return res.json()
        }

    })

    const count = Available?.count

    



    // console.log(count - data?.length);

    const {  data: Users } = useQuery({
        queryKey: ["Users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users"

            )
            return res.json()
        }

    })
    const filterUser = Users?.filter(e => e?.Role === "user")
    const filterMember = Users?.filter(e => e?.Role === "Member")


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
    if (Error ) {
        return <span>Error: {error.message}</span>
    }



    return (

        <div className="h-[90vh] overflow-y-scroll">
            <div className=" mx-auto  overflow-y-scroll h-[90vh]  rounded-lg ">
                <img className="w-32 h-32 shadow-xl rounded-full mx-auto" src={user?.photoURL} alt="Profile picture" />
                <h2 className="text-center text-2xl font-semibold ">Name: {user?.displayName}</h2>
                <p className="text-center text-gray-600 mt-1">Email: {user?.email}</p>

                <div>



                    <div className="block relative bg-opacity-50  z-40  ">
                        <div className="relative mx-auto h-full px-4 sm:max-w-xl md:max-w-full  ">


                            <div className=" sm:px-6  relative">

                                <div className="-mt-6 md:flex justify-around ">

                                    <PieCharts booked={data?.length} count={count}></PieCharts>


                                    <div>



                                        <section className=" bg-blueGray-50">
                                            <div className="w-full   mx-auto mt-24">
                                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
                                                    
                                                    <div className="block w-full overflow-x-auto">
                                                        <table className="items-center w-full border-collapse text-blueGray-700  ">
                                                            <thead className="thead-light ">
                                                                <tr>
                                                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                        User & Member
                                                                    </th>
                                                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                        Count
                                                                    </th>
                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                                        User
                                                                    </th>
                                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                                    {filterUser?.length}
                                                                    </td>
                                                                    
                                                                </tr>
                                                                
                                                               
                                                                <tr>
                                                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                                        Member
                                                                    </th>
                                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                       
                                                                       {filterMember?.length}

                                                                    </td>
                                                                   
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </section>
                                        <section className=" bg-blueGray-50">
                                            <div className="w-full   mx-auto ">
                                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
                                                    
                                                    <div className="block w-full overflow-x-auto">
                                                        <table className="items-center w-full border-collapse text-blueGray-700  ">
                                                            <thead className="thead-light ">
                                                                <tr>
                                                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                        Total Rooms
                                                                    </th>
                                                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                        Count
                                                                    </th>
                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                
                                                                
                                                               
                                                                <tr>
                                                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                                        Rooms
                                                                    </th>
                                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                        {count}
                                                                    </td>
                                                                    
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </section>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>


            </div>







        </div>











    );
}


export default UserProfile;



