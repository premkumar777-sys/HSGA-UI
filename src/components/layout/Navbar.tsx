"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/uikit/Button';
import { Menu, X, Landmark, Globe, IndianRupee } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#' },
        { name: 'Programs', href: '#' },
        { name: 'Schools', href: '#' },
        { name: 'Resources', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
                    isScrolled ? "glass-morphism py-3" : "bg-transparent py-5"
                )}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                            ⚜️
                        </div>
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-primary tracking-tight text-lg leading-tight uppercase">HSGA Telangana</span>
                            <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Hindustan Scouts & Guides</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex gap-8 text-primary/70 font-semibold text-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-accent transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </div>
                        <div className="h-6 w-px bg-slate-200 mx-2" />
                        <Button size="sm">Join HSGA</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-primary p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 z-[49] bg-white transition-all duration-500 lg:hidden",
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
            )}>
                <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-heading font-bold text-primary hover:text-accent"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="lg" className="w-full mt-4">Join the Movement</Button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
