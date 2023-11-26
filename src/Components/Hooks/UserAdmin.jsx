import { useContext } from "react";
import { AuthContext } from "../../Login/Firebase/AuthProvider";
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";


const UserAdmin = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const {data: isAdmin,isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            console.log(res.data);
            return res.data?.admin
        }

    })

    

    // console.log(isAdmin);
     return [isAdmin,isAdminLoading]

};

export default UserAdmin;