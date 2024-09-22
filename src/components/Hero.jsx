import React from "react";

function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to My Landing Page</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a simple hero section for a landing page built with React and Tailwind CSS.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
