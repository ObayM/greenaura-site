'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiMail } from 'react-icons/fi';

const FormInput = ({ label, type, id, placeholder, isTextArea }) => {
    const [isFocused, setIsFocused] = useState(false);

    const inputClasses = `w-full bg-white/50 border-2 rounded-xl px-4 py-3 outline-none transition-all duration-300 text-green-900 placeholder-gray-400
        ${isFocused ? 'border-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.3)]' : 'border-green-200/50'}`;

    return (
        <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mb-6"
        >
            <label htmlFor={id} className="block text-sm font-bold text-green-800 mb-2 ml-1">
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    id={id}
                    rows="4"
                    placeholder={placeholder}
                    className={`${inputClasses} resize-none`}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={inputClasses}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            )}
        </motion.div>
    );
};

const InfoItem = ({ icon: Icon, title, content }) => (
    <motion.div 
        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
        className="flex items-start gap-4"
    >
        <div className="flex-shrink-0 bg-lime-100 p-3 rounded-full text-lime-700">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="font-bold text-green-900">{title}</h4>
            <p className="text-green-700/80 text-sm mt-1">{content}</p>
        </div>
    </motion.div>
);

const ContactSection = () => {
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // will impement this later on
    };

    return (
        <section id='contact-us' className="relative w-full py-24 sm:py-32 bg-green-50 overflow-hidden">
            
            <div className="container mx-auto max-w-6xl px-4 relative z-10">
                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="space-y-8">
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            <span className="text-lime-600 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-green-900 mt-2 leading-tight">
                                Let's build a greener future together.
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                Whether you have a question about our programs, want to partner with us, or just want to say hi, we'd love to hear! (seriously)
                            </p>
                        </motion.div>

                        <div className="space-y-6 mt-8">
                            <InfoItem
                                icon={FiMail}
                                title="Email Us"
                                content={<a href="mailto:hello@greenaura.org" className="hover:text-lime-600 transition-colors">hello@greenaura.org</a>}
                            />
                            <InfoItem
                                icon={FiMapPin}
                                title="Our Roots"
                                content="Cairo, Egypt (Global Network)"
                            />
                        </div>
                    </div>

                    <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                        transition={{ type: "spring", duration: 0.8 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-green-900/10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50"></div>

                            <FormInput label="Your Name" type="text" id="name" placeholder="Obay Rashad" />
                            <FormInput label="Email Address" type="email" id="email" placeholder="name@example.com" />
                            <FormInput label="Message" id="message" placeholder="your message!" isTextArea={true} />

                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="mt-8"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: '#84cc16' }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-green-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-colors duration-300 group"
                                >
                                    Send Message
                                    <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;

