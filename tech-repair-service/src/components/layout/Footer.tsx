import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo } from '@/data/mockData';

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-metallic-900 dark:bg-metallic-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TR</span>
              </div>
              <span className="text-2xl font-display font-bold">
                Tech<span className="text-primary-400">Repair</span>
              </span>
            </div>
            <p className="text-metallic-300 text-sm leading-relaxed">
              Servicio técnico profesional especializado en reparación de computadoras, 
              notebooks y consolas. Calidad y confianza garantizada.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {contactInfo.socialLinks.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-metallic-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Reservar Cita', path: '/reservar' },
                { name: 'Ofertas', path: '/ofertas' },
                { name: 'Contacto', path: '/contacto' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-metallic-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-400 mt-0.5" />
                <a href={`tel:${contactInfo.phone}`} className="text-metallic-300 hover:text-white text-sm">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-400 mt-0.5" />
                <a href={`mailto:${contactInfo.email}`} className="text-metallic-300 hover:text-white text-sm">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-0.5" />
                <span className="text-metallic-300 text-sm">{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <div className="space-y-2">
              {contactInfo.hours.slice(0, 5).map((hour) => (
                <div key={hour.day} className="flex justify-between text-sm">
                  <span className="text-metallic-300">{hour.day}</span>
                  <span className="text-metallic-400">
                    {hour.open} - {hour.close}
                  </span>
                </div>
              ))}
              <div className="flex justify-between text-sm pt-2 border-t border-metallic-800">
                <span className="text-metallic-300">Sábado</span>
                <span className="text-accent-400">
                  {contactInfo.hours[5].open} - {contactInfo.hours[5].close}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-metallic-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-metallic-400 text-sm">
              © {currentYear} TechRepair. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-metallic-400">
              <Link to="/privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
