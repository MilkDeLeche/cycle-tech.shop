import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FeatureSteps } from '../components/ui/feature-steps';

const Blog: React.FC = () => {
  const features = [
    { 
      step: 'Paso 1', 
      title: 'Aprende lo Básico',
      content: 'Comienza tu viaje en bicicleta aprendiendo los conceptos básicos de mantenimiento y técnicas de conducción.', 
      image: '/images/1.jpg' 
    },
    { 
      step: 'Paso 2',
      title: 'Profundiza',
      content: 'Profundiza en técnicas avanzadas de ciclismo y personalización de bicicletas para tus necesidades específicas.',
      image: '/images/5.png'
    },
    { 
      step: 'Paso 3',
      title: 'Únete a la Comunidad',
      content: 'Conéctate con otros ciclistas, únete a paseos en grupo y forma parte de nuestra creciente comunidad ciclista.',
      image: '/images/expertguidance.jpg'
    },
  ];

  const scrollToFacebook = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const facebookSection = document.getElementById('facebook-section');
    if (facebookSection) {
      facebookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Blog</h1>
          <p className="text-noir-600 mb-12 text-center max-w-2xl mx-auto">
            Explora nuestros últimos artículos, guías e historias del mundo del ciclismo.
          </p>
          
          {/* Featured Article */}
          <div className="mb-16">
            <div className="relative h-[60vh] min-h-[400px] rounded-lg overflow-hidden mb-8">
              <img 
                src="/images/4.png" 
                alt="Grupo de ciclistas en comunidad" 
                className="w-full h-full object-cover"
                loading="lazy"
                width="1200"
                height="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full mb-4">Destacado</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Únete a Nuestra Comunidad Ciclista</h2>
                <p className="text-white/80 mb-4 max-w-2xl">Descubre próximos paseos en grupo, exploraciones de senderos y eventos comunitarios. Conéctate con otros ciclistas y forma parte de nuestra creciente comunidad de entusiastas de la bicicleta.</p>
                <a 
                  href="#facebook-section" 
                  onClick={scrollToFacebook}
                  className="inline-block bg-white text-noir-900 px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-noir-100 transition-colors"
                >
                  Saber Más
                </a>
              </div>
            </div>
          </div>
          
          {/* Feature Steps Component */}
          <div className="mb-16">
            <FeatureSteps 
              features={features}
              title="Tu Viaje en Bicicleta Comienza Aquí"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>
          
          {/* Facebook Link Button */}
          <div id="facebook-section" className="text-center">
            <a 
              href="https://www.facebook.com/people/Matamoros-Cycling-Shop/100061266284180/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#1877F2] text-white px-8 py-4 text-lg font-medium rounded-md hover:bg-[#0d6efd] transition-colors"
            >
              Síguenos en Facebook
            </a>
            <p className="mt-4 text-noir-600">
              Mantente actualizado con nuestras últimas noticias, eventos y consejos de ciclismo en Facebook.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog; 