"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, GraduationCap, Globe } from 'lucide-react';

const blocks = [
    {
        title: "Character Building",
        desc: "Instilling values of honesty, integrity, and social responsibility from an early age.",
        icon: <Target />,
        color: "bg-blue-500",
    },
    {
        title: "Community Service",
        desc: "Empowering youth to contribute to society through voluntary service and disaster relief.",
        icon: <Heart />,
        color: "bg-red-500",
    },
    {
        title: "Life Skills",
        desc: "Hands-on training in first aid, navigation, leadership, and outdoor survival.",
        icon: <GraduationCap />,
        color: "bg-amber-500",
    },
    {
        title: "Environmental Citizenship",
        desc: "Fostering a deep respect for nature and active participation in sustainability.",
        icon: <Globe />,
        color: "bg-emerald-500",
    },
];

const WhatWeDo = () => {
    return (
        <section className="section-padding bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                        Beyond the <span className="text-accent">Classroom.</span>
                    </h2>
                    <p className="text-lg text-slate-500">
                        We don't just train students; we build citizens. Our methodology focuses on four core pillars that shape a well-rounded individual.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blocks.map((block, idx) => (
                        <motion.div
                            key={block.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-premium hover:shadow-2xl hover:-translate-y-2 transition-all group"
                        >
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-all", block.color)}>
                                {React.cloneElement(block.icon as React.ReactElement, { size: 28 })}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-primary mb-4">{block.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{block.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Helper inside for simplicity if cn isn't imported correctly in this snippet
function cn(...inputs: any[]) { return inputs.filter(Boolean).join(' '); }

export default WhatWeDo;
