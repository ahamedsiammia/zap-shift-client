import React from 'react';
import { motion } from 'framer-motion';
const Mission = () => {
  const missions = [
    {
      id: 1,
      title: "Hyper-Fast Delivery",
      description: "Our core mission is to eliminate the wait. We aim to make 'Zap' delivery the standard, not the exception, by optimizing every route.",
      icon: "⚡",
      color: "border-primary"
    },
    {
      id: 2,
      title: "Safety First Culture",
      description: "We prioritize the integrity of every parcel. Our mission is to maintain a zero-damage record through rigorous handling standards.",
      icon: "🛡️",
      color: "border-secondary"
    },
    {
      id: 3,
      title: "Seamless Accessibility",
      description: "Making professional logistics available to everyone—from a student sending a gift to a giant corporation moving bulk goods.",
      icon: "🌍",
      color: "border-accent"
    },
    {
      id: 4,
      title: "Digital Transparency",
      description: "Providing 100% real-time visibility. We missioned to build a bridge of trust between the sender and the receiver through tech.",
      icon: "📱",
      color: "border-info"
    }
  ];
    return (
<motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-10"
    >
      {/* Vision Statement */}
      <div className=" p-8 rounded-2xl border-l-8 border-primary bg-white">
        <h2 className="text-2xl font-bold text-primary mb-2">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To become the most reliable and fastest logistics backbone of the digital age, 
          connecting people and businesses with the speed of thought.
        </p>
      </div>

      {/* Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {missions.map((m) => (
          <div key={m.id} className={`p-6 bg-white rounded-xl border-t-4 ${m.color} shadow-sm hover:shadow-md transition-all`}>
            <div className="text-4xl mb-4">{m.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{m.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {m.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action or Footer note */}
      <div className="text-center p-6 bg-base-200 rounded-2xl italic text-gray-500 mb-10 ">
        At ZapShift, we don't just move boxes; we move expectations.
      </div>
    </motion.div>
    );
};

export default Mission;