import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const AuthProvider = ({children}) => {
    
    const provider = new GoogleAuthProvider();
    const [user , setUser]=useState(null);
    const [loading , setLoading]=useState(true)

    // register user
    const registerUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user
    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    // google login 
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    // logOut 
    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }

    // observed user state 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        registerUser,
        signInUser,
        googleLogin,
        logOut
    }

    return (
        <AuthContext  value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;