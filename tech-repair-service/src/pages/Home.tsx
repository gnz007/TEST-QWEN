import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield, Users, Wrench } from 'lucide-react';
import { Button } from '../components/Button';
import { SERVICES, REVIEWS, TECHNICIANS, OFFERS } from '../data/mockData';
import { formatPrice } from '../utils/helpers';

export function Home() {
  const featuredServices = SERVICES.filter(s => s.popular).slice(0, 3);
  const featuredReviews = REVIEWS.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-metal-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Servicio Técnico<br />
              <span className="text-gradient">Profesional y Confiable</span>
            </h1>
            <p className="text-xl md:text-2xl text-metal-200 mb-8 max-w-3xl mx-auto">
              Reparación experta de computadoras, notebooks y consolas. 
              Diagnóstico preciso, reparación rápida y garantía asegurada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservar">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                  Agendar Reparación
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/servicios">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 border-white text-white hover:bg-white/10">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-white dark:bg-metal-900 py-12 border-b border-metal-200 dark:border-metal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Clock, title: 'Atención Rápida', desc: 'Diagnóstico en 24hs' },
              { icon: Shield, title: 'Garantía', desc: '90 días garantidos' },
              { icon: Users, title: 'Expertos', desc: 'Técnicos certificados' },
              { icon: Wrench, title: 'Repuestos', desc: 'Originales y OEM' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-4 rounded-xl hover:bg-metal-50 dark:hover:bg-metal-800 transition-colors">
                <feature.icon className="h-10 w-10 mx-auto mb-3 text-primary-600" />
                <h3 className="font-semibold text-metal-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-metal-600 dark:text-metal-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-metal-50 dark:bg-metal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-metal-900 dark:text-white mb-4">
              Servicios Destacados
            </h2>
            <p className="text-lg text-metal-600 dark:text-metal-400 max-w-2xl mx-auto">
              Soluciones profesionales para todos tus equipos electrónicos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {featuredServices.map(service => (
              <div key={service.id} className="bg-white dark:bg-metal-900 rounded-2xl p-6 card-shadow hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium rounded-full">
                    {service.category}
                  </span>
                  {service.popular && (
                    <span className="flex items-center text-accent-500 text-sm font-medium">
                      <Star size={16} className="mr-1 fill-current" /> Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-metal-900 dark:text-white mb-2">{service.name}</h3>
                <p className="text-metal-600 dark:text-metal-400 mb-4">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-metal-200 dark:border-metal-700">
                  <span className="text-2xl font-bold text-primary-600">{formatPrice(service.price)}</span>
                  <span className="text-sm text-metal-500">{service.estimatedTime}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/servicios">
              <Button variant="outline" size="lg">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Banner */}
      <section className="py-16 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎉 Ofertas Especiales
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Aprovecha nuestros paquetes promocionales y ahorra en el mantenimiento de tus equipos.
              </p>
              <Link to="/ofertas">
                <Button variant="secondary" size="lg" className="bg-white text-accent-600 hover:bg-metal-100">
                  Ver Todas las Ofertas
                </Button>
              </Link>
            </div>
            <div className="grid gap-4">
              {OFFERS.filter(o => o.featured).map(offer => (
                <div key={offer.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-bold text-lg mb-1">{offer.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{offer.description}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">{formatPrice(offer.discountedPrice)}</span>
                    {offer.originalPrice > offer.discountedPrice && (
                      <span className="text-lg line-through opacity-60">{formatPrice(offer.originalPrice)}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white dark:bg-metal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-metal-900 dark:text-white mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-metal-600 dark:text-metal-400">
              Más de 1000 clientes satisfechos confían en nosotros
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {featuredReviews.map(review => (
              <div key={review.id} className="bg-metal-50 dark:bg-metal-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < review.rating ? 'text-accent-500 fill-current' : 'text-metal-300'}
                    />
                  ))}
                </div>
                <p className="text-metal-700 dark:text-metal-300 mb-4 italic">"{review.comment}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-metal-900 dark:text-white">{review.customerName}</span>
                  <span className="text-sm text-metal-500">{review.serviceType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 md:py-24 bg-metal-50 dark:bg-metal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-metal-900 dark:text-white mb-4">
              Nuestro Equipo Técnico
            </h2>
            <p className="text-lg text-metal-600 dark:text-metal-400">
              Profesionales certificados listos para ayudarte
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNICIANS.map(tech => (
              <div key={tech.id} className="bg-white dark:bg-metal-900 rounded-2xl overflow-hidden card-shadow hover-lift">
                <div className="aspect-square bg-metal-200 dark:bg-metal-700">
                  <img src={tech.image} alt={tech.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-metal-900 dark:text-white">{tech.name}</h3>
                  <p className="text-sm text-primary-600 mb-2">{tech.specialty}</p>
                  <div className="flex items-center justify-between text-sm text-metal-500">
                    <span>{tech.experience} años exp.</span>
                    <span className="flex items-center">
                      <Star size={14} className="text-accent-500 fill-current mr-1" />
                      {tech.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/tecnicos">
              <Button variant="outline" size="lg">
                Conocer al Equipo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Reparar tu Equipo?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda tu cita hoy mismo y recibe un diagnóstico profesional sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservar">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary-900 hover:bg-metal-100">
                Reservar Ahora
              </Button>
            </Link>
            <a href="tel:+541112345678">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Llamar: (011) 1234-5678
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
