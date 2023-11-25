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
import swal from 'sweetalert';
import axios from 'axios';
import { AuthContext } from './Firebase/AuthProvider';

import { Link, useLocation, useNavigate } from "react-router-dom";
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

    const { signInUser, SignInWithGoogle } = React.useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()







    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email")
        const password = data.get("password")

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                const loggedInUser = (result.user);
                const user = { email }

                // axios.post(`https://assignment-11-server-side-one.vercel.app/jwt`, user, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data);
                //         if (res.data.success) {
                //             swal("Good job!", "You are sign in!", "success");

                //         }

                //         navigate(location?.state ? location?.state : "/")

                //     })

                if (result.user) {
                    swal("Good job!", "You are sign in with google!", "success");

                }

                if (result.user) {
                    navigate(location?.state ? location?.state : "/")
                }


            })
            .catch(error => {

                if (error) {
                    swal("Error!", "Invalid email or password", "error");
                }



            })



        console.log(
            email, password
        );
    };

    // const hendleGoogle = () => {

    //     SignInWithGoogle()
    //         .then(result => {
    //             const user = (result.user)

    //             // axios.post(`https://assignment-11-server-side-one.vercel.app/jwt`, user, { withCredentials: true })
    //             //     .then(res => {
    //             //         console.log(res.data);
    //             //         if (res.data.success) {
    //             //             swal("Good job!", "You are sign in with google!", "success");

    //             //         }

    //             // navigate(location?.state ? location?.state : "/")


    //             //     })



    //             if (result.user) {
    //                 swal("Good job!", "You are sign in with google!", "success");

    //             }
    //             if (result.user) {
    //                 navigate(location?.state ? location?.state : "/")
    //             }


    //         })
    //         .catch(error => {
    //             console.log(error.massage);
    //             if (error.massage) {
    //                 swal("Error!", `{${error.massage}}`, "error");
    //             }
    //         });

    // }



    return (
        
            <ThemeProvider theme={defaultTheme}>
            <Grid height={"100vh"} container component="main">
                <CssBaseline />
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
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                                    <Link to="/register" className='hover:underline hover:text-blue-500' variant="body2">
                                        <h1>{"Don't have an account? Sign Up"}</h1>
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
            </Grid>
        </ThemeProvider>
        
    );
}