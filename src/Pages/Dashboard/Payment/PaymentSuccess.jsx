import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const emojis = ["🎉", "✨", "🎊", "💫", "🌟"];
const items = Array.from({ length: 90 });


const PaymentSuccess = () => {
    const [searchParams]= useSearchParams();
    const sessionId = searchParams.get("session_id")
    const axiosSecure = useAxiosSecure();
    const [info,setInfo]=useState();
      const [show, setShow] = useState(true);
      const [cost , setCost]=useState(0)
 useEffect(() => {
    const t = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(t);
  }, []);

    
    console.log(sessionId);
    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res =>{
                setInfo(res.data.trackingId);
               setCost(res.data.amount)
               console.log(res.data);
            })
        }
    },[sessionId,axiosSecure])
    
    return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">

      {/* 🎉 Emoji Rain Animation */}
      {show && (
        <div className="absolute inset-0 pointer-events-none">
          {items.map((_, i) => {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            return (
              <motion.div
                key={i}
                initial={{
                  y: -100,
                  x: Math.random() * window.innerWidth,
                  opacity: 1,
                }}
                animate={{
                  y: window.innerHeight + 100,
                  opacity: [1, 1, 0],
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  ease: "easeOut",
                }}
                className="absolute text-xl"
              >
                {randomEmoji}
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Floating cubes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 left-10 w-6 h-6 bg-yellow-200/60 rounded shadow-lg"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-20 right-20 w-5 h-5 bg-orange-200/60 rounded shadow-lg"
      />
      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-20 left-1/4 w-4 h-4 bg-yellow-100/60 rounded shadow-lg"
      />

      {/* Glow circle */}
      <div className="absolute w-80 h-80 bg-secondary rounded-full blur-3xl" />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-[320px] shadow-2xl text-white"
      >
        {/* Check icon */}
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-400/30 rounded-full blur-xl" />
            <CheckCircle className="w-16 h-16 text-green-400 relative" />
          </motion.div>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold">
          Payment Successful!
        </h2>
        <p className="text-center text-xs text-gray-200 mt-1">
          Thank you for choosing ZapShift for your delivery.
        </p>

        {/* Details */}
        <div className="mt-4 bg-white/10 rounded-lg p-3 text-sm space-y-2">
          <div className="flex justify-between ">
            <span className="text-gray-300">Tracking ID:</span>
            <span>{info}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Total Amount:</span>
            <span>{cost}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Method:</span>
            <span>Credit Card</span>
          </div>
          {/* <div className="flex justify-between">
            <span className="text-gray-300">Payment Time:</span>
            <span> { new Date().toLocaleTimeString() } </span>
          </div> */}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          {/* <button className="flex-1 bg-green-400 text-black text-sm py-2 rounded-full shadow-lg hover:scale-105 transition">
            Track Your Order
          </button> */}
          <Link to={"/"} className="flex-1 border text-center border-white/30 py-2 rounded-full hover:bg-white/10 transition">
            Go to Home
          </Link>
        </div>
      </motion.div>
    </div>
    );
};

export default PaymentSuccess;