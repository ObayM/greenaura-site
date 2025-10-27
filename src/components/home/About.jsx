'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Counter = ({ from = 0, to }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

    useEffect(() => {
        const node = nodeRef.current;
        if (isInView) {
            const controls = animate(from, to, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    if (node) { 
                        node.textContent = new Intl.NumberFormat().format(Math.round(value));
                    }
                },
            });
            return () => controls.stop();
        }
    }, [from, to, isInView]);

    return <span ref={nodeRef}>{new Intl.NumberFormat().format(from)}</span>;
};


const AboutUsSection = () => {
    const stats = [
        { value: 5000, label: 'Followers' },
        { value: 50, label: 'Countries' },
        { value: 15, label: 'Camps' },
        { value: 10, label: 'Summits' },
    ];

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    };
    
    const title = "We are a global youth-led climate initiative.";
    const titleVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            }
        }
    };
    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 12 },
        }
    };

    return (
        <section
            ref={ref}
            id='about-us'
            className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-lime-100/80 via-green-50 to-lime-200 py-24 sm:py-32 px-4"
        >
            <div className="mx-auto max-w-4xl text-center">
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 inline-flex items-center justify-center rounded-full border border-green-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-green-800 backdrop-blur-sm"
                    >
                        <span className="mr-2 h-2.5 w-2.5 rounded-full bg-lime-400"></span>
                        Who We Are
                    </motion.div>

                    <motion.h1
                        variants={titleVariants}
                        className="text-5xl font-bold tracking-tight text-green-900 sm:text-7xl leading-tight"
                    >
                        {title.split(" ").map((word, index) => (
                           <motion.span key={index} className="inline-block mr-[0.25em]" variants={wordVariants}>
                                {word}
                            </motion.span> 
                        ))}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-700"
                    >
                        From humble beginnings in Egypt, GreenAura has grown into a worldwide network of changemakers building a greener tomorrow through research, entrepreneurship, and technology.
                    </motion.p>
                    <motion.div
                        className="my-16"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: [0, -20, 0] } : {}}
                        transition={{
                            opacity: { duration: 0.5, delay: 0.5 },
                            scale: { duration: 0.5, delay: 0.5 },
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 1,
                            },
                        }}
                    >
                    </motion.div>
                    
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                    >
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                className="rounded-2xl border border-white/30 bg-white/40 p-6 backdrop-blur-md shadow-lg"
                            >
                                <p className="text-4xl font-bold tracking-tighter text-green-900">
                                    <Counter from={0} to={stat.value} />+
                                </p>
                                <p className="mt-1 text-sm capitalize text-gray-600">
                                    {stat.label}
                                </p>
                            </motion.div>

                        ))}
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-16">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="inline-block"
                        >
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-3 rounded-full bg-lime-400 py-4 px-8 font-bold text-green-900 shadow-lg ring-1 ring-lime-900/10 transition-all duration-300 hover:bg-lime-500 hover:shadow-2xl hover:shadow-lime-500/50"
                            >
                                Learn More About Us
                                <span className="rounded-full bg-green-900 p-2 text-white transition-transform duration-300 group-hover:rotate-45">
                                    <FaArrowRight size={14}/>
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};


export default AboutUsSection;