'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const BlogClientPage = ({ posts, categories }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = useMemo(() => {
        if (activeCategory === 'All') {
            return posts.slice(1);
        }
        return posts.slice(1).filter(post => post.category === activeCategory);
    }, [activeCategory, posts]);

    const featuredPost = posts[0];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
    };

    return (
        <div className="bg-gradient-to-b from-white to-green-50">
            <main className="container mx-auto max-w-5xl px-4 py-24 sm:py-32">
                
                <motion.section 
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <span className="text-lime-600 font-semibold tracking-widest uppercase">Latest Post</span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-green-900 tracking-tight mt-2">
                        <Link href={`/blog/${featuredPost.slug}`} className="hover:text-lime-700 transition-colors">
                            {featuredPost.title}
                        </Link>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        {featuredPost.excerpt}
                    </p>
                    <Link href={`/blog/${featuredPost.slug}`} className="group inline-flex items-center gap-2 font-bold text-lime-600 mt-6 text-lg">
                        Read Full Story
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.section>

                <div className="flex justify-center flex-wrap gap-3 mb-16">
                    {categories.map(category => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                                activeCategory === category
                                ? 'bg-green-800 text-white shadow'
                                : 'bg-white text-green-800 hover:bg-green-100'
                            }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    className="space-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence>
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <Link href={`/blog/${post.slug}`} className="group grid gap-8 items-center">
                                    <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <span className="inline-block bg-lime-100 text-lime-800 rounded-full px-3 py-1 text-xs font-semibold">
                                                {post.category}
                                            </span>
                                            <time>{post.date}</time>
                                        </div>
                                        <h2 className="text-3xl font-bold text-green-900 mb-4 transition-colors duration-300 group-hover:text-lime-600">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {post.excerpt}
                                        </p>
                                        <div className="inline-flex items-center gap-2 font-bold text-lime-600">
                                            Read Post
                                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                    
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>
        </div>
    );
};

export default BlogClientPage;