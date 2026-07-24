import { MessageCircle, Phone } from 'lucide-react';
import { contactInfo } from '@/data/mockData';

export function FloatingButtons() {
  const handleWhatsAppClick = () => {
    const phone = contactInfo.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleWhatsAppClick();
        }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
        aria-label="Chat de WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Call Button - Mobile Only */}
      <button
        onClick={handleCallClick}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl md:hidden"
        aria-label="Llamar ahora"
      >
        <Phone size={24} />
      </button>
    </>
  );
}
