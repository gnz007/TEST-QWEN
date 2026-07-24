import { Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const phoneNumber = '5491112345678'; // Reemplazar con número real
  const whatsappMessage = 'Hola! Quisiera agendar una cita para reparación.';

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-40 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-metal-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat por WhatsApp
        </span>
      </a>

      {/* Call Button - Mobile only */}
      <a
        href={`tel:+${phoneNumber}`}
        className="fixed bottom-20 left-4 z-40 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 md:hidden group"
        aria-label="Llamar ahora"
      >
        <Phone size={28} />
      </a>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 md:right-1/2 md:translate-x-[calc(50%+180px)] z-40 p-3 bg-metal-700 dark:bg-metal-600 text-white rounded-full shadow-lg hover:bg-metal-600 dark:hover:bg-metal-500 transition-all duration-300 hover:scale-110"
        aria-label="Volver arriba"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
