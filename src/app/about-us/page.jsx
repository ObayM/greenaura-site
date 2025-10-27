'use client';

import { useEffect, useRef, useState } from "react";
import { 
  motion, 
  useSpring, 
  useMotionValue, 
  useInView,
  AnimatePresence 
} from "framer-motion";

import { 
  FiUsers, 
  FiZap, 
  FiHeart, 
  FiChevronsDown, 
  FiHeadphones, 
  FiRepeat, 
  FiBookOpen, 
  FiBriefcase,
  FiAward,
  FiShield,
  FiTrendingUp,
  FiPlus,
  FiMinus
} from "react-icons/fi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Background from "@/components/layout/background";
import GlassPanel from "@/components/layout/GlassPanel";


const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/56205803bfb343eb6b1ead0b326e362c4610f41d_tempfileforshare_20251027-230610.jpg",
    bio: "Ahmed founded GreenAura",
    social: {
      linkedin: "https://linkedin.com/in/ahmedhany",
    },
  },
  {
    name: "Obay Rashad",
    role: "Lead Web developer",
    image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/998e4e1028e1a861672520c02aed61bc961a080a_obay.jpg",
    bio: "Obay is in charge of all software development at greenaura",
    social: {
      linkedin: "https://linkedin.com/in/obay-dev",
    },
  },
 
];

const whatWeDoItems = [
    { icon: FiHeadphones , title: "Awareness & Clean-ups", text: "Engaging campaigns and community-driven clean-up drives that make a visible difference." },
    { icon: FiRepeat, title: "Recycling & Waste Mgmt.", text: "Implementing effective, modern recycling and waste management solutions for a circular economy." },
    { icon: FiBookOpen, title: "Educational Programs", text: "Delivering inspiring workshops and seminars for schools, universities, and organizations." },
    { icon: FiBriefcase, title: "Corporate Partnerships", text: "Collaborating with forward-thinking businesses and NGOs to amplify our collective impact." },
];

const impactStats = [
    { value: 5000, suffix: "Kg", label: "of waste collected" }, 
    { value: 200, suffix: "+", label: "trees planted in local communities" },
    { value: 3000, suffix: "+", label: "youth reached via our programs" },
];

const coreValues = [
    { icon: FiTrendingUp, title: "Impact-Driven", description: "Every action we take is aimed at creating measurable, positive environmental change." },
    { icon: FiUsers, title: "Community-Centric", description: "We believe in the power of the collective and empower local communities to lead the change." },
    { icon: FiShield, title: "Integrity", description: "We operate with transparency and accountability in all our partnerships and projects." },
    { icon: FiAward, title: "Innovation", description: "We constantly seek creative and effective solutions to complex environmental challenges." },
];



const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};


const SectionHeader = ({ title, subtitle }) => (
    <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
    >
        <h2 className="text-base font-semibold leading-7 text-emerald-600">{subtitle}</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
        </p>
    </motion.div>
);

const AnimatedStat = ({ value, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => 
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${Intl.NumberFormat('en-US').format(latest.toFixed(0))}${suffix}`;
            }
        }), [springValue, suffix]
    );
    
    return <span ref={ref} />;
};



const HeroSection = () => (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-cover bg-fixed bg-center">


        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center"
        >
            <h1 className="text-5xl font-extrabold text-transparent drop-shadow-xl md:text-8xl bg-clip-text bg-gradient-to-r from-emerald-800 to-gray-800">
                We Are GreenAura
            </h1>
            <p className="mt-4 text-lg font-medium text-gray-700 drop-shadow-lg md:text-2xl">
                A youth-led movement cultivating a sustainable future, one action at a time.
            </p>
        </motion.div>
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 z-10"
        >
            <FiChevronsDown className="h-8 w-8 text-black/54" />
        </motion.div>
    </div>
);

const WhoWeAreSection = () => (
    <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
                className="grid items-center gap-x-8 gap-y-16 lg:grid-cols-2"

                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn}>
                    <h2 className="text-base font-semibold leading-7 text-emerald-600">Our Story</h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Passion-Fueled, Planet-Focused
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        At GreenAura, we believe that protecting the planet starts with everyday action. We're a youth-led environmental initiative working to reduce waste, promote sustainability, and create lasting green impact in our communities.
                    </p>
                </motion.div>
                <motion.div variants={fadeIn} className=" w-full rounded-2xl overflow-hidden ">
                    <img src="/images/about-us-image.png"  className="h-full w-full object-cover"/>
              
                </motion.div>
            </motion.div>
        </div>
    </section>
);

const MissionVisionSection = () => (
    <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader title="Our Purpose" subtitle="Purpose & Vision"/>

            <motion.div 
                className="mt-16 grid grid-cols-1 gap-12 text-center md:grid-cols-2 lg:gap-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
              <GlassPanel>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900">Our Mission</h3>
                    <p className="mt-4 text-lg text-gray-600">To empower individuals and communities with the tools and knowledge to take meaningful environmental action, fostering a global culture of sustainability.</p>
                </GlassPanel>

                <GlassPanel>
    
                    <h3 className="mt-6 text-2xl font-bold text-gray-900">Our Vision</h3>
                    <p className="mt-4 text-lg text-gray-600">We envision a world where human progress and environmental stewardship coexist in harmony, ensuring a healthy, thriving planet for generations to come.</p>

                </GlassPanel>
            </motion.div>
        </div>
    </section>
);

const OurImpactSection = () => (
    <section className=" py-24 sm:py-32">
        <motion.div 
            className="mx-auto max-w-7xl px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
        >
            <motion.div variants={fadeIn} className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Impact, By the Numbers</h2>
                <p className="mt-6 text-lg leading-8 text-emerald-900">
                    Since our launch, we've been busy. Here's a snapshot of what our community has achieved together. And we're just getting started. 🌟
                </p>
            </motion.div>
            <motion.div 
                variants={staggerContainer}
                className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-3 lg:mx-0 lg:max-w-none"
            >
                {impactStats.map((stat) => (
                    <motion.div key={stat.label} variants={fadeIn} className="flex flex-col gap-y-3 border-l-4 border-emerald-500 pl-6">
                        <div className="text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                            <AnimatedStat value={stat.value} suffix={stat.suffix} />

                        </div>
                        <div className="text-sm font-medium uppercase tracking-wider text-emerald-900">{stat.label}</div>
                    </motion.div>

                ))}
            </motion.div>
        </motion.div>
    </section>
);


const WhatWeDoSection = () => (
    <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader title="How We Create Change" subtitle="Our Initiatives"/>
            <motion.dl
                className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 lg:max-w-none"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {whatWeDoItems.map((item) => (
                    <motion.div variants={fadeIn} key={item.title}>
                        <GlassPanel>
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                                   <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                {item.title}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">{item.text}</p>
                            </dd>
                        </GlassPanel>
                    </motion.div>
                ))}
            </motion.dl>
        </div>
    </section>
);


const OurValuesSection = () => (
    <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionHeader title="The Principles We Live By" subtitle="Our Core Values" />

            <motion.div
                className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                {coreValues.map((value) => (
                    <motion.div
                        key={value.title}
                        variants={fadeIn}
                        className="flex flex-col justify-center items-center"
                    >
                      <GlassPanel>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                            <value.icon className="h-7 w-7" />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">{value.title}</h3>
                        <p className="mt-3 text-base text-gray-600">{value.description}</p>
                        </GlassPanel>

                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);


const TeamSection = () => (
    <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader title="Meet Our Leaders" subtitle="The Driving Force"/>
            <motion.ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {teamMembers.map((person) => (
                    <motion.li key={person.name} variants={fadeIn} className="group text-center">
                        <div className="relative overflow-hidden rounded-2xl shadow-lg">
                           <img className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105" src={person.image} alt={person.name} />


                           <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/90 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <p className="text-sm text-gray-200 text-center mb-4">{person.bio}</p>
                                <div className="flex gap-x-4">
                                    <a href={person.social.twitter} className="text-gray-300 hover:text-white transition-colors"><FaTwitter className="h-6 w-6" /></a>
                                    <a href={person.social.linkedin} className="text-gray-300 hover:text-white transition-colors"><FaLinkedin className="h-6 w-6" /></a>
                                </div>
                           </div>
                        </div>

                        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                        <p className="text-base leading-7 text-emerald-600">{person.role}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    </section>
);


const CTASection = () => (
    <div className="bg-emerald-500">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to make a difference?
          <br />
          Join our movement today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="forms.google.com/t/33324u8232fjeiwfj92"
            className="rounded-md bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Involved
          </a>
          <a href="forms.google.com/t/33324u8232fjeiwfj92" className="group text-sm font-semibold leading-6 text-gray-900 transition-colors duration-300 hover:text-emerald-600">
            Learn more <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
);


export default function PremiumAboutPage() {
  return (
    <main className="">
       <Background />

      <HeroSection />

      <WhoWeAreSection />
      <MissionVisionSection />
      <OurImpactSection />
      <WhatWeDoSection />
      <OurValuesSection />
      <TeamSection />
      <CTASection />
    </main>
  );
}