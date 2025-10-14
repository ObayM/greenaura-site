'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const BlogPostLayout = ({ post }) => {
    
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <div className="bg-white text-gray-800">
            <motion.article
                className="container mx-auto max-w-3xl px-4 py-24 sm:py-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-12">
                    <Link href="/" className="group inline-flex items-center gap-2 text-lime-600 font-semibold hover:text-lime-800 transition-colors">
                        <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </motion.div>

                <motion.header variants={itemVariants}>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="inline-block bg-lime-100 text-lime-800 rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                            {post.category}
                        </span>
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 tracking-tight leading-tight">
                        {post.title}
                    </h1>
                </motion.header>

                <motion.div variants={itemVariants} className="my-8 h-px bg-green-200/60" />

                <motion.div
                    variants={itemVariants}
                    className="prose prose-lg prose-green max-w-none" 
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

            </motion.article>
        </div>
    );
};

export default BlogPostLayout;


