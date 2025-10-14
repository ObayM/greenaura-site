'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ category, title, excerpt, date, slug }) => {
    
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 14 },
        },
    };

    return (
        <Link href={`/blog/${slug}`} passHref>
            <motion.div
                variants={cardVariants}
                className="group relative flex flex-col h-full bg-white rounded-2xl border border-green-200/50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
                <div className="flex-grow">
                    <span className="inline-block bg-lime-100 text-lime-800 rounded-full px-3 py-1 text-xs font-semibold tracking-wide mb-4">
                        {category}
                    </span>
                    <h3 className="text-xl font-bold text-green-900 mb-3 group-hover:text-lime-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {excerpt}
                    </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/80 flex justify-between items-center text-sm text-gray-500">
                    <div>

                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-lime-600">
                        Read More
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

const BlogSection = ({ posts }) => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 },
        },
    };

    return (
        <section id="blog" className="bg-gradient-to-b from-lime-100 to-green-50 py-24 sm:py-32">
            <div className="container mx-auto max-w-6xl px-4">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-green-900">
                        Latest Insights
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                        Our latest articles to read about informative topics such as sustainability, climate action, and green technology.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {posts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </motion.div>
                {/* commenting this for now until the blog page is ready */}
{/* 
                 <div className="text-center mt-16">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.5 }}
                    >
                         <Link href="/blog" className="inline-flex items-center gap-3 bg-lime-400 hover:bg-lime-500 transition-all duration-300 text-green-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            <span>View All Posts</span>
                            <FaArrowRight />
                        </Link>
                    </motion.div>
                </div> */}

            </div>
        </section>
    );
};

export default BlogSection;