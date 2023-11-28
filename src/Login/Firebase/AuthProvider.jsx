/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import {

    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile,



} from "firebase/auth";
import app from "./Firebase.init";
import UseAxiosPublic from "../../Components/Hooks/UseAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const axiosPublic = UseAxiosPublic()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUserInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // console.log(user);

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const SignInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email : userEmail}
            setLoading(false)
            setUser(currentUser)
            

            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem("access-token",res.data.token)
                        setLoading(false)
                    }
                })
                


            }
            else{
               localStorage.removeItem("access-token")
               setLoading(false)
            }

            return () => {
                unSubscribe()
            }

        })
        


    }, [])

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {

    //         setUser(currentUser)
    //         setLoading(false)
    //     })
    //     return () => {
    //         unSubscribe()
    //     }


    // }, [])




    const AuthInfo = {

        user,
        SignInWithGoogle,
        loading,
        createUser,
        signInUser,
        logOut,
        updateUserInfo,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}