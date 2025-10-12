'use client';
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";


const PartneredByCarousel = ({
  logos,
  speed = "normal",
  direction = "left",
  pauseOnHover = false,
}) => {
  const controls = useAnimationControls();

  const durationMap = {
    fast: 15,
    normal: 40,
    slow: 80,
  };
  const duration = durationMap[speed];

  useEffect(() => {
    controls.start({
      x: direction === "left" ? "-50%" : "0%",
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, direction, duration]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      controls.start({
        x: direction === "left" ? "-50%" : "0%",
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-green-200 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-green-200 to-transparent z-10" />

      <motion.div
        className="flex"

        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 mx-4"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-14 w-auto object-contain grayscale-25 transition-all duration-300 hover:grayscale-0"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartneredByCarousel;