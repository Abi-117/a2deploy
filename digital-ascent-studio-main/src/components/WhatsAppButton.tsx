import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919952813292"; // change your number

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Hi I visited your website and want to know more about your services."
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <MessageCircle size={30} />
      {/* <span className="hidden sm:block font-medium">
        Chat on WhatsApp
      </span> */}
    </motion.a>
  );
};

export default WhatsAppButton;