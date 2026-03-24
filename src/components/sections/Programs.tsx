"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/uikit/Button';

const programs = [
    { name: 'Cubs & Bulbuls', age: '6–10 Yrs', desc: 'Focus on play-based learning and civic values.', emoji: '🐯' },
    { name: 'Scouts & Guides', age: '10–17 Yrs', desc: 'Camping, leadership, and the prestigious President Award.', emoji: '⚜️' },
    { name: 'Rovers & Rangers', age: '17–25 Yrs', desc: 'Social responsibility, disaster relief, and mentorship.', emoji: '🦅' },
];

const Programs = () => {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                            Programs for Every <span className="text-accent">Stage.</span>
                        </h2>
                        <p className="text-lg text-slate-500">
                            Structured scouting paths designed to evolve with the student, from primary school to young adulthood.
                        </p>
                    </div>
                    <Button variant="outline">View All Sections</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((prog, idx) => (
                        <motion.div
                            key={prog.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-slate-50 rounded-[2rem] overflow-hidden p-8 hover:bg-primary transition-colors duration-500"
                        >
                            <div className="relative z-10">
                                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 origin-left">{prog.emoji}</div>
                                <div className="text-accent font-bold text-xs tracking-widest uppercase mb-2 group-hover:text-accent-light">{prog.age}</div>
                                <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-white transition-colors">{prog.name}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">{prog.desc}</p>
                                <Link href="#" className="flex items-center gap-2 text-primary font-bold text-sm group-hover:text-white transition-colors">
                                    Learn More <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                                </Link>
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/50 rounded-full group-hover:bg-white/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import Link from 'next/link';
export default Programs;
