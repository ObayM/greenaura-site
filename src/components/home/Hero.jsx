'use client';
import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight, ChevronDown } from 'lucide-react';

function HeroSection() {
  const headline = "Youth-Led Climate \n Action Starts Here";
  const headlineWords = headline.split(' ');

  return (
    <>
      <div id="home" className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/hero-image.jpg')]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-10 lg:p-16">
          
          <div className="max-w-7xl mx-auto w-full">
            <h1 
              className="font-extrabold text-[#fdfcf9] text-4xl sm:text-5xl lg:text-7xl leading-tight lg:leading-snug drop-shadow-xl"
              style={{ fontFamily: 'var(--font-unbounded)' }} 
            >
              {headlineWords.map((word, index) => (
                <span key={index} className="inline-block">
                  <span 
                    className="inline-block animate-fadeInUp"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {word === 'Climate' ? (
                      <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                    &nbsp;
                  </span>
                </span>
              ))}
            </h1>

            <div className="mt-8 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              
              <p 
                className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl animate-fadeInUp"
                style={{ animationDelay: '900ms' }}
              >
                We empower young people around the world to design bold, innovative
                solutions for a sustainable future.
              </p>

              <div 
                className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto animate-fadeInUp"
                style={{ animationDelay: '1100ms' }}
              >
                <ScrollLink to="programs" spy={true} smooth={true} offset={-100} duration={500}>
                  <button className="group font-semibold text-base w-full sm:w-auto bg-[#577323] text-white px-7 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-[#6a8b29] hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#dbdaa9]/50 flex items-center justify-center gap-2">
                    Explore Programs
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </ScrollLink>

                <ScrollLink to="join-us" spy={true} smooth={true} offset={-100} duration={500}>
                  <button className="group font-semibold text-base w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50">
                    Join the Movementd
                  </button>
                </ScrollLink>
              </div>
            </div>
          </div>
          
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={800}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer p-2 animate-fadeInUp"
            style={{ animationDelay: '1500ms' }}
          >
            <ChevronDown className="w-7 h-7 text-white/70 animate-scrollBounce" />
          </ScrollLink>

        </div>
      </div>
    </>
  );
}

export default HeroSection;