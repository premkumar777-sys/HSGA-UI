import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Programs from "@/components/sections/Programs";
import Testimonials from "@/components/sections/Testimonials";
import { Button } from "@/components/uikit/Button";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <Stats />
            <WhatWeDo />
            <Programs />
            <Testimonials />

            {/* Trust Builder / Call to Action Section */}
            <section className="section-padding bg-primary text-white text-center relative overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Ready to Transform Your School?</h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                        Join over 1,200 schools building tomorrow's leaders through HSGA Telangana. Start the affiliation process today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="px-12 bg-white text-primary hover:bg-slate-100">
                            Affiliate My School
                        </Button>
                        <Button variant="outline" size="lg" className="px-12 border-white/20 hover:bg-white/10">
                            Talk to an Official
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
