import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope } from 'react-icons/fa';
import { Link} from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();
    const {pinResetEmail}=useAuth();

    const goToMail = () => {
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
};

    const handelForgetPassword =(data)=>{
        console.log(data);
        pinResetEmail(data.email)
        .then(() =>{
            toast.success("Check your email inbox or spam  ")
            console.log("send a password reset email");
            goToMail()
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="w-full max-w-md mx-auto lg:bg-[#E8F6BD] bg-white p-6 sm:p-8 rounded-2xl sm:shadow-lg lg:shadow-none">
            {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center sm:text-left">
        Forgot Password
      </h1>
      <p className="text-gray-500 mb-6 text-center sm:text-left">
        Enter your email address and we’ll send you a reset link.
      </p>

            <form onSubmit={handleSubmit(handelForgetPassword)}  className="space-y-4">
                        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <div className="flex items-center border rounded-lg px-3 mt-1 focus-within:ring-2 focus-within:ring-lime-400">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input 
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full py-2 outline-none text-sm sm:text-base bg-[#E8F6BD]"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}
        </div>
                {/* Button */}
        <button className="w-full bg-lime-400 hover:bg-lime-500 text-black py-2 rounded-lg font-medium transition">
          Send
        </button>
            </form>
            <p className="text-gray-500 mt-4 text-center sm:text-left">
          Remember your password? <Link className="text-sm text-lime-500 cursor-pointer hover:underline"  to={"/login"}>Login</Link>
      </p>
        </div>
    );
};

export default ForgetPassword;