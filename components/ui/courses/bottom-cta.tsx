'use client';

import { useState, useEffect } from 'react';

export default function BottomCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const section = document.querySelector('.bottom-cta-section');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bottom-cta-section bg-gray-100 py-16 md:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
                <div className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    {/* Heading */}
                    <h2 className="font-montserrat font-semibold text-gray-800 mb-6 text-2xl md:text-3xl lg:text-4xl">
                        Need a Custom Solution?
                    </h2>

                    {/* Subtext */}
                    <p className="font-source-sans text-gray-600 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Tell us your exact requirements and we&lsquo;ll craft a bespoke program tailored to your organization&lsquo;s unique needs.
                    </p>

                    {/* CTA Button */}
                    <button className="inline-flex items-center px-7 py-4 bg-red-500 text-white font-montserrat font-semibold rounded-lg transition-all duration-200 hover:bg-red-600 hover:scale-103 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        Request a Quote
                        <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>

                    {/* Additional Info */}
                    <div className="mt-8">
                        <p className="font-source-sans text-gray-500 text-sm">
                            Get a personalized training proposal within 24 hours
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bg-gray-100 {
                    background-color: #F5F5F5;
                }
                
                .scale-103 {
                    transform: scale(1.03);
                }
                
                .shadow-lg {
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                }
            `}</style>
        </section>
    );
} 