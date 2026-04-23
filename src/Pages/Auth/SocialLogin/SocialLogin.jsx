import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const SocialLogin = () => {
    const location = useLocation();
    const Navigate = useNavigate();
    const {googleLogin} = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(res =>{
            const userInfo = {
                displayName: res.user.displayName,
                photoURL: res.user.photoURL,
                email : res.user.email
            }
            //  save the user in the database 
            axiosSecure.post("/users",userInfo)
            .then(res =>{
                Navigate(location?.state || "/")
            toast.success("your login successfully")
            console.log("save the user in the database",res.data);
            
        })

            console.log(res.user);
        })
        .then(error =>{
            console.log(error);
        })
    }
    return (
                <button onClick={handleGoogleLogin}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-primary transition text-sm sm:text-base"
                >
                  <FaGoogle />
                  Register with Google
                </button>
        
    );
};

export default SocialLogin;