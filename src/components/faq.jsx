'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

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
            marginTop: '16px',
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
    };

    return (
        <motion.div
            variants={itemVariants}
            className="border-b-2 border-green-200/50 py-6"
        >
            <motion.header
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                initial={false}
            >
                <h3 className="text-lg font-semibold text-green-900">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FiChevronDown className="text-2xl text-green-700" />
                </motion.div>
            </motion.header>

            <AnimatePresence>
                {isOpen && (
                    <motion.section
                        key="content"
                        variants={answerVariants}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                    >
                        <p className="text-gray-600 leading-relaxed">{answer}</p>
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    return (
        <div id="faq"  className="relative bg-gradient-to-b from-green-50 to-lime-100/60">
            {/* wavy devider
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block h-[80px] w-full"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-current text-lime-900" 
                    ></path>
                </svg>
            </div> */}
            
            <motion.div
                className="container mx-auto max-w-3xl px-4 py-32 sm:py-40"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="text-center">
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-green-900">
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-700">
                        Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
                    </motion.p>
                </div>

                <div className="mt-12">
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default FAQSection;

