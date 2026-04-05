import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaBox } from "react-icons/fa";
import Logo from "../../Components/Logo/Logo";

const LoadingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f0fdf4] via-[#d9f99d] to-[#bbf7d0] overflow-hidden">

      {/* Logo */}
      <div className="mb-10">
        <Logo />
      </div>

      {/* Animation Area */}
      <div className="relative w-full max-w-lg h-40 overflow-hidden">

        {/* Man */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 250 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="absolute bottom-0 flex items-center gap-2"
        >
          {/* Man icon */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          >
            <FaUser className="text-4xl text-green-700" />
          </motion.div>

          {/* Cart (box) */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="ml-2"
          >
            <FaBox className="text-4xl text-lime-600" />
          </motion.div>
        </motion.div>

        {/* Ground line */}
        <div className="absolute bottom-0 w-full h-[2px] bg-gray-300"></div>
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-6 text-gray-700 text-sm"
      >
        Moving your parcel...
      </motion.p>

      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="mt-4 w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default LoadingPage;