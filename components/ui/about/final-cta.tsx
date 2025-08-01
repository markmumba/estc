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
                            <a href="https://wa.me/254720611517" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-montserrat font-semibold rounded-lg shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 whitespace-nowrap gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.379 16.955c-.277.793-.999 1.454-1.867 1.649-.512.121-1.18.175-2.518-.137-2.13-.495-4.255-2.071-5.744-3.982-1.489-1.911-2.072-4.036-1.951-5.516.121-.887.782-1.609 1.575-1.886.193-.067.399-.101.605-.101.975 0 1.793.723 1.793 1.698 0 .975-.818 1.698-1.793 1.698-.194 0-.4-.034-.593-.101-.793-.277-1.454-.999-1.649-1.867-.121-.512-.175-1.18.137-2.518.495-2.13 2.071-4.255 3.982-5.744 1.911-1.489 4.036-2.072 5.516-1.951.887.121 1.609.782 1.886 1.575.067.193.101.399.101.605 0 .975-.723 1.793-1.698 1.793-.975 0-1.698-.818-1.698-1.793 0-.194.034-.4.101-.593.277-.793.999-1.454 1.867-1.649.512-.121 1.18-.175 2.518.137 2.13.495 4.255 2.071 5.744 3.982 1.489 1.911 2.072 4.036 1.951 5.516z"/>
                                </svg>
                                WhatsApp Discovery Call
                            </a>

                            {/* Secondary CTA */}
                            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-500 text-teal-500 font-montserrat font-semibold rounded-lg hover:bg-teal-500 hover:text-white hover:bg-opacity-10 transition-all duration-300 whitespace-nowrap relative overflow-hidden group">
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