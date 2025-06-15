
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="section container mx-auto">
      <div className="bg-noir-900 text-white py-16 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Join Our Community</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Subscribe to receive updates about new collections, special offers, and exclusive cycling events.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-noir-800 text-white border-0 px-4 py-3 placeholder:text-white/50 focus:ring-1 focus:ring-white focus:outline-none"
              required
            />
            <button type="submit" className="bg-white text-noir-900 px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-noir-100 transition-colors">
              Subscribe
            </button>
          </form>
          
          <p className="text-white/60 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
