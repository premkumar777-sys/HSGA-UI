"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/uikit/Button';
import { ArrowRight, ShieldCheck, Award, Users, Landmark } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden hero-gradient">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                        <ShieldCheck size={14} /> Established 1949 · Telangana Unit
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary leading-[1.05] mb-6 text-balance">
                        Building the <span className="text-accent underline decoration-accent/20">Citizens</span> of Tomorrow.
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                        Hindustan Scouts & Guides Association is India's most trusted youth organization.
                        We empower students with character, leadership, and life skills across all 33 districts of Telangana.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Button size="lg" className="w-full sm:w-auto group">
                            Register Your School <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Learn Our Story
                        </Button>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-200 flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Landmark size={20} />
                            </div>
                            <div className="text-sm font-bold text-primary">NEP 2020<br /><span className="text-slate-500 font-medium">Credits Aligned</span></div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                <Award size={20} />
                            </div>
                            <div className="text-sm font-bold text-primary">75+ Years<br /><span className="text-slate-500 font-medium">Legacy of Service</span></div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center"
                >
                    {/* Main Visual Placeholder / Image Frame */}
                    <div className="relative w-full aspect-square lg:aspect-auto lg:h-full max-w-[500px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply transition-opacity group-hover:opacity-0" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                            <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mb-6 text-4xl">
                                🏕️
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-primary mb-2">Be Prepared</h3>
                            <p className="text-slate-500 text-sm">Join the largest scouting movement in the state.</p>
                        </div>
                        {/* Real image would be here */}
                        <div className="absolute inset-0 bg-slate-200 animate-pulse pointer-events-none" />
                    </div>

                    {/* Floating Metric Card */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-premium border border-slate-100 hidden md:block"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl">
                                <Users size={24} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary font-heading">85K+</div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Active Members</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
