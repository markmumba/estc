'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function CoursesHero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Simulate background image load
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        // Trigger animations after load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, [isLoaded]);

    const scrollToCourseGrid = () => {
        const courseGridSection = document.querySelector('.course-grid-section');
        if (courseGridSection) {
            courseGridSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: 'url(/images/courses-hero-bg.jpg)',
                    backgroundPosition: 'center center'
                }}
            >
                {/* Fallback background pattern if image fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90" />
            </div>

            {/* Teal Gradient Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 from-70% to-transparent opacity-70"
                style={{
                    background: 'linear-gradient(90deg, rgba(110,199,192,0.7) 0%, rgba(110,199,192,0.4) 50%, rgba(110,199,192,0) 100%)'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-white">
                {/* Breadcrumb */}
                <nav className={`mb-6 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <ol className="flex items-center space-x-2 text-sm md:text-base">
                        <li>
                            <Link
                                href="/"
                                className="text-gray-200 hover:text-white transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="text-gray-400">/</li>
                        <li className="text-gray-200 font-medium">Courses</li>
                    </ol>
                </nav>

                {/* Main Content */}
                <div className="text-left md:text-left lg:text-left">
                    {/* Page Title */}
                    <h1 className={`font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Our Training Courses
                    </h1>

                    {/* Intro Blurb */}
                    <p className={`font-source-sans text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed transition-all duration-500 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <em>Discover our comprehensive suite of corporate training programs—covering Leadership, ICT, HR, Finance, and more.</em>
                    </p>

                    {/* CTAs */}
                    <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        {/* Primary CTA - Scroll to Course Grid */}
                        <button
                            onClick={scrollToCourseGrid}
                            className="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 bg-teal-500 text-white font-montserrat font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                        >
                            Build Your Learning Path
                        </button>

                        {/* Secondary CTA - Download PDF */}
                        <a
                            href="/TRAINING CATALOGUE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 border-2 border-red-500 text-red-500 font-montserrat font-semibold rounded-lg bg-transparent hover:text-white hover:bg-red-500 hover:bg-opacity-10 transition-all duration-300 whitespace-nowrap"
                        >
                            Download Full Catalog (PDF)
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Prompt */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="animate-bounce">
                    <svg
                        className="w-8 h-8 text-yellow-orange"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>

            {/* Mobile Responsive Adjustments */}
            <style jsx>{`
                @media (max-width: 768px) {
                    section {
                        min-height: 40vh;
                    }
                }
                
                @media (max-width: 1024px) and (min-width: 769px) {
                    section {
                        min-height: 50vh;
                    }
                }

                .animate-bounce {
                    animation: bounce 1.2s infinite;
                }

                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-6px);
                    }
                    60% {
                        transform: translateY(-3px);
                    }
                }
            `}</style>
        </section>
    );
} 