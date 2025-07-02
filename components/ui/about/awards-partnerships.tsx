'use client';

import { useEffect, useState, useRef } from 'react';

interface Partner {
    name: string;
    logo: React.ReactNode;
}

interface Award {
    title: string;
    year: string;
    issuer: string;
    icon: React.ReactNode;
}

const partners: Partner[] = [
    {
        name: "CIPD East Africa",
        logo: (
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        )
    },
    {
        name: "Business Daily Africa",
        logo: (
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
        )
    },
    {
        name: "ISO Certification",
        logo: (
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        )
    },
    {
        name: "ATD",
        logo: (
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        )
    },
    {
        name: "Regional Training Council",
        logo: (
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
        )
    },
    {
        name: "Digital Skills Initiative",
        logo: (
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    }
];

const awards: Award[] = [
    {
        title: "Training Excellence Award",
        year: "2023",
        issuer: "CIPD East Africa",
        icon: (
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        )
    },
    {
        title: "Top Corporate Learning Provider",
        year: "2022",
        issuer: "Business Daily Africa",
        icon: (
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        )
    },
    {
        title: "ISO 9001:2015 Certification",
        year: "2021",
        issuer: "Quality Management",
        icon: (
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        )
    },
    {
        title: "eLearning Innovator Award",
        year: "2021",
        issuer: "ATD",
        icon: (
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    }
];

export default function AwardsPartnerships() {
    const [isVisible, setIsVisible] = useState(false);
    const [visiblePartners, setVisiblePartners] = useState<number[]>([]);
    const [visibleAwards, setVisibleAwards] = useState<number[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (!isVisible) return;

        // Animate partners sequentially
        partners.forEach((_, index) => {
            setTimeout(() => {
                setVisiblePartners(prev => [...prev, index]);
            }, index * 100);
        });

        // Animate awards with delay
        setTimeout(() => {
            awards.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleAwards(prev => [...prev, index]);
                }, index * 150);
            });
        }, 600);
    }, [isVisible]);

    // Auto-scroll carousel
    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % Math.max(1, partners.length - 5));
        }, 6000);

        return () => clearInterval(interval);
    }, [isVisible]);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % Math.max(1, partners.length - 5));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + Math.max(1, partners.length - 5)) % Math.max(1, partners.length - 5));
    };

    return (
        <section ref={sectionRef} className="bg-white py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-montserrat font-bold text-gray-800 mb-4 text-2xl md:text-3xl lg:text-4xl">
                        Accreditations & Partnerships
                    </h2>
                    <p className="font-source-sans text-gray-600 text-lg max-w-3xl mx-auto">
                        <em>Proudly certified by leading bodies and partnered with top organizations across the region.</em>
                    </p>
                </div>

                {/* Logo Carousel */}
                <div className="mb-16">
                    {/* Divider Lines */}
                    <div className="border-t border-gray-200 mb-8"></div>

                    <div className="relative">
                        {/* Desktop Carousel */}
                        <div className="hidden lg:block">
                            <div className="flex items-center justify-between">
                                {/* Left Arrow */}
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Logos */}
                                <div className="flex gap-12 items-center overflow-hidden" style={{ width: 'calc(6 * 120px + 5 * 48px)' }}>
                                    {partners.map((partner, index) => (
                                        <div
                                            key={index}
                                            className={`flex-shrink-0 w-20 h-20 flex items-center justify-center transition-all duration-500 ${visiblePartners.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                            style={{
                                                transform: `translateX(-${currentSlide * 168}px)`,
                                                filter: 'grayscale(100%)',
                                                opacity: 0.6
                                            }}
                                        >
                                            <div className="hover:scale-105 hover:filter-none hover:opacity-100 transition-all duration-300 cursor-pointer">
                                                {partner.logo}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Arrow */}
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile/Tablet Carousel */}
                        <div className="lg:hidden">
                            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
                                {partners.map((partner, index) => (
                                    <div
                                        key={index}
                                        className={`flex-shrink-0 w-16 h-16 flex items-center justify-center transition-all duration-500 ${visiblePartners.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                        style={{
                                            filter: 'grayscale(100%)',
                                            opacity: 0.6
                                        }}
                                    >
                                        <div className="hover:scale-105 hover:filter-none hover:opacity-100 transition-all duration-300 cursor-pointer">
                                            {partner.logo}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Divider Lines */}
                    <div className="border-t border-gray-200 mt-8"></div>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-soft p-6 border border-gray-100 transition-all duration-600 ${visibleAwards.includes(index) ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-4 rotate-x-15'}`}
                            style={{
                                transform: visibleAwards.includes(index) ? 'rotateX(0deg)' : 'rotateX(15deg)',
                                animationDelay: `${index * 150}ms`
                            }}
                        >
                            <div className="flex items-start gap-4">
                                {/* Award Icon */}
                                <div className="w-16 h-16 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center text-teal-500 flex-shrink-0">
                                    {award.icon}
                                </div>

                                {/* Award Details */}
                                <div className="flex-1">
                                    <h3 className="font-montserrat font-semibold text-gray-800 text-lg mb-1">
                                        {award.title}
                                    </h3>
                                    <p className="font-source-sans text-gray-600 text-sm mb-2">
                                        {award.issuer}
                                    </p>
                                    <span className="font-montserrat font-bold text-red-500 text-lg">
                                        {award.year}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="inline-flex items-center px-8 py-3 border-2 border-teal-500 text-teal-500 font-montserrat font-semibold rounded-lg hover:bg-teal-500 hover:bg-opacity-10 transition-all duration-300">
                        View All Partners & Awards
                    </button>
                </div>
            </div>

            <style jsx>{`
                .shadow-soft {
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .rotate-x-15 {
                    transform: rotateX(15deg);
                }
                .rotate-x-0 {
                    transform: rotateX(0deg);
                }
            `}</style>
        </section>
    );
} 