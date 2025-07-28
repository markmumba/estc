'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../shared/navbar';
import Link from 'next/link';

export default function AboutHero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative min-h-[70vh] lg:min-h-[70vh] md:min-h-[60vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
                {!imageError ? (
                    <Image
                        src="/about-hero-image.jpg"
                        alt="ESTC training session with engaged participants"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                )}
                {/* Teal gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, rgba(110,199,192,0.7) 0%, rgba(110,199,192,0.2) 100%)'
                    }}
                />
            </div>

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10 text-center lg:text-left px-6 max-w-7xl mx-auto w-full">
                {/* Breadcrumb Navigation */}
                <div
                    className={`mb-6 transition-all duration-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ animationDelay: '0s' }}
                >
                    <nav className="text-light-gray font-source-sans text-sm sm:block hidden">
                        <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">About Us</span>
                    </nav>
                </div>

                {/* Page Title */}
                <h1
                    className={`font-montserrat font-extrabold text-white drop-shadow-lg mb-6 leading-tight transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{
                        fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                        animationDelay: '0.2s',
                        textShadow: '0 4px 12px rgba(0,0,0,0.25)'
                    }}
                >
                    About ESTC
                </h1>

                {/* Tagline */}
                <p
                    className={`font-source-sans italic text-white drop-shadow-md mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed transition-all duration-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        animationDelay: '0.4s',
                        textShadow: '0 2px 8px rgba(0,0,0,0.18)'
                    }}
                >
                    Shaping Corporate Learning in Eastern Africa Since 2005
                </p>

                {/* CTA Buttons */}
                <div
                    className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center transition-all duration-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ animationDelay: '0.6s' }}
                >
                    {/* Primary CTA */}
                    <a
                        href="#ceo-spotlight"
                        className="bg-red-500 text-white px-8 py-4 rounded-lg font-source-sans font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-150 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                        style={{
                            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                            borderRadius: '8px',
                            scrollBehavior: 'smooth'
                        }}
                    >
                        Meet Our CEO
                    </a>

                    {/* Secondary CTA */}
                    <a
                        href="#our-story"
                        className="border-2 border-teal-500 text-teal-700 bg-white/80 px-8 py-4 rounded-lg font-source-sans font-semibold text-lg hover:bg-teal-500 hover:text-white hover:bg-opacity-10 transition-all duration-150 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
                        style={{
                            scrollBehavior: 'smooth'
                        }}
                    >
                        Our Story
                    </a>
                </div>

                <style jsx global>{`
                    html {
                        scroll-behavior: smooth;
                    }
                `}</style>
            </div>

            {/* Scroll Prompt */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div
                    className={`text-yellow-orange animate-bounce-subtle ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ animationDelay: '0.8s' }}
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