import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authimage from '../assets/authImage.png';

const AuthLayout = () => {
  return (
    <div className='min-h-screen bg-[#E8F6BD] px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        <Logo />

        {/* Responsive Layout */}
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10 min-h-[calc(100vh-80px)]'>
          
          {/* Form Section */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <Outlet />
          </div>

          {/* Image Section */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img
              src={authimage}
              alt="auth"
              className='w-[80%] sm:w-[60%] md:w-[50%] lg:w-full max-w-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
