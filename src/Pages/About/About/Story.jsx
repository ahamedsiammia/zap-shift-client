import React from "react";

const Story = () => {
const stories = [
    {
      id: 1,
      name: "Arif Ahmed",
      role: "Corporate Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", // Professional Male
      badge: "Speed & Efficiency",
      badgeColor: "badge-success",
      text: "As a professional, time is my most valuable asset. Last week, I had a critical legal document that needed to reach the other side of the city within two hours. I was skeptical, but ZapShift exceeded all expectations. The 'Delivery Hero' arrived within minutes of my booking. True to its name, the 'Shift' was truly 'Zap'!"
    },
    {
      id: 2,
      name: "Sarah Jahan",
      role: "Online Boutique Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", // Professional Female
      badge: "Business Growth",
      badgeColor: "badge-success",
      text: "Running a small boutique means I handle everything myself, but delivery was always my biggest headache. Since I started using ZapShift, my customer satisfaction has soared! The integration is seamless, and the tracking feature keeps my customers informed without me having to send manual updates."
    },
    {
      id: 3,
      name: "Maria Khan",
      role: "Home Chef",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop", // Casual/Chef Female
      badge: "Reliable & Care",
      badgeColor: "badge-accent",
      text: "I wanted to send some homemade treats to my parents on the other side of town. I was worried about the food staying fresh, but ZapShift’s 'Delivery Hero' was incredibly professional and handled the package with such care. The booking process took less than a minute, and the delivery was completed faster than I expected."
    }
  ];
  return (
<div className="bg-gray-50 py-20 px-4 mb-10 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 italic">ZapShift Success Stories</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story) => (
            <div key={story.id} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="card-body p-8">
                {/* Header with Profile Image */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="avatar">
                    <div className="w-16 h-16 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-2 grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img src={story.image} alt={story.name} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                    <p className="text-sm font-medium text-primary uppercase tracking-wider">{story.role}</p>
                  </div>
                </div>
                
                {/* Feedback Text */}
                <div className="relative">
                   <span className="text-5xl text-primary/10 absolute -top-4 -left-2 font-serif">“</span>
                   <p className="text-gray-600 leading-relaxed relative z-10 italic">
                    {story.text}
                   </p>
                </div>

                {/* Badge/Category */}
                <div className="card-actions justify-end mt-8 border-t pt-4 border-gray-50">
                  <div className={`badge ${story.badgeColor} badge-md font-semibold py-3 px-4 `}>
                    {story.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
