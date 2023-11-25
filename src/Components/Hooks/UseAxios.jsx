/* eslint-disable react-refresh/only-export-components */
import axios from "axios";



export const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
    
})

const UseAxios = () => {
  
    return axiosSecure
};

export default UseAxios;