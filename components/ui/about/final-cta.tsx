'use client';

import { useEffect, useState, useRef } from 'react';

export default function FinalCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
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
        <section ref={sectionRef} className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Diagonal Accent Band */}
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    background: 'linear-gradient(135deg, #E53946 0%, #E53946 30%, transparent 30%, transparent 100%)'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="lg:flex lg:items-center lg:justify-between">
                    {/* Content */}
                    <div className="lg:flex-1 lg:pr-12">
                        {/* Heading */}
                        <h2 className={`font-montserrat font-extrabold text-gray-800 mb-4 text-2xl md:text-3xl lg:text-4xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Join Our Journey
                        </h2>

                        {/* Subheading */}
                        <p className={`font-source-sans text-gray-600 text-lg md:text-xl lg:text-2xl max-w-2xl transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <em>Let&lsquo;s partner to build a learning solution that accelerates your team&lsquo;s success.</em>
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className={`mt-8 lg:mt-0 lg:flex-shrink-0 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="flex flex-col sm:flex-row gap-4 lg:flex-col xl:flex-row">
                            {/* Primary CTA */}
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-montserrat font-semibold rounded-lg shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 whitespace-nowrap">
                                Book a Free Discovery Call
                            </button>

                            {/* Secondary CTA */}
                            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-500 text-teal-500 font-montserrat font-semibold rounded-lg hover:bg-teal-500 hover:bg-opacity-10 transition-all duration-300 whitespace-nowrap relative overflow-hidden group">
                                <span className="relative z-10">Download Our Overview</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .shadow-soft {
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
                .shadow-medium {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }
                .opacity-15 {
                    opacity: 0.15;
                }
            `}</style>
        </section>
    );
} 