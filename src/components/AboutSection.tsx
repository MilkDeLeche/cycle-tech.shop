import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-noir-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/images/innovacion.jpg" 
                alt="Bike workshop" 
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 w-40 sm:w-48 h-40 sm:h-48 flex flex-col justify-center shadow-lg rounded-lg">
                <p className="text-4xl sm:text-5xl font-display font-bold">5+</p>
                <p className="text-noir-500 text-xs sm:text-sm mt-1">Años de excelencia</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">Comunidad y Experiencia</h2>
            <p className="text-sm sm:text-base text-noir-600 mb-4 sm:mb-6 leading-relaxed">
              Nacidos durante los desafiantes tiempos del COVID-19, hemos crecido de una pequeña tienda a una próspera comunidad ciclista. Gracias al increíble apoyo de nuestros clientes, hemos construido algo especial: un lugar donde ciclistas de todos los niveles pueden encontrar orientación experta y equipo premium.
            </p>
            <p className="text-sm sm:text-base text-noir-600 mb-6 sm:mb-8 leading-relaxed">
              Nuestro compromiso va más allá de la venta de bicicletas. Ofrecemos servicios de afinación de precisión, preparación para carreras y asesoramiento personalizado. Somos un punto de encuentro para la comunidad ciclista, organizando eventos, paseos en grupo y talleres que fomentan la conexión entre ciclistas.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-6 py-2.5 bg-noir-900 text-white text-sm sm:text-base font-medium rounded-md hover:bg-noir-800 transition-colors duration-300"
              aria-label="Conoce nuestra historia"
            >
              Conoce Nuestra Historia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
