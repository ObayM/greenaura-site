'use client';
import { motion } from "framer-motion";

const logos = [
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
];

export default function LogoCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-12">

      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-16"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            alt="a logo"
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
          />
        ))}
      </motion.div>
    </div>
  );
}


