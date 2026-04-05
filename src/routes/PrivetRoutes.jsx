import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../Pages/Loading/Loading';

const PrivetRoutes = ({children}) => {
    const {user,loading}=useAuth();
    const location = useLocation();
    console.log("location",location);
    
    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(!user){
        return <Navigate state={location.pathname} to={"/login"}></Navigate>
    }
    return children
};

export default PrivetRoutes;