import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    '/images/cannon.png',
    '/images/mountainbike.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-noir-900">
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-50'
        }`}
        style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 flex items-center h-full">
        <div className="max-w-lg pt-16 md:pt-24">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            Tu tienda de confianza para rodar mejor.
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-6 md:mb-8 max-w-md">
            Aquí amamos las bicis tanto como tú. Ya sea que estés empezando o lleves años pedaleando, tenemos lo que necesitas: buen equipo, buen servicio y buen ambiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link 
              to="/gallery" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-noir-900 bg-white hover:bg-noir-100 transition-colors duration-300"
            >
              Echar un vistazo
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 border border-white text-sm sm:text-base font-medium rounded-md text-white hover:bg-white hover:text-noir-900 transition-colors duration-300"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentImageIndex(index);
                    setIsTransitioning(false);
                  }, 500);
                }}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
