import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivetRoutes = (children) => {
    const {user,loading}=useAuth();
    
    if(loading){
        return <p className="text-4xl">loading...</p>
    }

    if(!user){
        return <Navigate to={"/login"}></Navigate>
    }
    return children
};

export default PrivetRoutes;