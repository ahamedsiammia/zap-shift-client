import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {
    const {user,loading}=useAuth();
    const location = useLocation();
    console.log("location",location);
    
    if(loading){
        return <p className="text-4xl">loading...</p>
    }

    if(!user){
        return <Navigate state={location.pathname} to={"/login"}></Navigate>
    }
    return children
};

export default PrivetRoutes;