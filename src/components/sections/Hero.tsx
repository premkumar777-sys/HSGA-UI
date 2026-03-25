"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/uikit/Button';
import { ArrowRight, ShieldCheck, Award, Users, Landmark, Globe } from 'lucide-react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/assets/hero-1.png',
        '/assets/hero-2.png',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev: number) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const stats = [
        { label: 'Districts Covered', value: '33', icon: <Landmark size={20} /> },
        { label: 'Affiliated Schools', value: '1,200+', icon: <Award size={20} /> },
        { label: 'Active Members', value: '85K+', icon: <Users size={20} /> },
        { label: 'Years of Service', value: '75+', icon: <Landmark size={20} /> },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-white">
            {/* Background Carousel */}
            <div className="absolute inset-0 z-0 bg-slate-900">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
                    />
                </AnimatePresence>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-primary-dark/90 z-[1]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-accent-light px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-8 shadow-glass">
                        <ShieldCheck size={14} /> Established 1949 · Telangana Unit
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.05] mb-8 text-balance max-w-5xl">
                        Building the <span className="text-accent underline decoration-accent/30">Citizens</span> of Tomorrow.
                    </h1>

                    <p className="text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                        Hindustan Scouts & Guides Association is India's most trusted youth movement.
                        Empowering students with character and leadership across all 33 districts.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto mb-20">
                        <Button size="lg" className="w-full sm:w-auto px-10 py-7 group text-lg">
                            Register Your School <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-7 border-white/20 hover:bg-white/10 text-lg">
                            Discover Our Story
                        </Button>
                    </div>

                    {/* Symmetric Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl pb-16">
                        {stats.map((stat, i) => (
                            <div key={i} className="glass-morphism p-6 rounded-2xl border-white/10 flex flex-col items-center text-center">
                                <div className="text-accent-light mb-3">{stat.icon}</div>
                                <div className="text-3xl font-bold font-heading mb-1">{stat.value}</div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Recognition Bar Placeholder */}
                    <div className="pt-12 border-t border-white/10 flex flex-wrap justify-center gap-12 opacity-80 mt-4">
                        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 border border-white/5">
                                <Landmark size={20} />
                            </div>
                            <div className="text-left">
                                <span className="text-[9px] uppercase font-bold text-slate-500 block">Recognized By</span>
                                <span className="text-xs font-bold text-slate-200">Ministry of Youth Affairs</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 border border-white/5">
                                <Globe size={20} />
                            </div>
                            <div className="text-left">
                                <span className="text-[9px] uppercase font-bold text-slate-500 block">Affiliated To</span>
                                <span className="text-xs font-bold text-slate-200">WFIS Germany</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-accent w-8' : 'bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
