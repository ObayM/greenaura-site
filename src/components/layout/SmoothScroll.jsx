"use client";

import React, { useRef, useEffect } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy?.();
  }, []);

  
const options = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
};

  return (
    <ReactLenis root options={options} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}

