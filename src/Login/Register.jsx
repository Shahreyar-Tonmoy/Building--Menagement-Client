/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';
import { AuthContext } from './Firebase/AuthProvider';


import { Link, useLocation, useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';
import UseAxiosPublic from '../Components/Hooks/UseAxiosPublic';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import Social from './Social';






function Copyright(props) {
    return (
        <Grid>

        </Grid>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

    const { SignInWithGoogle,createUser, updateUserInfo } = React.useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
   const axiosPublic =UseAxiosPublic()
    
    const [error, setError] = React.useState("")
    const [errorMassage, setErrorMassage] = React.useState()








    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get("email")
        const photo = data.get("photo")
        
        const name = data.get("name")
        const password = data.get("password")
        console.log(email, password,photo, name);


         if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(password)) {
            setError("Minimum six characters, at least one letter, one number and one special character");
            swal("Error!", `Minimum six characters, at least one letter, one number and one special character`, "error");

        }
        else {
            setError("")
            if (email) {
                createUser(email, password)
                    .then(result => {
                        console.log(result.user);
                        updateUserInfo({
                            displayName: name, photoURL: photo

                        })
                        .then(()=>{
                            const userInfo ={
                                Name: name,
                                Email: email
                            }
                            console.log(userInfo);

                            axiosPublic.post("/users",userInfo)
                            .then(res =>{
                                console.log(res.data);
                                if(res.data.insertedId){
                                    swal("Thanks For!", "Register!", "success");
                            

                            e.target.reset()
                            navigate(location?.state ? location?.state : "/")

                                }
                            })
                            


                        })



                       


                    })
                    .catch(error => {
                        setErrorMassage(error.message);
                        setErrorMassage(errorMassage);
                        if (error) {
                            swal("Error!", errorMassage, "error");
                        }


                    })

            }

        }








    };

    // const hendleGoogle = () => {

    //     SignInWithGoogle()
    //         .then(result => {
    //             const users = (result.user)
    //             console.log(result.user);

    //             // axios.post(`https://assignment-11-server-side-one.vercel.app/jwt`, user, { withCredentials: true })
    //             //     .then(res => {
    //             //         console.log(res.data);
    //             //         if (res.data.success) {
    //             //             swal("Good job!", "You are sign in with google!", "success");

    //             //         }

    //             // navigate(location?.state ? location?.state : "/")


    //             //     })
    //             const userData ={
    //                 Name: users?.displayName,
    //                 Email: users?.email
    //             }
    //             console.log(userData);

    //             axiosPublic.post("/users",userData)
    //             .then(res =>{
    //             //     if(res.data.insertedId){
    //             //         swal("Good job!", "You are sign in with google!", "success");
                

                
    //             // navigate( "/")

    //             //     }
    //             console.log(res.data);
    //             })



               

    //         })
    //         .catch(error => {
    //             console.log(error.massage);
    //             if (error.massage) {
    //                 swal("Error!", `{${error.massage}}`, "error");
    //             }
    //         });

    // }



    return (
        <div >
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main">
                    <CssBaseline />

                    <Grid height={"100vh"} item xs={12} sm={8} md={5}  component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 7,
                                mx: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',

                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

                                



                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Your Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="photo"
                                    label="photo"
                                    name="photo"
                                    autoComplete="photo"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>

                                    </Grid>
                                    <Grid item>
                                        <Link to="/signin" className='hover:underline hover:text-blue-500' variant="body2">
                                            <h1>{"Do you have an account? Sign In"}</h1>
                                        </Link>
                                    </Grid>

                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                            <Grid>


                                {/* <Button sx={{ mt: 5, mb: 2 }} onClick={hendleGoogle} variant="text" startIcon={<img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" width={30} />}>
                                    Continue with Google
                                </Button> */}

                                <Social></Social>


                            </Grid>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://i.ibb.co/BLsB6q0/20944400-removebg-preview.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                        }}
                    />


                </Grid>
            </ThemeProvider>
        </div>
    );
}