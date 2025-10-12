'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const JoinUsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 12 },
        },
    };

    return (
        <section className="relative bg-gradient-to-b from-lime-100/60 via-green-50 to-[#0A1A12] py-32 sm:py-48 w-full flex items-center justify-center overflow-hidden">

            <motion.div
                className="relative z-10 text-center px-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-700 sm:text-7xl"
                >
                    Join a Greener Tomorrow
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-900/70"
                >
                    Your journey as a changemaker starts here. Connect with a global network dedicated to building a better, sustainable future!
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/programs"
                            className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-4 text-base font-semibold text-green-950 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-lime-500/40"
                        >
                            Join our community
                        </Link>
                    </motion.div>
                    
                     <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/partner"
                            className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-full border border-green-900/20 bg-white/30 px-8 py-4 text-base font-semibold text-green-950 backdrop-blur-md transition-all duration-300 hover:border-green-900/40 hover:bg-white/50"
                        >
                            Apply as a volunteer
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default JoinUsSection;