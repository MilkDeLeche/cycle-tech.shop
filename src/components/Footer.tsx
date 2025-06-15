import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Clock, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-noir-100">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 text-center sm:text-left">
          {/* Navigation Links */}
          <div>
            <h3 className="text-base sm:text-lg font-display font-bold mb-3 sm:mb-4">Navegación</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/" className="text-sm sm:text-base text-noir-500 hover:text-noir-900 transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm sm:text-base text-noir-500 hover:text-noir-900 transition-colors duration-300">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm sm:text-base text-noir-500 hover:text-noir-900 transition-colors duration-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm sm:text-base text-noir-500 hover:text-noir-900 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm sm:text-base text-noir-500 hover:text-noir-900 transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base sm:text-lg font-display font-bold mb-3 sm:mb-4">Contacto</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-noir-500" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-noir-500">Matamoros Cycling Shop</p>
                  <p className="text-xs sm:text-sm text-noir-500">Av Francisco Villa entre Roberto Guerra y Rio Rhin</p>
                  <p className="text-xs sm:text-sm text-noir-500">Treviño Zapata, 87430</p>
                  <p className="text-xs sm:text-sm text-noir-500">Heroica Matamoros, Tamps., México</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-noir-500" />
                <p className="text-xs sm:text-sm text-noir-500">Lunes a Sabado: 10:00 AM - 7:00 PM</p>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-noir-500" />
                <p className="text-xs sm:text-sm text-noir-500">+52 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-noir-500" />
                <p className="text-xs sm:text-sm text-noir-500">info@matamoroscyclingshop.com</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-display font-bold mb-3 sm:mb-4">Síguenos</h3>
            <div className="flex space-x-6 justify-center sm:justify-start">
              <a 
                href="https://www.instagram.com/matamoros_cyclingshop/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-noir-500 hover:text-[#E1306C] transition-colors duration-300"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://www.facebook.com/people/Matamoros-Cycling-Shop/100061266284180/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-noir-500 hover:text-[#1877F2] transition-colors duration-300"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-noir-100 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-noir-400">
            &copy; {new Date().getFullYear()} Matamoros Cycling Shop. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
