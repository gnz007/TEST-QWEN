import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
];

const footerLinks = {
  servicios: [
    { name: 'Reparación de PCs', path: '/servicios' },
    { name: 'Notebooks', path: '/servicios' },
    { name: 'Consolas', path: '/servicios' },
    { name: 'Mantenimiento', path: '/servicios' },
  ],
  empresa: [
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Técnicos', path: '/tecnicos' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Testimonios', path: '/testimonios' },
  ],
  soporte: [
    { name: 'FAQ', path: '/faq' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'Garantía', path: '/nosotros' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-metal-900 dark:bg-metal-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary-600 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                TechRepair<span className="text-primary-400">Pro</span>
              </span>
            </Link>
            <p className="text-metal-400 mb-6 max-w-sm">
              Servicio técnico profesional de reparación de equipos electrónicos. 
              Calidad, confianza y garantía en cada trabajo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className="p-2 bg-metal-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-metal-400 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-metal-400 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-metal-400">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>Av. Principal 1234, Ciudad</span>
              </li>
              <li className="flex items-center gap-3 text-metal-400">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+541112345678" className="hover:text-primary-400 transition-colors">
                  (011) 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-metal-400">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@techrepairpro.com" className="hover:text-primary-400 transition-colors">
                  info@techrepairpro.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-metal-400">
                <Clock size={20} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>Lun-Vie: 9:00 - 19:00</p>
                  <p>Sáb: 9:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-metal-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-metal-500 text-sm">
            © {new Date().getFullYear()} TechRepairPro. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-metal-500">
            <Link to="#" className="hover:text-primary-400 transition-colors">Privacidad</Link>
            <Link to="#" className="hover:text-primary-400 transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
