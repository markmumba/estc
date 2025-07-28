'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../shared/navbar';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();
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
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/70 via-teal-600/60 to-blue-600/50" />
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
            </div>

            {/* Navigation */}
            <Navbar />

            {/* Floating decorative elements */}
            <div className="absolute inset-0 z-5 pointer-events-none">
                <div className={`absolute top-20 left-10 w-4 h-4 bg-yellow-orange rounded-full opacity-60 ${isLoaded ? 'animate-float' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }} />
                <div className={`absolute top-40 right-20 w-6 h-6 bg-red-500 rounded-full opacity-40 ${isLoaded ? 'animate-float-reverse' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />
                <div className={`absolute bottom-40 left-20 w-3 h-3 bg-teal-300 rounded-full opacity-50 ${isLoaded ? 'animate-float' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
              

                {/* Main Headline */}
                <h1
                    className={`font-montserrat font-extrabold text-white mb-8 leading-tight ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{
                        fontSize: 'clamp(2rem, 6vw, 4rem)',
                        animationDelay: '0.2s',
                        textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                    }}
                >
                    <span className="block">Empower Your Team with</span>
                    <span className="block bg-gradient-to-r from-yellow-orange via-white to-yellow-orange bg-clip-text text-transparent">
                        Tailored Corporate Training
                    </span>
                </h1>

                {/* Sub-headline */}
                <p
                    className={`font-source-sans text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{
                        fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
                        animationDelay: '0.4s',
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                >
                    Custom programs in <span className="font-semibold text-yellow-orange">Leadership</span>, <span className="font-semibold text-yellow-orange">ICT</span>, <span className="font-semibold text-yellow-orange">HR</span> & more—designed to drive real impact and measurable results.
                </p>

                {/* Feature highlights */}
                <div
                    className={`flex flex-wrap justify-center gap-6 mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: '0.6s' }}
                >
                    <div className="flex items-center gap-2 text-white/90">
                        <svg className="w-5 h-5 text-yellow-orange" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-source-sans font-medium">Certified Programs</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                        <svg className="w-5 h-5 text-yellow-orange" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-source-sans font-medium">Expert Instructors</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                        <svg className="w-5 h-5 text-yellow-orange" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-source-sans font-medium">Flexible Learning</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div
                    className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: '0.8s' }}
                >
                    {/* Primary CTA */}
                    <button onClick={() => router.push('/courses')} className="group relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-5 rounded-xl font-source-sans font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-orange to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        <span className="relative flex items-center gap-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            Build Your Learning Path
                        </span>
                    </button>

              
                </div>

                {/* Trust indicators */}
                <div
                    className={`mt-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: '1s' }}
                >
                    <p className="text-white/70 text-sm mb-4 font-source-sans">Trusted by leading organizations</p>
                    <div className="flex justify-center items-center gap-8 opacity-60">
                        <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">COMPANY</span>
                        </div>
                        <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">COMPANY</span>
                        </div>
                        <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">COMPANY</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Scroll Prompt */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div
                    className={`text-white/80 hover:text-yellow-orange transition-colors duration-300 cursor-pointer ${isLoaded ? 'animate-bounce-subtle' : 'opacity-0'}`}
                    style={{ animationDelay: '1.2s' }}
                >
                    <div className="text-center mb-2">
                        <span className="text-xs font-source-sans font-medium">Scroll to explore</span>
                    </div>
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