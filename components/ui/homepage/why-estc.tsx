'use client';

import { useState, useEffect } from 'react';

interface Benefit {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const benefits: Benefit[] = [
    {
        id: 1,
        title: "100% Customized",
        description: "Programs built for your people, not off-the-shelf.",
        color: "text-teal-500",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Expert Faculty",
        description: "30+ trainers with 10+ years' industry experience.",
        color: "text-red-500",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Blended Delivery",
        description: "Online, in-house, or hybrid—your choice.",
        color: "text-yellow-orange",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5l-1 1v2h8v-2l-1-1h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H3V5h18v10z" />
            </svg>
        )
    },
    {
        id: 4,
        title: "Proven ROI",
        description: "Trackable outcomes and post-training support.",
        color: "text-teal-500",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2H6.31l1.04-3.1L7.5 2H2v2h3.5l2.5 7.5H17v2h-6.5l-1.5-4.5H6.31l-1.04 3.1L7.5 14H17l-3.02 7.05c-.3.72-1.01 1.22-1.84 1.22H9z" />
            </svg>
        )
    }
];

export default function WhyEstc() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="bg-gradient-to-br from-yellow-200/90 via-yellow-100/90 to-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className={`font-montserrat font-bold text-gray-800 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
                    >
                        Why Choose ESTC?
                    </h2>
                    <p
                        className={`font-source-sans text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}
                    >
                        We deliver measurable impact through tailored training solutions.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.id}
                            className={`bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Icon */}
                            <div className={`${benefit.color} mb-4 transition-all duration-300 animate-pulse-once`}>
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-montserrat font-semibold text-gray-800 mb-3 text-lg leading-tight">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="font-source-sans text-gray-600 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-once {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                
                .animate-pulse-once {
                    animation: pulse-once 0.8s ease-out;
                }
            `}</style>
        </section>
    );
} 