import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white"
    >
      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Let’s Plan Your Next Adventure
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Have a question about your travel plan or want to share your
            experience on Travelee? Send us a message and we’ll get back to you
            soon.
          </p>
        </div>

        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10">

          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Why Contact Travelee?</h3>

            <ul className="space-y-4 text-white/90">
              <li className="flex items-start gap-3">
                <span className="text-xl">✈️</span>
                Personalized travel planning support
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🌍</span>
                Help with sharing & managing reviews
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">⚡</span>
                Fast response from our global team
              </li>
            </ul>

            <div className="pt-6 border-t border-white/20 text-white/80">
              <p>Email: support@travelee.com</p>
              <p>Phone: +1 (234) 567-890</p>
            </div>
          </div>

          {/* Form */}
          <form
            action="/api/contact"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Tell us about your trip..."
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-indigo-700 font-semibold py-3 rounded-xl hover:bg-indigo-100 transition transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
