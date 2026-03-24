"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t-4 border-accent">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                                ⚜️
                            </div>
                            <span className="font-heading font-extrabold text-white tracking-tight uppercase text-lg">HSGA Telangana</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            India's oldest and most trusted youth movement. Shaping character, courage, and commitment across Telangana since 1949.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-widest">The Movement</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            {['About Us', 'Leadership', 'Programs', 'Training', 'Certification'].map(link => (
                                <li key={link}><Link href="#" className="hover:text-accent transition-colors">{link}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            {['Notifications', 'Download Forms', 'Manuals', 'Gallery', 'Sitemap'].map(link => (
                                <li key={link}><Link href="#" className="hover:text-accent transition-colors">{link}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-widest">Contact Us</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent shrink-0" />
                                <span>State Office: Hyderabad, Telangana State unit.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent shrink-0" />
                                <span>+91 [Phone Number]</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent shrink-0" />
                                <span>contact@hsgatelangana.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
                    <p>© {new Date().getFullYear()} HSGA Telangana. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
