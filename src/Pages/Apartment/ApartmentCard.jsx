/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import UseAxios from "../../Components/Hooks/UseAxios";
import { AuthContext } from "../../Login/Firebase/AuthProvider";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import dateTime from 'date-time';


const ApartmentCard = ({data}) => {
    const {_id,ImageURL,Title,Floor,Block,ApartmentNo}=data
    const {user}=useContext(AuthContext)
    const email = user?.email
    const name = user?.displayName 
    const Status = "pending"   
    const Navigate = useNavigate()
    const location = useLocation()
    const date = (dateTime());



   const hendleClick =(_id,ImageURL,Title,Floor,Block,ApartmentNo)=>{
    const Agreement = {ImageURL,date,Title,Floor,Block,ApartmentNo,email,name,Status};
    const axiosSecure = UseAxios()
    axiosSecure.post("/rents",Agreement)
    .then((res)=>{
        console.log(res.data);
        if(res.data.insertedId){
            swal("Thanks!", "Your Agreement Is Pending !", "success");
        }

        if (res.data.insertedId) {
            Navigate(location?.state ? location?.state : "/")
        }
    })


   }
    

    



    return (
        <div>
            <div>
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-[10px]">
                        <img src={ImageURL} className="w-full h-80" />
                    </div>
                    <div className="relative  z-10 mx-7 -mt-20 rounded-lg bg-white shadow-2xl dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
                        <span className="text-primary mb-2 block text-2xl font-medium">
                            {Title}
                        </span>
                        <div className="flex justify-around">
                            <h3 className="text-dark dark:text-dark mb-5 text-lg font-bold">Floor no. {Floor}</h3>
                            <h3 className="text-dark dark:text-dark mb-5 text-lg font-bold">Block name. {Block}</h3>
                        </div>
                        <h3 className="text-dark dark:text-dark mb-5 text-lg font-bold">Apartment no. {ApartmentNo}</h3>
                        <button onClick={()=>hendleClick(_id,ImageURL,Title,Floor,Block,ApartmentNo)}

                            className="text-body-color btn dark:text-dark-6 hover:border-blue-500 hover:bg-blue-500 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
                        >
                            Agreement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;