'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {FaMicrophone, FaTrophy, FaVoicemail} from 'react-icons/fa';

import VanillaTilt from 'react-vanilla-tilt';

import Link from 'next/link';

const ActivityCard = ({ icon, title, description, color }) => {
    const IconComponent = icon;
    return (
        <VanillaTilt
            style={{}}
            className="w-96 h-108 flex-shrink-0"
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

                </div>
                {/* <Link href="#" className="mt-4 inline-flex items-center font-semibold text-white group-hover:underline">
                        Learn More
                </Link> */}

                 <IconComponent className="absolute bottom-0 right-0 text-white/5 text-[12rem] transform translate-x-1/4 translate-y-1/4 transition-all duration-500 group-hover:scale-110" />
            </div>
        </VanillaTilt>
    );
};

const ActivitiesSection = () => {
    const activities = [
        {
            icon: FaTrophy,
            title: 'EcoVerse summit & Challenge',
            description: 'The first sustainable summit & innovation challenge of its kind in the Middle East, combining climate education, entrepreneurship, and a competition for green startups, with Mini Summits led by ambassadors in different cities.',
            color: '#166534',
        },
        {
            icon: FaVoicemail,
            title: 'Voices for the planet',
            description: 'A digital storytelling challenge for content creators to raise climate awareness using voiceovers, short videos, podcasts, or reels.',
            color: '#ca8a04',
        },
        {
            icon: FaMicrophone,
            title: 'EcoMedia',
            description: 'A creative contest inviting artists, designers, and visual storytellers to raise environmental awareness through photography, design, and visual arts.',
            color: '#0f766e',
        },
        {
            icon: FaTrophy,
            title: 'Global Leaders for Sustainability',
            description: 'A transformative leadership program that equips passionate youth with the knowledge and skills to become impactful sustainability changemakers. Through mentorship, real-world projects and climate leadership training, participants emerge empowered to drive action within their communities and beyond.',
            color: '#84cc16',
        },
         {
            icon: FaTrophy,
            title: 'GreenAura Ambassadors',
            description: 'A dynamic leadership program empowering youth to launch impactful projects, host events, and represent GreenAura in schools, universities, and local communities.',
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
        <section 
        id="programs"
        ref={ref} className="bg-gradient-to-b from-lime-200  via-emerald-100 to-lime-100 py-24 sm:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-3xl mb-16 text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-green-900">
                        Here are a few projects we've done!
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-green-900/90">
                            Will write some text here later
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
