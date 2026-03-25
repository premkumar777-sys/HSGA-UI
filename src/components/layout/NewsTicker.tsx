"use client";

import React from 'react';
import { motion } from 'framer-motion';

const NewsTicker = () => {
    const news = [
        "Welcome to HSGA Telangana State Unit — India's Most Trusted Youth Organization.",
        "Over 1,200 Schools and 85K+ Members building the Citizens of Tomorrow.",
        "Recognized by Ministry of Youth Affairs & Sports (Govt. of India) and Affiliated with WFIS Germany.",
        "Join 75+ Years of Legacy in Character, Courage, and Commitment.",
    ];

    return (
        <div className="bg-primary-dark text-white py-2 overflow-hidden border-b border-white/5 relative z-[60]">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-12 items-center"
                >
                    {news.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-xs font-bold tracking-wide uppercase">{item}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless infinite loop */}
                    {news.map((item, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-4">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-xs font-bold tracking-wide uppercase">{item}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Tricolor Accent - Subtle Bottom Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] flex">
                <div className="flex-1 bg-[#FF9933]" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#138808]" />
            </div>
        </div>
    );
};

export default NewsTicker;
