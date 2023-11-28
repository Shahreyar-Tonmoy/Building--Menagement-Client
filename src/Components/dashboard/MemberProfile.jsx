import { Backdrop, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Login/Firebase/AuthProvider";


const MemberProfile = () => {

    const { user } = useContext(AuthContext)
    // console.log(user)
    const { isPending, isError, error, data } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/rents/${user?.email}`)
            return res.json()
        }

    })
    // console.log(filter);

    const filter = data?.filter(e => e.Status === "checked")



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

    if (isError) {
        return <span>Error: {error?.message}</span>
    }

    // console.log(filter[0])

    return (

        <div className=" mx-auto  overflow-y-scroll h-[90vh]  rounded-lg  p-5">
            <img className="w-32 h-32 shadow-xl rounded-full mx-auto" src={user?.photoURL} alt="Profile picture" />
            <h2 className="text-center text-2xl font-semibold mt-3">Name: {user?.displayName}</h2>
            <p className="text-center text-gray-600 mt-1">Email: {user?.email}</p>

            <div className="mt-5">
                <div>

                    <section className=" ">
                        <div className="   block  relative bg-opacity-50  z-40  ">
                            <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full  ">
                                
                                
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                                    
                                    <div className="  mt-12 lg:mt-20   ">

                                    
                                        
                                        <div className="transition-all w-96 mx-auto  duration-1000 shadow-2xl bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                                            <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                                            </div>
                                            <div className="py-2 px-9 relative  ">
                                            <img className="w-32 h-32 rounded-full mx-auto" src={filter[0]?.ImageURL} alt="Profile picture" />
                                                <h3 className="mt-8 text-md font-semibold text-black group-hover:text-white ">Agreement accept date: {filter[0]?.AcceptDate?.split(" ",1)}
                                                </h3>

                                                <div className="flex my-3 gap-5 justify-around">
                                                <h3 className=" text-md font-semibold text-black group-hover:text-white ">Floor No: {filter[0]?.Floor}
                                                </h3>
                                                <h3 className=" text-md font-semibold text-black group-hover:text-white ">Block name: {filter[0]?.Block}
                                                </h3>
                                                </div>
                                                <div className="flex my-3 gap-5 justify-around">
                                                <h3 className=" text-md font-semibold text-black group-hover:text-white ">Apartment No: {filter[0]?.ApartmentNo}
                                                </h3>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div></section>

                </div>
            </div>


        </div>

    )
};

export default MemberProfile;