import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const SocialLogin = () => {

    const {googleLogin} = useAuth();

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(res =>{
            alert("your login successfully")
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