import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/8398ad8c-d082-4894-8b1d-ce3fd6482b0b.png" 
              alt="CYCLE-TECH BIKES" 
              className="h-8 md:h-10 transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors">Inicio</Link>
            <Link to="/gallery" className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors">Galería</Link>
            <Link to="/about" className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors">Servicios</Link>
            <Link to="/blog" className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors">Contacto</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 hover:text-noir-500 md:hidden transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/gallery" 
              className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </Link>
            <Link 
              to="/about" 
              className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              to="/blog" 
              className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-sm uppercase tracking-wider hover:text-noir-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
