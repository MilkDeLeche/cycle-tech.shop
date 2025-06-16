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
                  Servicios
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
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-noir-600" />
                <a 
                  href="https://maps.app.goo.gl/your-location-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-noir-600 hover:text-noir-900 transition-colors"
                >
                  Plaza Éxodo, Matamoros, Tamaulipas
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-noir-600" />
                <span className="text-noir-600">Lunes a Sábado: 10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-noir-600" />
                <a 
                  href="tel:+528684653206" 
                  className="text-noir-600 hover:text-noir-900 transition-colors"
                >
                  +52 868 465 3206
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-noir-600" />
                <a 
                  href="mailto:info@cycletech.shop" 
                  className="text-noir-600 hover:text-noir-900 transition-colors"
                >
                  info@cycletech.shop
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-display font-bold mb-3 sm:mb-4">Síguenos</h3>
            <div className="flex space-x-6 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/cycletech.bikes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-noir-600 hover:text-noir-900 transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.facebook.com/people/CYCLE-TECH-BIKES/100061266284180/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-noir-600 hover:text-noir-900 transition-colors"
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
