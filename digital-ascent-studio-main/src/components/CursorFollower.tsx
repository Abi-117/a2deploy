import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = Math.max(0, Math.min(window.innerWidth, e.clientX));
      const y = Math.max(0, Math.min(window.innerHeight, e.clientY));

      setPos({ x, y });
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999] hidden md:block">
      
      {/* small cursor */}
      <motion.div
        className="absolute w-6 h-6 rounded-full border-2 border-neon-purple/50"
        animate={{
          x: pos.x,
          y: pos.y,
          opacity: visible ? 1 : 0
        }}
        style={{ translateX: "-50%", translateY: "-50%" }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />

      {/* glow cursor */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-neon-purple/5 blur-[40px]"
        animate={{
          x: pos.x,
          y: pos.y,
          opacity: visible ? 1 : 0
        }}
        style={{ translateX: "-50%", translateY: "-50%" }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 1
        }}
      />

    </div>
  );
};

export default CursorFollower;