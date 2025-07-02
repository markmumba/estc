'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, ChevronDown } from 'lucide-react';

export default function ContactHero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector('.contact-hero-section');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="contact-hero-section relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* Page Title */}
                    <h1 className="font-montserrat font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                        Get in Touch
                    </h1>

                    {/* Intro Text */}
                    <p className="font-source-sans text-teal-100 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
                        Ready to transform your organization's training? Let's discuss how we can help you achieve your learning objectives.
                    </p>

                    {/* Contact Methods */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
                        {/* Phone */}
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-3 bg-white bg-opacity-20 rounded-full">
                                <Phone className="w-6 h-6 text-black " />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-teal-100">Call us</div>
                                <div className="font-semibold">+254 700 000 000</div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-3 bg-white bg-opacity-20 rounded-full">
                                <Mail className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-teal-100">Email us</div>
                                <div className="font-semibold">info@estc.co.ke</div>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-3 bg-white bg-opacity-20 rounded-full">
                                <Clock className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-teal-100">Response time</div>
                                <div className="font-semibold">Within 24 hours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Prompt */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-white opacity-70" />
            </div>
        </section>
    );
} 