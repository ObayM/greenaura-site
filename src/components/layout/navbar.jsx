'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import NLink from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about-us', label: 'About Us' },
    { to: 'programs', label: 'Programs' },
    { to: 'blog', label: 'Blog' },
    // { to: 'alumni', label: 'Alumni' },
    // { to: '/oppertunities', label: 'Oppertunities' },
    { to: 'join-us', label: 'Join Us' },
    { to: 'faq', label: 'FAQ' },
    { to: 'contact-us', label: 'Contact Us' },
  ];

  const navContainerVariants = {
    hidden: { y: -100, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100, delay: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const mobileLinkContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120 } },
  };

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  const linkClassName =
    'text-slate-100 hover:text-green-500 transition-colors duration-300  cursor-pointer relative group';

  return (
    <>
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-6xl rounded-full bg-slate-800/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
        >
          <div className="flex items-center justify-between px-6 py-3">
            <NLink href="/" className="cursor-pointer">
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
                <span className="hidden sm:block text-xl font-bold text-slate-100">GreenAura</span>
              </motion.div>
            </NLink>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isPageLink = link.to.startsWith('/');

                if (isPageLink) {
                  return (
                    <NLink key={link.to} href={link.to} className={linkClassName}>
                      {link.label}
                      <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
                    </NLink>
                  );
                }


                if (isHomePage) {
                  return (
                    <ScrollLink
                      key={link.to}
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className={linkClassName}
                      activeClass="text-green-400 font-bold"
                    >
                      {link.label}
                      <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-green-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
                    </ScrollLink>
                  );
                }

                return (
                  <NLink key={link.to} href={`/#${link.to}`} className={linkClassName}>
                    {link.label}
                    <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
                  </NLink>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34, 211, 238, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-5 py-2 rounded-full transition-shadow duration-300"
                >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf39Nv5dKa0UDEWECSFWEJLJO" target="_blank">Donate</a>
                </motion.button>
              </div>

              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-slate-100 z-50 p-2">
                  {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 z-40 bg-slate-900/90 backdrop-blur-xl"
            onClick={closeMenu}
          >
            <motion.div
              variants={mobileLinkContainerVariants}
              initial="hidden"
              animate="visible"
              className="h-full flex flex-col items-center justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => {
                const isPageLink = link.to.startsWith('/');
                const mobileLinkClass =
                  'text-slate-200 hover:text-cyan-400 transition-colors duration-300 font-medium cursor-pointer text-2xl';
                
                if (isPageLink) {
                  return (
                    <motion.div key={link.to} variants={mobileLinkVariants}>
                      <NLink href={link.to} className={mobileLinkClass} onClick={closeMenu}>
                        {link.label}
                      </NLink>
                    </motion.div>
                  );
                }


                if (isHomePage) {
                  return (
                    <motion.div key={link.to} variants={mobileLinkVariants}>
                      <ScrollLink
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={mobileLinkClass}
                        activeClass="text-cyan-400 font-bold"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </ScrollLink>
                    </motion.div>
                  );
                }

                return (
                  <motion.div key={link.to} variants={mobileLinkVariants}>
                    <NLink href={`/#${link.to}`} className={mobileLinkClass} onClick={closeMenu}>
                      {link.label}
                    </NLink>
                  </motion.div>
                );
              })}
              <motion.div variants={mobileLinkVariants}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34, 211, 238, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-10 py-4 rounded-full mt-6 text-lg"
                  onClick={closeMenu}
                >
                <a href="#" target="_blank">Donate</a>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;