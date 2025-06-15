import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useScrollToTop from '../hooks/useScrollToTop';

const Contact: React.FC = () => {
  useScrollToTop();

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hola, mi nombre es ${formData.name}.\n\nAsunto: ${formData.subject}\n\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Contáctanos</h1>
            <p className="text-noir-600 mb-12 text-center max-w-2xl mx-auto">
              ¿Tienes preguntas sobre nuestras bicicletas, servicios o quieres programar una visita? Escríbenos por WhatsApp y te responderemos lo antes posible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Ponte en Contacto</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Visita Nuestra Tienda</h3>
                    <p className="text-noir-600">Matamoros Cycling Shop</p>
                    <p className="text-noir-600">Av Francisco Villa entre Roberto Guerra y Rio Rhin</p>
                    <p className="text-noir-600">Treviño Zapata, 87430</p>
                    <p className="text-noir-600">Heroica Matamoros, Tamps., México</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Información de Contacto</h3>
                    <p className="text-noir-600">
                      <a href="https://wa.me/1234567890" className="hover:text-noir-900 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp: +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Horario de Atención</h3>
                    <p className="text-noir-600">Lunes a Viernes: 10:00 AM - 7:00 PM</p>
                    <p className="text-noir-600">Sábado: 10:00 AM - 7:00 PM</p>
                    <p className="text-noir-600">Domingo: Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Envíanos un Mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-noir-700 mb-1">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-noir-300 rounded-md focus:outline-none focus:ring-2 focus:ring-noir-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-noir-700 mb-1">Asunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-noir-300 rounded-md focus:outline-none focus:ring-2 focus:ring-noir-500"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="Consulta sobre producto">Consulta sobre producto</option>
                      <option value="Agendar cita">Agendar cita</option>
                      <option value="Servicio de mantenimiento">Servicio de mantenimiento</option>
                      <option value="Información sobre talleres">Información sobre talleres</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-noir-700 mb-1">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-noir-300 rounded-md focus:outline-none focus:ring-2 focus:ring-noir-500"
                      placeholder="Por favor, proporciona detalles sobre tu consulta..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-noir-900 text-white py-3 px-6 rounded-md hover:bg-noir-800 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Enviar por WhatsApp
                  </button>
                </form>
              </div>
            </div>

            {/* Shop Location Map */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6 text-center">Visita Nuestra Tienda</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.902442442139!2d-97.50368368498985!3d25.526233983377754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a3a0c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sVG67%2BF9%20Matamoros%2C%20Tamaulipas%2C%20Mexico!5e0!3m2!1sen!2sus!4v1635167261304!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la Tienda"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-noir-600 mb-2">Matamoros Cycling Shop</p>
                <p className="text-noir-600">Av Francisco Villa entre Roberto Guerra y Rio Rhin</p>
                <p className="text-noir-600">Treviño Zapata, 87430</p>
                <p className="text-noir-600">Heroica Matamoros, Tamps., México</p>
                <p className="text-noir-600 mt-2">Abierto de Lunes a Sábado: 9am-6pm</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 