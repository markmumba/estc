'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function CeoSpotlight() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSignatureVisible, setIsSignatureVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Delay signature animation
                    setTimeout(() => setIsSignatureVisible(true), 600);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Column - Background & Portrait */}
                <div className="bg-teal-500 bg-opacity-15 flex items-center justify-center p-8 lg:p-16">
                    <div className="text-center lg:text-left">
                        {/* Portrait */}
                        <div
                            className={`mx-auto lg:mx-0 mb-8 transition-all duration-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                        >
                            <div className="relative">
                                <div className="w-40 h-40 md:w-50 md:h-50 lg:w-75 lg:h-75 rounded-full overflow-hidden border-6 border-white shadow-lg mx-auto lg:mx-0">
                                    <Image
                                        src="/ceo.jpeg"
                                        alt="Jane Mwangi, PhD - CEO & Founder of ESTC"
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback to placeholder if image doesn't exist
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.innerHTML = `
                                                <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                                    <svg class="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                            `;
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Name & Title */}
                        <div
                            className={`transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                        >
                            <h3 className="font-montserrat font-semibold text-gray-800 text-xl lg:text-2xl mb-2">
                                Jane Mwangi, PhD
                            </h3>
                            <p className="font-source-sans italic text-gray-600 text-base lg:text-lg">
                                CEO & Founder
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="bg-white flex items-center p-8 lg:p-16">
                    <div
                        className={`max-w-2xl transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    >
                        {/* Heading */}
                        <h2 className="font-montserrat font-bold text-gray-800 mb-4 text-2xl lg:text-4xl">
                            A Message from Our CEO
                        </h2>

                        {/* Subheading */}
                        <p className="font-source-sans italic text-gray-600 mb-8 text-lg lg:text-xl">
                            Driving Excellence in Corporate Learning Since 2005
                        </p>

                        {/* Message Text */}
                        <div className="font-source-sans text-gray-700 leading-relaxed space-y-4 mb-8">
                            <p>
                                ESTC was born from a simple yet powerful belief: that every organization deserves access to world-class training that drives real, measurable results. In 2005, I founded this company with a vision to transform how businesses in Eastern Africa approach learning and development.
                            </p>
                            <p>
                                What started as a small consultancy has grown into a trusted partner for over 500 organizations across the region. Our success isn't measured by the number of training sessions we deliver, but by the lasting impact we create in the careers and organizations we serve.
                            </p>
                            <p>
                                I'm particularly proud of our milestone in 2020, when we successfully transitioned 95% of our programs to hybrid delivery models, ensuring our clients' learning never stopped despite global challenges. This adaptability and commitment to excellence defines who we are.
                            </p>
                            <p>
                                As we look to the future, our promise remains unwavering: to continue delivering innovative, tailored learning solutions that empower organizations to thrive in an ever-evolving business landscape. Your success is our success, and we're committed to being your partner every step of the way.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className={`mb-8 transition-all duration-800 ${isSignatureVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <svg
                                className="w-32 h-12 text-red-500"
                                viewBox="0 0 200 60"
                                fill="none"
                            >
                                <path
                                    d="M20 40 Q30 20 40 40 T60 40 Q70 20 80 40 T100 40 Q110 20 120 40 T140 40 Q150 20 160 40 T180 40"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className={`transition-all duration-800 ${isSignatureVisible ? 'stroke-dasharray-200 stroke-dashoffset-0' : 'stroke-dasharray-200 stroke-dashoffset-200'}`}
                                />
                                <text x="20" y="20" className="text-sm font-source-sans font-medium fill-current">
                                    Jane Mwangi
                                </text>
                            </svg>
                        </div>

                        {/* CTA */}
                        <button className="group border-2 border-teal-500 text-teal-500 px-8 py-3 rounded-lg font-source-sans font-semibold text-lg hover:bg-teal-500 hover:bg-opacity-10 hover:border-red-500 hover:text-red-500 transition-all duration-150">
                            Read Full Bio
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .stroke-dasharray-200 {
                    stroke-dasharray: 200;
                }
                .stroke-dashoffset-200 {
                    stroke-dashoffset: 200;
                }
                .stroke-dashoffset-0 {
                    stroke-dashoffset: 0;
                }
            `}</style>
        </section>
    );
} 