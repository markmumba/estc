'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../shared/navbar';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-image.jpg"
                    alt="Dynamic corporate training session"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Semi-transparent teal overlay */}
                <div
                    className="absolute inset-0 bg-teal-500"
                    style={{ backgroundColor: 'rgba(110, 199, 192, 0.6)' }}
                />
            </div>

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                {/* Main Headline */}
                <h1
                    className={`font-montserrat font-extrabold text-white mb-6 leading-tight ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                    style={{
                        fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                        animationDelay: '0s'
                    }}
                >
                    Empower Your Team with Tailored Corporate Training
                </h1>

                {/* Sub-headline */}
                <p
                    className={`font-source-sans text-light-gray mb-8 max-w-3xl mx-auto leading-relaxed ${isLoaded ? 'animate-fade-in' : 'opacity-0'
                        }`}
                    style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        animationDelay: '0.3s'
                    }}
                >
                    Custom programs in Leadership, ICT, HR & more—designed to drive real impact.
                </p>

                {/* CTA Buttons */}
                <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isLoaded ? 'animate-scale-in' : 'opacity-0'
                        }`}
                    style={{ animationDelay: '0.6s' }}
                >
                    {/* Primary CTA */}
                    <button
                        className="bg-teal-500 text-white px-8 py-4 rounded-lg font-source-sans font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-150 w-full sm:w-auto"
                        style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}
                    >
                        Build Your Learning Path
                    </button>

                    {/* Secondary CTA */}
                    <button
                        className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg font-source-sans font-semibold text-lg hover:bg-red-500 hover:text-white hover:bg-opacity-10 transition-all duration-150 w-full sm:w-auto"
                    >
                        View All Courses
                    </button>
                </div>
            </div>

            {/* Scroll Prompt */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div
                    className={`text-yellow-orange animate-bounce-subtle ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ animationDelay: '1s' }}
                >
                    <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                </div>
            </div>
        </section>
    );
} 