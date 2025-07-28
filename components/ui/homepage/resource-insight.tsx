'use client';

import { useState, useEffect } from 'react';

interface Resource {
    id: number;
    title: string;
    description: string;
    type: 'pdf' | 'blog' | 'case-study';
    icon: React.ReactNode;
    ctaText: string;
    ctaUrl: string;
    fileSize?: string;
}

const resources: Resource[] = [
    {
        id: 1,
        title: "Leadership Development Guide",
        description: "Essential strategies for building effective leadership in modern organizations.",
        type: 'pdf',
        fileSize: "461 KB",
        ctaText: "Download PDF",
        ctaUrl: "/Leadership Development Guide.pdf",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "HR Best Practices Report",
        description: "Comprehensive analysis of modern HR management strategies and outcomes.",
        type: 'pdf',
        fileSize: "426 KB",
        ctaText: "Download PDF",
        ctaUrl: "/HR Best Practices Report.pdf",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Training Catalogue",
        description: "Full catalogue of our training programs and workshops for 2024.",
        type: 'pdf',
        fileSize: "980 KB",
        ctaText: "Download PDF",
        ctaUrl: "/TRAINING CATALOGUE.pdf",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
        )
    }
];

const getResourceStyles = (type: string) => {
    switch (type) {
        case 'pdf':
            return {
                iconColor: 'text-red-500',
                ctaStyle: 'bg-red-500 text-white hover:bg-red-600',
                borderStyle: 'border-red-500'
            };
        case 'blog':
            return {
                iconColor: 'text-teal-500',
                ctaStyle: 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-10',
                borderStyle: 'border-teal-500'
            };
        case 'case-study':
            return {
                iconColor: 'text-yellow-orange',
                ctaStyle: 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-10',
                borderStyle: 'border-teal-500'
            };
        default:
            return {
                iconColor: 'text-gray-500',
                ctaStyle: 'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:bg-opacity-10',
                borderStyle: 'border-gray-500'
            };
    }
};

export default function ResourcesInsights() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className={`font-montserrat font-bold text-gray-800 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
                    >
                        Resources & Insights
                    </h2>
                    <p
                        className={`font-source-sans text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}
                    >
                        Dive into our guides, whitepapers, and articles to stay ahead in corporate learning.
                    </p>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => {
                        const styles = getResourceStyles(resource.type);

                        return (
                            <div
                                key={resource.id}
                                className={`bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Icon */}
                                <div className={`${styles.iconColor} mb-4 transition-all duration-400 animate-flip-in`}>
                                    {resource.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-montserrat font-semibold text-gray-800 mb-2 text-lg leading-tight">
                                    {resource.title}
                                </h3>

                                {/* Description */}
                                <p className="font-source-sans text-gray-600 text-sm leading-relaxed mb-4">
                                    {resource.description}
                                </p>

                                {/* File Size (for PDFs) */}
                                {resource.fileSize && (
                                    <p className="font-source-sans text-gray-500 text-xs mb-4">
                                        File size: {resource.fileSize}
                                    </p>
                                )}

                                {/* CTA Button */}
                                <a
                                    href={resource.ctaUrl}
                                    className={`inline-block px-4 py-2 rounded-lg font-source-sans font-medium transition-all duration-200 ${styles.ctaStyle} hover:scale-105`}
                                >
                                    {resource.ctaText}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes flip-in {
                    0% { 
                        transform: rotateY(90deg);
                        opacity: 0;
                    }
                    100% { 
                        transform: rotateY(0deg);
                        opacity: 1;
                    }
                }
                
                .animate-flip-in {
                    animation: flip-in 0.4s ease-out;
                }
            `}</style>
        </section>
    );
}