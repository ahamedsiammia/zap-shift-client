import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {signInUser}=useAuth();
    const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (data) => {
    console.log("login data", data);
    const {email,password}= data;
    signInUser(email,password)
    .then(res =>{
        alert("your login successfully ")
        console.log(res.user);
    })
    .then(error =>{
        // alert("your login not successfully")
        console.log(error);
    })
  };

  return (
    <div className="w-full max-w-md mx-auto lg:bg-[#E8F6BD] bg-white p-6 sm:p-8 rounded-2xl sm:shadow-lg lg:shadow-none">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center sm:text-left">
        Welcome Back
      </h1>
      <p className="text-gray-500 mb-6 text-center sm:text-left">
        Login to your ZapShift account
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

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

        {/* Password */}
        <div>
  <label className="text-sm font-medium">Password</label>

  <div className="flex items-center border rounded-lg px-3 mt-1 focus-within:ring-2 focus-within:ring-lime-400">
    
    <FaLock className="text-gray-400 mr-2" />

    <input
      {...register("password", { required: true })}
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      className="w-full py-2 outline-none bg-[#E8F6BD] text-sm sm:text-base"
    />

    {/* 👁 Eye toggle */}
    <span
      onClick={() => setShowPassword(!showPassword)}
      className="cursor-pointer text-gray-400 ml-2"
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>

  </div>

  {errors.password && (
    <p className="text-red-500 text-sm mt-1">Password is required</p>
  )}
</div>

        {/* Forgot Password */}
        <div className="">
          <a className="text-sm text-lime-500 cursor-pointer hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Button */}
        <button className="w-full bg-lime-400 hover:bg-lime-500 text-black py-2 rounded-lg font-medium transition">
          Login
        </button>

        {/* Register Link */}
        <p className="text-sm text-gray-500 text-center">
          Don’t have an account?{" "}
          <Link to={"/register"} className="text-lime-500 cursor-pointer">Register</Link>
        </p>

        {/* Divider */}
        <div className="text-center text-gray-400 text-sm">Or</div>

        {/* Google Button */}
        <SocialLogin></SocialLogin>

      </form>
    </div>
  );
};

export default Login;