/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import AdbIcon from '@mui/icons-material/Adb';
import LoginIcon from '@mui/icons-material/Login';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Login/Firebase/AuthProvider';
import swal from 'sweetalert';






function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const Navigate = useNavigate()
    const location = useLocation()

    const { user, logOut } = React.useContext(AuthContext)

    
      



    const hendleSignOut = () => {
        logOut()
            .then(() => {
                swal("Good job!", "You are successfully logout!", "success") &&

                    Navigate(location?.state ? location?.state : "/")

                setAnchorElUser(null);



            })


            .catch(error => console.log(error.massage))
    }





    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    
      


    return (
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <img className='w-40' src="https://i.ibb.co/VV6F9QB/Screenshot-2023-11-23-222701-removebg-preview.png" alt="" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                }
                            >
                                <Button

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'flex', }}
                                >
                                    Home
                                </Button>
                            </NavLink>



                            <NavLink
                                to="/apartment"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                }
                            >
                                <Button

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'flex', }}
                                >
                                    Apartment
                                </Button>
                            </NavLink>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        href="/"
                        component="a"
                        
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <img className='w-40' src="https://i.ibb.co/VV6F9QB/Screenshot-2023-11-23-222701-removebg-preview.png" alt="" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, mr: 16, justifyContent: "center", display: { xs: 'none', md: 'flex' } }}>

                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                            }
                        >
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'flex', }}
                            >
                                Home
                            </Button>
                        </NavLink>



                        <NavLink
                            to="/apartment"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                            }
                        >
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'flex', }}
                            >
                                Apartment
                            </Button>
                        </NavLink>




                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        {
                            user ? <>
                                <Tooltip title={user?.displayName}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                    </IconButton>
                                </Tooltip>
                            </> : <>

                                <NavLink
                                    to="/SignIn"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
                                    }
                                >
                                    <Button


                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, display: 'flex', }}
                                    >
                                        <LoginIcon></LoginIcon>   Login
                                    </Button>
                                </NavLink>

                            </>
                        }


                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <div className='flex flex-col px-5 gap-1'>
                                <Typography textAlign="center">{user?.displayName}</Typography>

                                <Link to={"/dashboard"}><Typography className='btn w-full text-blue-500 btn-link no-underline' textAlign="center">Dashboard</Typography>
                                </Link>
                                
                                {
                                    user ? <><button className='btn text-blue-500 -mt-3 w-full btn-link no-underline' onClick={hendleSignOut} textAlign="center">Log Out</button></> : ""
                                }
                            </div>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;