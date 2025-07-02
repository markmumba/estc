'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BuilderPrompt() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        const section = document.querySelector('.builder-prompt-section');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    // Gentle pulse animation for CTA when idle
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setIsHovered(true);
                setTimeout(() => setIsHovered(false), 150);
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section className="builder-prompt-section py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div
                    className={`bg-teal-50 rounded-lg shadow-soft mx-auto transition-all duration-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                    style={{
                        maxWidth: '1000px'
                    }}
                >
                    {/* Content Container */}
                    <div className="text-center">
                        {/* Heading */}
                        <h2 className="font-montserrat font-semibold text-gray-800 mb-4 text-xl md:text-2xl lg:text-3xl">
                            Can't Find Exactly What You Need?
                        </h2>

                        {/* Blurb */}
                        <p className="font-source-sans text-gray-600 mb-8 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                            Build a custom training path tailored to your team's goals and schedule.
                        </p>

                        {/* CTA Button */}
                        <div className="mb-4">
                            <button
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className={`inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-teal-500 text-white font-montserrat font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${isHovered ? 'scale-105 shadow-lg' : 'hover:scale-102 hover:shadow-md'
                                    }`}
                            >
                                Start Your Custom Plan
                                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>

                        {/* Secondary Link */}
                        <div className="hidden md:block">
                            <Link
                                href="/custom-plan-guide"
                                className="inline-flex items-center text-red-500 font-source-sans text-sm hover:text-red-600 transition-colors duration-200 group"
                            >
                                <span className="relative">
                                    Learn How It Works
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
                                </span>
                                <svg className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </div>

                        {/* Mobile Secondary Link */}
                        <div className="md:hidden mt-4">
                            <Link
                                href="/custom-plan-guide"
                                className="text-red-500 font-source-sans text-sm hover:text-red-600 transition-colors duration-200"
                            >
                                Learn How It Works
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .shadow-soft {
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
                }
                
                .shadow-lg {
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                }
                
                .shadow-md {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
                
                .scale-102 {
                    transform: scale(1.02);
                }
                
                .scale-105 {
                    transform: scale(1.05);
                }
                
                .bg-teal-50 {
                    background-color: #F0FCFB;
                }
                
                .builder-prompt-section > div > div {
                    padding: 24px 16px;
                }
                
                @media (min-width: 600px) {
                    .builder-prompt-section > div > div {
                        padding: 24px 32px;
                    }
                }
                
                @media (min-width: 1024px) {
                    .builder-prompt-section > div > div {
                        padding: 32px 48px;
                    }
                }
            `}</style>
        </section>
    );
} 