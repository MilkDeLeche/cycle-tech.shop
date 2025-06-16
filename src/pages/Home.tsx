import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import useScrollToTop from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useScrollToTop();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout>();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const startAutoScroll = useCallback(() => {
    if (!isAutoScrolling) {
      setIsAutoScrolling(true);
      autoScrollInterval.current = setInterval(() => {
        scrollNext();
      }, 3000); // Scroll every 3 seconds
    }
  }, [isAutoScrolling, scrollNext]);

  const stopAutoScroll = useCallback(() => {
    if (isAutoScrolling) {
      setIsAutoScrolling(false);
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    }
  }, [isAutoScrolling]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAutoScroll();
          } else {
            stopAutoScroll();
          }
        });
      },
      {
        threshold: 0.5, // Start when 50% of the carousel is visible
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
      stopAutoScroll();
    };
  }, [startAutoScroll, stopAutoScroll]);

  // Pause auto-scroll when user interacts with the carousel
  useEffect(() => {
    if (!emblaApi) return;

    const onPointerDown = () => stopAutoScroll();
    const onPointerUp = () => startAutoScroll();

    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);

    return () => {
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
    };
  }, [emblaApi, startAutoScroll, stopAutoScroll]);

  const instagramPosts = [
    {
      image: "/images/ct1.png",
      alt: "Producto Destacado 1",
      description: "¡Descubre nuestra selección premium de bicicletas!",
      link: "https://www.instagram.com/cycletech.bikes/"
    },
    {
      image: "/images/ct2.png",
      alt: "Producto Destacado 2",
      description: "Equipamiento de alta calidad para ciclistas exigentes",
      link: "https://www.instagram.com/cycletech.bikes/"
    },
    {
      image: "/images/ct3.png",
      alt: "Producto Destacado 3",
      description: "Accesorios y repuestos para tu bicicleta",
      link: "https://www.instagram.com/cycletech.bikes/"
    },
    {
      image: "/images/ct4.png",
      alt: "Producto Destacado 4",
      description: "Servicio técnico especializado para tu bicicleta",
      link: "https://www.instagram.com/cycletech.bikes/"
    },
    {
      image: "/images/ct5.png",
      alt: "Producto Destacado 5",
      description: "Asesoría personalizada para ciclistas",
      link: "https://www.instagram.com/cycletech.bikes/"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Productos Destacados</h2>
              <p className="text-noir-600 max-w-2xl mx-auto">
                Descubre nuestras últimas creaciones, aventuras y el mundo del ciclismo en Matamoros.
              </p>
            </div>

            <div className="relative" ref={carouselRef}>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {instagramPosts.map((post, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                        <div className="relative">
                          <img 
                            src={post.image} 
                            alt={post.alt} 
                            className="w-full h-72 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-white text-sm mb-2">{post.description}</p>
                              <a 
                                href={post.link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-noir-200 transition-colors inline-flex items-center gap-1"
                              >
                                Ver en Instagram →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-noir-900 p-2 rounded-full shadow-lg transform -translate-x-1/2 z-10 transition-all duration-300 hover:scale-110"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-noir-900 p-2 rounded-full shadow-lg transform translate-x-1/2 z-10 transition-all duration-300 hover:scale-110"
                aria-label="Siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="text-center mt-8">
              <Link 
                to="/gallery" 
                className="btn btn-line icon-right text-t-bright hover:text-t-medium font-medium text-btn lg:text-btn-lg xl:text-btn-xl 2xl:text-btn-2xl"
              >
                <span className="btn-caption">Ver más</span>
                <i className="text-btn-icon lg:text-btn-icon-lg xl:text-btn-icon-xl 2xl:text-btn-icon-2xl">
                  <ChevronRight />
                </i>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Comunidad y Experiencia Section */}
      <section className="bg-[#f7f8f7] py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          {/* Image and overlay card */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0">
            <img
              src="/images/sports-cycling-2025-03-08-14-20-00-utc.jpg"
              alt="Comunidad ciclista"
              className="rounded-lg w-full h-[400px] object-cover shadow-md"
            />
            <div className="absolute left-6 bottom-6 bg-white rounded-xl shadow-lg px-8 py-6 text-center min-w-[160px]">
              <div className="text-4xl md:text-5xl font-bold text-noir-900 mb-1">5+</div>
              <div className="text-noir-500 text-sm">Años de excelencia</div>
            </div>
          </div>
          {/* Text content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Comunidad y Experiencia</h2>
            <p className="text-noir-600 mb-4 text-lg">
              Nacidos durante los desafiantes tiempos del COVID-19, hemos crecido de una pequeña tienda a una próspera comunidad ciclista. Gracias al increíble apoyo de nuestros clientes, hemos construido algo especial: un lugar donde ciclistas de todos los niveles pueden encontrar orientación experta y equipo premium.
            </p>
            <p className="text-noir-600 mb-8 text-lg">
              Nuestro compromiso va más allá de la venta de bicicletas. Ofrecemos servicios de afinación de precisión, preparación para carreras y asesoramiento personalizado. Somos un punto de encuentro para la comunidad ciclista, organizando eventos, paseos en grupo y talleres que fomentan la conexión entre ciclistas.
            </p>
            <a
              href="/about"
              className="btn btn-line mt-2"
            >
              <span className="btn-caption">Conoce Nuestra Historia</span>
              <em></em>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 