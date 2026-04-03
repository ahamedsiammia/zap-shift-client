import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from 'firebase/auth';
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

    // update user profile 
    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    // send a password reset email 
    const pinResetEmail =(email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
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
        updateUserProfile,
        registerUser,
        signInUser,
        googleLogin,
        logOut,
        pinResetEmail,
    }

    return (
        <AuthContext  value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;