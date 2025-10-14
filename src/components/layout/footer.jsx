'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFacebook, FaTelegram } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100 },
        },
    };

    const socialIcons = [
        { icon: FaFacebook, href: 'https://www.facebook.com/GreenAuraOfficial' },
        { icon: FaInstagram, href: 'https://www.instagram.com/greenaura.eg/' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/company/green-aura-2025' },
        { icon: FaTelegram, href: 'https://t.me/greenaura_opportunities' },
    ];

    return (
        <footer className="relative bg-[#0A1A12] text-white pt-20 overflow-hidden">

            
            <motion.div
                className="container mx-auto px-8 py-16 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <Image src="/logo.png" alt="GreenAura Logo" width={40} height={40} />
                            <span className="text-2xl font-bold text-white">GreenAura</span>
                        </Link>
                        <p className="text-green-200/70 text-sm max-w-xs">
                            A global youth-led initiative building a greener tomorrow.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialIcons.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={`Follow us on ${social.icon.name.substring(2)}`}
                                    whileHover={{ scale: 1.2, y: -2, color: '#a3e635' }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-green-200/80"
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold mb-4 tracking-wider uppercase text-lime-400">Programs</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-green-200/70 hover:text-white transition-colors">EcoVerse</Link></li>
                            <li><Link href="/" className="text-green-200/70 hover:text-white transition-colors">EcoMedia</Link></li>
                            <li><Link href="/" className="text-green-200/70 hover:text-white transition-colors">Voices For the planet</Link></li>
                        </ul>
                    </motion.div>

                     <motion.div variants={itemVariants}>
                        <h3 className="font-semibold mb-4 tracking-wider uppercase text-lime-400">About</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-green-200/70 hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/" className="text-green-200/70 hover:text-white transition-colors">Team</Link></li>
                            <li><Link href="/" className="text-green-200/70 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                         <h3 className="font-semibold mb-4 tracking-wider uppercase text-lime-400">Join our newsletter</h3>
                         <p className="text-green-200/70 text-sm mb-4">Get the latest updates on our programs and climate news.</p>
                         <form className="flex">
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full bg-green-900/40 text-white rounded-l-lg px-4 py-2 border border-green-700 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all"
                            />
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="submit"
                                className="bg-lime-500 text-green-900 p-3 rounded-r-lg"
                                aria-label="Subscribe to newsletter"
                            >
                                <FiSend />
                            </motion.button>
                         </form>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 pt-8 border-t border-green-200/20 text-center text-sm text-green-200/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p>© {new Date().getFullYear()} GreenAura. All Rights Reserved.</p>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;

