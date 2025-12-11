'use client';

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";


import {
    FiUsers,
    FiZap,
    FiArrowRight,
    FiTrendingUp,
    FiShield,
} from "react-icons/fi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Background from "@/components/layout/background";
import AnimatedStat from "./AnimatedStat";



const teamMembers = [
    {
        name: "Alex Rivera",
        role: "Founder & CEO",
        image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/56205803bfb343eb6b1ead0b326e362c4610f41d_tempfileforshare_20251027-230610.jpg",
        bio: "Visionary leader with a passion for sustainable innovation.",
        social: {
            linkedin: "https://linkedin.com/in/ahmedhany",
            twitter: "#"
        },
    },
    {
        name: "Obay Rashad",
        role: "Lead Web Developer",
        image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/998e4e1028e1a861672520c02aed61bc961a080a_obay.jpg",
        bio: "Crafting digital experiences that drive real-world impact.",
        social: {
            linkedin: "https://linkedin.com/in/obay-dev",
            github: "#"
        },
    },
];

const stats = [
    { value: 5000, suffix: "kg", label: "Waste Collected" },
    { value: 200, suffix: "+", label: "Trees Planted" },
    { value: 3000, suffix: "+", label: "Lives Impacted" },
    { value: 15, suffix: "", label: "Partner Cities" },
];

const values = [
    {
        title: "Impact First",
        description: "We measure success by the tangible difference we make in our environment.",
        icon: FiTrendingUp,
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        title: "Community Led",
        description: "Real change happens when local communities are empowered to lead.",
        icon: FiUsers,
        color: "bg-teal-100 text-teal-600"
    },
    {
        title: "Radical Integrity",
        description: "Transparency and honesty are the bedrock of everything we do.",
        icon: FiShield,
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        title: "Bold Innovation",
        description: "We aren't afraid to try new things to solve old problems.",
        icon: FiZap,
        color: "bg-lime-100 text-lime-600"
    }
];



const SectionLabel = ({ children, className = "" }) => (
    <div className={`flex items-center gap-2 mb-6 ${className}`}>
        <span className="h-px w-8 bg-emerald-500/50"></span>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 font-unbounded">
            {children}
        </span>
    </div>
);

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#fdfcf8]">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: y1, x: -50 }}
                    className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-100/60 rounded-full blur-[120px] mix-blend-multiply"
                />
                <motion.div
                    style={{ y: y2, x: 50 }}
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-100/60 rounded-full blur-[100px] mix-blend-multiply"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50/50 border border-emerald-200 backdrop-blur-sm mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase">Est. 2024</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 font-unbounded tracking-tight leading-[1.1] mb-8">
                            Cultivating a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                Greener Future
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
                            We are a collective of dreamers and doers, dedicated to restoring the balance between humanity and nature.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-900/20">
                            <span className="relative z-10 flex items-center gap-2">
                                Our Mission <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                        <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all">
                            Meet the Team
                        </button>
                    </motion.div>
                </div>
            </div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent" />
            </motion.div>
        </section>
    );
};

const StorySection = () => {
    return (
        <section className="py-32 bg-[#fdfcf8] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-900/10 aspect-[4/5]">
                            <img
                                src="/images/about-us-image.png"
                                alt="Our Story"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="font-unbounded text-2xl font-bold">"Nature doesn't need us. We need nature."</p>
                            </div>
                        </div>

                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
                    </div>

                    <div>
                        <SectionLabel>Our Story</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold font-unbounded text-slate-900 mb-8 leading-tight">
                            From a Small Seed to a <span className="text-emerald-600">Global Movement</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                It started with a simple observation: our local parks were disappearing under layers of neglect. What began as a weekend cleanup crew has blossomed into GreenAura.
                            </p>
                            <p>
                                We believe that environmental stewardship shouldn't be a burden, but a celebration of life. By combining modern technology with ancient wisdom, we're creating a new blueprint for sustainable living.
                            </p>
                            <p>
                                Today, we're not just cleaning up waste; we're cleaning up mindsets. We're empowering a new generation to see themselves not as consumers, but as custodians of this beautiful planet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatsSection = () => {
    return (
        <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-5xl md:text-6xl font-bold font-unbounded mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 group-hover:to-emerald-400 transition-all duration-500">
                                <AnimatedStat value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm font-bold uppercase tracking-widest text-emerald-500/80 group-hover:text-emerald-400 transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ValuesSection = () => {
    return (
        <section className="py-32 bg-stone-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <SectionLabel className="justify-center">Our Core Values</SectionLabel>
                    <h2 className="text-4xl font-bold font-unbounded text-slate-900 mb-6">The Principles That Guide Us</h2>
                    <p className="text-lg text-slate-600">
                        We don't just talk about change; we embody it. These values are the compass for every decision we make.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#fdfcf8] p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-6 text-2xl`}>
                                <value.icon />
                            </div>
                            <h3 className="text-xl font-bold font-unbounded text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamSection = () => {
    return (
        <section className="py-32 bg-[#fdfcf8] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <SectionLabel>Our Team</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-bold font-unbounded text-slate-900">
                            Meet the <span className="text-emerald-600">Visionaries</span>
                        </h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
                        View Full Team <FiArrowRight />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 mb-6 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {member.social.linkedin && (
                                            <a href={member.social.linkedin} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors">
                                                <FaLinkedin size={20} />
                                            </a>
                                        )}
                                        {member.social.twitter && (
                                            <a href={member.social.twitter} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors">
                                                <FaTwitter size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold font-unbounded text-slate-900 mb-1">{member.name}</h3>
                            <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{member.bio}</p>
                        </motion.div>
                    ))}


                    < div className="aspect-[3/4] rounded-3xl bg-stone-50 border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-center p-8 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all cursor-pointer group" >
                        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:scale-110 transition-all mb-6">
                            <FiUsers size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-unbounded text-slate-900 mb-2">Join the Team</h3>
                        <p className="text-slate-500 mb-6">We are always looking for passionate individuals.</p>
                        <span className="text-emerald-600 font-bold group-hover:underline">View Openings</span>
                    </div>
                </div>
            </div>
        </section >
    );
};

const CTA = () => {
    return (
        <section className="py-32 bg-emerald-900 relative overflow-hidden isolate">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-emerald-500/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[800px] h-[800px] bg-teal-500/30 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-unbounded text-white mb-8 leading-tight">
                        Ready to Plant Your <br />
                        <span className="text-emerald-300">Legacy?</span>
                    </h2>
                    <p className="text-xl text-emerald-100/80 mb-12 leading-relaxed">
                        The best time to plant a tree was 20 years ago. The second best time is now. Join us in shaping a greener tomorrow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://forms.google.com/t/33324u8232fjeiwfj92"
                            className="px-10 py-5 bg-white text-emerald-950 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105 shadow-xl shadow-emerald-900/20"
                        >
                            Get Involved Now
                        </a>
                        <a
                            href="#"
                            className="px-10 py-5 bg-transparent border border-emerald-400/30 text-white rounded-full font-bold text-lg hover:bg-emerald-800/30 transition-all"
                        >
                            Donate
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function PremiumAboutPage() {
    return (
        <main className="bg-[#fdfcf8] selection:bg-emerald-200 selection:text-emerald-900">
            <Background />
            <Hero />
            <StorySection />
            <StatsSection />
            <ValuesSection />
            <TeamSection />
            <CTA />
        </main>
    );
}