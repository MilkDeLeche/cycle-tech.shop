import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  useEffect(() => {
    // Add Behold widget script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://w.behold.so/widget.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Nuestra Galería</h1>
          <p className="text-noir-600 mb-12 max-w-2xl">
            Síguenos en Instagram y descubre nuestras últimas creaciones y aventuras.
          </p>
          
          <div className="w-full">
            <behold-widget feed-id="27dhdYeqGyj0JarchJLk"></behold-widget>
            </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.instagram.com/matamoroscyclingshop/" 
                  target="_blank"
                  rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              <Instagram size={20} />
              <span>Síguenos en Instagram</span>
            </a>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery; 