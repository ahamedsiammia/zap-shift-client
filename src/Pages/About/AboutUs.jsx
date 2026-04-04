import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router";
import { FaHandPointUp } from "react-icons/fa";

const AboutUs = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Story", path: "/about/story" },
    { name: "Mission", path: "/about/mission" },
    { name: "Success", path: "/about/success" },
    { name: "Team & Others", path: "/about/team" },
  ];

  return (
    <div className="bg-white rounded-2xl my-10 p-10 lg:p-15 shadow-sm border border-gray-50">
      <div>
        <h1 className="text-4xl font-bold italic text-gray-800">About Us</h1>
        <p className="mt-3 text-gray-500 max-w-2xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>

      <div className="divider"></div>

      {/* Navigation Links */}
      <div className="font-extrabold text-xl md:text-xl flex flex-wrap gap-8 md:gap-16 my-10">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `relative transition-all duration-300 ease-in-out pb-2 hover:text-primary ${
                isActive ? "text-primary scale-105" : "text-gray-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
     
      <div className="flex gap-2 text-2xl font-bold" >
        Please click <span className="text-lime-500"><FaHandPointUp /></span> and visit our achievement
      </div>
     

      {/* Smooth Route Transition Area */}
      <div className="mt-5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
           
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutUs;