'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {FaTrophy} from 'react-icons/fa';

import VanillaTilt from 'react-vanilla-tilt';

import Link from 'next/link';

const ActivityCard = ({ icon, title, description, color }) => {
    const IconComponent = icon;
    return (
        <VanillaTilt
            style={{}}
            className="w-80 h-96 flex-shrink-0"
            options={{
                max: 15,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
                scale: 1.05
            }}
        >
            <div className="group relative w-full h-full rounded-3xl p-8 flex flex-col justify-between overflow-hidden"
                 style={{ backgroundColor: color }}>
                
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl transition-all duration-500 group-hover:scale-150"></div>

                <div className="relative z-10">
                    <div className="mb-4 inline-block p-4 bg-white/20 rounded-xl">
                        <IconComponent className="text-white text-4xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
                </div>
                
                <div className="relative z-10">
                    <p className="text-white/80">{description}</p>
                    <Link href="#" className="mt-4 inline-flex items-center font-semibold text-white group-hover:underline">
                        Learn More
                    </Link>
                </div>

                 <IconComponent className="absolute bottom-0 right-0 text-white/5 text-[12rem] transform translate-x-1/4 translate-y-1/4 transition-all duration-500 group-hover:scale-110" />
            </div>
        </VanillaTilt>
    );
};

const ActivitiesSection = () => {
    const activities = [
        {
            icon: FaTrophy,
            title: 'To be named here',
            description: 'Description goes here',
            color: '#166534',
        },
        {
            icon: FaTrophy,
            title: 'To be named here',
            description: 'Description goes here',
            color: '#ca8a04',
        },
        {
            icon: FaTrophy,
            title: 'To be named here',
            description: 'Description goes here',
            color: '#0f766e',
        },
        {
            icon: FaTrophy,
            title: 'To be named here',
            description: 'Description goes here',
            color: '#84cc16',
        },
         {
            icon: FaTrophy,
            title: 'To be named here',
            description: 'Description goes here',
            color: '#4f46e5',
        },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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

    return (
        <section ref={ref} className="bg-[#0A1A12] py-24 sm:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-3xl mb-16 text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-white">
                        Here are a few projects we've done!
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-green-200/70">
                        Our ecosystem is designed to empower the next generation of climate leaders through hands-on programs, collaborative challenges, and groundbreaking research.
                    </motion.p>
                </motion.div>
            </div>

            <motion.div 
                className="flex gap-8 cursor-grab px-4 md:px-12"
                 drag="x"
                 dragConstraints={{ left: -100 * activities.length, right: 0 }}
                 initial={{ x: 100, opacity: 0 }}
                 animate={isInView ? { x: 0, opacity: 1 } : {}}
                 transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }}
            >
                {activities.map((activity, index) => (
                    <ActivityCard key={index} {...activity} />
                ))}
            </motion.div>
            
            <motion.div
                className="mt-12 text-center text-gray-400 font-mono text-sm"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
            >
                &lt;-- Drag to explore our programs --&gt;
            </motion.div>

        </section>
    );
};

export default ActivitiesSection;

