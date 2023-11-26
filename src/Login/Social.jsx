import { Button } from '@mui/material';
import React from 'react';
import UseAxiosPublic from '../Components/Hooks/UseAxiosPublic';
import { AuthContext } from './Firebase/AuthProvider';
// import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const { SignInWithGoogle } = React.useContext(AuthContext)
    const axiosPublic =UseAxiosPublic()
    const navigate = useNavigate()
    

    const hendleGoogle = () => {

        SignInWithGoogle()
            .then(result => {
                const users = (result.user)
                console.log(result.user);

                const userData ={
                    Name: users?.displayName,
                    Email: users?.email,
                    Role: "user"
                }
                console.log(userData);

                axiosPublic.post("/users",userData)
                .then(res =>{
                    if(res.data.insertedId){
                        swal("Good job!", "You are sign in with google!", "success");
                

                
                navigate( "/")

                    }
                    else{
                        swal("Good job!", "You are sign in with google & Data Base!", "success");
                

                
                navigate( "/")
                    }
                
                console.log(res.data);
                })



               

            })
            .catch(error => {
                console.log(error.massage);
                if (error.massage) {
                    swal("Error!", `{${error.massage}}`, "error");
                }
            });

    }




    return (
        <div>
            <Button sx={{ mt: 5, mb: 2 }} onClick={hendleGoogle} variant="text" startIcon={<img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" width={30} />}>
                Continue with Google
            </Button>
        </div>
    );
};

export default Social;