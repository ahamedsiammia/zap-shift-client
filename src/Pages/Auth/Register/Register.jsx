import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (data) => {
    console.log(data);
    const { email, password } = data;
    registerUser(email, password)
      .then(result => {
        alert("new user created ");
        console.log(result.user);
      })
      .then(error => {
        console.log(error);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto  rounded-2xl p-6 sm:p-8 lg:bg-[#E8F6BD] bg-white  ">
      
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center sm:text-left">
        Create an Account
      </h1>
      <p className="text-gray-500 mb-6 text-center sm:text-left">
        Register with ZapShift
      </p>

      {/* Avatar Icon */}
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 mx-auto sm:mx-0 relative overflow-hidden cursor-pointer">

        {/* Hidden Input */}
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          {...register("photo")}
        />
      
        {/* Icon */}
        <FaUser className="text-gray-500 pointer-events-none" />
      
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

        {/* Name */}
        <div>
          <label className="text-sm font-medium">Name</label>
          <div className="flex items-center border rounded-lg px-3 mt-1 focus-within:ring-2 focus-within:ring-lime-400">
            <FaUser className="text-gray-400 mr-2" />
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className="w-full py-2 outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <div className="flex items-center border rounded-lg px-3 mt-1 focus-within:ring-2 focus-within:ring-lime-400">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full py-2 outline-none text-sm sm:text-base"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
        </div>

        {/* Password */}
                  <div>
            <label className="text-sm font-medium">Password</label>
          
            <div className="flex items-center border rounded-lg px-3 mt-1 focus-within:ring-2 focus-within:ring-lime-400">
          
              <FaLock className="text-gray-400 mr-2" />
          
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&.#]).+$/
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full py-2 outline-none text-sm sm:text-base"
              />
          
              {/* 👁 Eye Icon */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-gray-400 ml-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
          
            </div>
          
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">Minimum 6 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500 text-sm">
                Must include uppercase, lowercase & special character
              </p>
            )}
          </div>

        {/* Button */}
        <button className="w-full bg-lime-400 hover:bg-lime-500 text-black py-2 rounded-lg font-medium transition">
          Register
        </button>

        {/* Login Link */}
        <p className="text-sm text-gray-500 text-center">
          Already have an account?{' '}
          <Link to={"/login"} className="text-lime-500 cursor-pointer">Login</Link>
        </p>

        {/* Divider */}
        <div className="text-center text-gray-400 text-sm">Or</div>

        {/* Google Button */}
        <SocialLogin></SocialLogin>

      </form>
    </div>
  );
};

export default Register;
