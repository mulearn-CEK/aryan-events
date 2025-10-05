import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919961486486"; // Remove spaces and add country code
  const message = encodeURIComponent("Hello! I'm interested in your event management services.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#22c55e] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
