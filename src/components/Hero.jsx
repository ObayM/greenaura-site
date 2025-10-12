'use client';
import React from "react";


function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/hero-image.jpg')]" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-10 lg:p-16">
        
        <div className="animate-fade-in-up opacity-0">
          
          <h1 
            className="font-bold text-[#fdfcf9] text-4xl sm:text-5xl lg:text-7xl leading-tight lg:leading-snug drop-shadow-lg"
            style={{ fontFamily: 'var(--font-unbounded)' }} 
          >
            Youth-Led <span className="bg-red-600 p-2 rounded-2xl">Climate</span> <br className="hidden sm:block" /> Action Starts Here.
          </h1>

          <div className="mt-6 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            
            <p 
              className="text-[#f0e9d9] text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl"
            >
              We empower young people around the world to design bold, innovative
              solutions for a sustainable future.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
              <button 
                className="font-semibold text-base w-full sm:w-auto bg-[#577323] text-[#ebebeb] px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-[#475e1f] hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#dbdaa9] focus:ring-opacity-50"
              >
                Explore Our Programs
              </button>

              <button 
                className="font-semibold text-base w-full sm:w-auto bg-[#dbdaa9] text-[#577323] px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-[#c4c48f] hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#577323] focus:ring-opacity-50"
              >
                Join the Movement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;