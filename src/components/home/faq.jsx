'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 14 },
    },
};

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const answerVariants = {
        collapsed: { opacity: 0, height: 0, marginTop: 0 },
        open: {
            opacity: 1,
            height: 'auto',
            marginTop: '0px',
            transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
        },
    };

    return (
        <motion.div
            variants={itemVariants}
            className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-green-200/50"
            animate={{
                backgroundColor: isOpen ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.6)',
            }}
            transition={{ duration: 0.3 }}
        >
            <motion.button
                className="w-full flex justify-between items-start text-left p-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ backgroundColor: 'rgba(236, 253, 245, 0.7)' }}
            >
                <h3 className="text-lg font-semibold text-emerald-800 pr-4">
                    {question}
                </h3>
                <div className="flex-shrink-0 ml-4 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FiPlus className="text-2xl text-emerald-700" />
                    </motion.div>
                </div>
            </motion.button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={answerVariants}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 text-emerald-700/90 leading-relaxed">
                            {answer}
                        </p>
                    </motion.section>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQSection = () => {
    const faqData = [
    {
        question: "What is GreenAura?",
        answer: "GreenAura is a global youth-led movement dedicated to empowering young people to create innovative and sustainable solutions for environmental challenges through research, entrepreneurship, and technology."
    },
    {
        question: "What makes GreenAura different from other environmental initiatives?",
        answer: "GreenAura focuses on action, not just awareness. It empowers youth to implement real-world sustainability projects, connect with global networks, and lead local change through creativity and collaboration."
    },
    {
        question: "How can I join GreenAura?",
        answer: "You can join by applying through our official channels or by connecting with one of our local branches. Once accepted, you’ll be invited to participate in our programs and collaborative circles."
    },
    {
        question: "What are the benefits of joining GreenAura?",
        answer: "Members gain access to mentorship, professional training, networking with global organizations, real-world project experience, and certificates or recommendation letters recognizing their contributions."
    },
    {
        question: "Is participation flexible for students or professionals?",
        answer: "Yes! GreenAura values balance and flexibility. Most roles require around 5–10 hours per week, and members can contribute according to their schedules and commitments."
    },
    {
        question: "Can I support GreenAura without joining as a member?",
        answer: "Absolutely. You can support by donating, offering mentorship, forming partnerships, or contributing resources to help expand our programs and impact."
    },
    {
        question: "What kind of programs does GreenAura run?",
        answer: "GreenAura runs diverse programs such as leadership fellowships, sustainability challenges, climate-tech hackathons, creative competitions, and international exchange opportunities."
    },
    {
        question: "Is GreenAura an international organization?",
        answer: "Yes. GreenAura operates globally with members, chapters, and ambassadors across multiple countries, collaborating on international sustainability and climate action projects."
    },
    {
        question: "What are GreenAura’s main values?",
        answer: "Our core values include youth empowerment, innovation, community-led action, global solidarity, integrity, and sustainability — all guiding how we work and grow together."
    },
    {
        question: "How can I stay updated about GreenAura’s activities?",
        answer: "Follow GreenAura on its official social media channels like Facebook, Instagram, LinkedIn, and Telegram for updates, program announcements, and opportunities to get involved."
    },
];

    return (
        <section id="faq" className="relative bg-emerald-50 py-24 sm:py-32 overflow-hidden">

            <div
                className="absolute -top-40 -right-40 w-96 h-96 bg-lime-200/50 rounded-full blur-3xl opacity-60"
            />
            <div
                className="absolute top-1/2 -left-60 w-96 h-96 bg-green-200/40 rounded-full blur-3xl opacity-50"
            />

            <div className="container mx-auto max-w-5xl px-4 relative">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold text-emerald-900 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg text-emerald-700 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
                    </motion.p>
                </div>

                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;