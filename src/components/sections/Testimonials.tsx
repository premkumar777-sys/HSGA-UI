"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Joining HSGA was the single best co-curricular decision our school made. Our students' discipline and confidence improved dramatically.",
        author: "Mrs. Padma Reddy",
        role: "Principal, Saraswati Public School",
    },
    {
        quote: "The NEP 2020 credit integration makes HSGA a strategic partner for any modern school. Our students now have government-recognized achievements.",
        author: "Mr. Ravi Shankar",
        role: "Headmaster, Zilla Parishad High School",
    },
    {
        quote: "Three of our students received the Rajya Puraskar this year. HSGA gave them leadership skills no classroom could provide.",
        author: "Sr. Mary Francis",
        role: "Director, Holy Cross Convent",
    },
];

const Testimonials = () => {
    return (
        <section className="section-padding bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-slate-200 flex-1" />
                    <h2 className="text-2xl font-heading font-bold text-primary px-4">Voices of Partner Schools</h2>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
                        >
                            <Quote className="absolute top-4 right-4 text-accent/10" size={40} />
                            <div className="text-accent mb-4 flex gap-1">
                                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                            </div>
                            <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.quote}"</p>
                            <div>
                                <div className="font-bold text-primary">{t.author}</div>
                                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
