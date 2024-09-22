import React from "react";

function CTA() {
  return (
    <section className="bg-blue-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="mb-8">Sign up and get started with our amazing platform!</p>
        <button className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}

export default CTA;
