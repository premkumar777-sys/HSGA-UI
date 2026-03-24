"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Users, GraduationCap, MapPin } from 'lucide-react';

const stats = [
    { label: 'Districts Covered', value: '33', icon: <MapPin />, suffix: '' },
    { label: 'Affiliated Schools', value: '1,200', icon: <Landmark />, suffix: '+' },
    { label: 'Active Members', value: '85,000', icon: <Users />, suffix: '+' },
    { label: 'Years of Service', value: '75', icon: <GraduationCap />, suffix: ' yrs' },
];

const Stats = () => {
    return (
        <section className="bg-white py-12 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group text-center"
                        >
                            <div className="text-accent mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
                            </div>
                            <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-1">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
