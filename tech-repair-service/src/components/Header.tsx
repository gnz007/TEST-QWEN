import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Moon, Sun, Wrench } from 'lucide-react';
import { Button } from './Button';
import { useDarkMode } from '../hooks/useDarkMode';

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Reservar', path: '/reservar' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Técnicos', path: '/tecnicos' },
  { name: 'Ofertas', path: '/ofertas' },
  { name: 'Contacto', path: '/contacto' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-metal-900/80 backdrop-blur-md border-b border-metal-200 dark:border-metal-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary-600 rounded-lg group-hover:bg-primary-700 transition-colors">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-metal-900 dark:text-white hidden sm:block">
              TechRepair<span className="text-primary-600">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-metal-600 dark:text-metal-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-metal-50 dark:hover:bg-metal-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggle}
              className="p-2"
              aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <Link to="/reservar">
              <Button size="sm" className="hidden sm:inline-flex">
                Agendar Ahora
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-metal-200 dark:border-metal-700 animate-slide-down">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-metal-600 dark:text-metal-300 hover:bg-metal-50 dark:hover:bg-metal-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/reservar" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mt-2">Agendar Reparación</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
