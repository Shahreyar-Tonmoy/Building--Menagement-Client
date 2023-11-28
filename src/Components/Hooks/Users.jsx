import { useContext } from "react";
import { AuthContext } from "../../Login/Firebase/AuthProvider";
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";


const Users = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const {data: isUser} = useQuery({
        queryKey: [user?.email, "isUser"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/user/${user?.email}`)
            console.log(res.data);
            return res.data?.users
        }

    })

    
    console.log(isUser);
    
     return [isUser]
     

};

export default Users;