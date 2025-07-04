'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
    id: number;
    quote: string;
    clientName: string;
    clientRole: string;
    company: string;
    logo: string;
    caseStudyUrl: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "ESTC's bespoke leadership program doubled our team's productivity in 6 months.",
        clientName: "Jane Mwangi",
        clientRole: "HR Manager",
        company: "Acme Corp",
        logo: "/logo-acme.png",
        caseStudyUrl: "/case-studies/acme-corp"
    },
    {
        id: 2,
        quote: "The ICT strategy training transformed our digital transformation approach completely.",
        clientName: "David Ochieng",
        clientRole: "CTO",
        company: "TechFlow Solutions",
        logo: "/logo-techflow.png",
        caseStudyUrl: "/case-studies/techflow-solutions"
    },
    {
        id: 3,
        quote: "ESTC's HR management program helped us reduce turnover by 40% in one year.",
        clientName: "Sarah Kamau",
        clientRole: "People Director",
        company: "Innovate Kenya",
        logo: "/logo-innovate.png",
        caseStudyUrl: "/case-studies/innovate-kenya"
    },
    {
        id: 4,
        quote: "Their blended delivery approach made training accessible to our entire global team.",
        clientName: "Michael Odhiambo",
        clientRole: "Learning Manager",
        company: "Global Connect",
        logo: "/logo-global.png",
        caseStudyUrl: "/case-studies/global-connect"
    }
];

export default function Testimonials() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
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
                        What Our Clients Say
                    </h2>
                    <p
                        className={`font-source-sans text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}
                    >
                        Hear from organizations who&lsquo;ve transformed through ESTC&lsquo;s training.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Desktop: Show 2 testimonials side-by-side */}
                    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
                        {testimonials.slice(0, 2).map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`bg-light-gray rounded-lg p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <TestimonialContent
                                    testimonial={testimonial}
                                    hoveredLogo={hoveredLogo}
                                    setHoveredLogo={setHoveredLogo}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Tablet & Mobile: Single testimonial with navigation */}
                    <div className="lg:hidden">
                        <div className="relative">
                            {/* Current Testimonial */}
                            <div
                                className={`bg-light-gray rounded-lg p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <TestimonialContent
                                    testimonial={testimonials[currentSlide]}
                                    hoveredLogo={hoveredLogo}
                                    setHoveredLogo={setHoveredLogo}
                                />
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200"
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200"
                                aria-label="Next testimonial"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Slide Indicators */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-red-500 scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes quote-pop {
                    0% { transform: scale(0.95); }
                    100% { transform: scale(1); }
                }
                
                .quote-pop {
                    animation: quote-pop 0.3s ease-out;
                }
            `}</style>
        </section>
    );
}

// Separate component for testimonial content
function TestimonialContent({
    testimonial,
    hoveredLogo,
    setHoveredLogo
}: {
    testimonial: Testimonial;
    hoveredLogo: number | null;
    setHoveredLogo: (id: number | null) => void;
}) {
    return (
        <div className="h-full flex flex-col">
            {/* Quote */}
            <blockquote className="flex-grow">
                <p className="text-gray-800 text-lg italic leading-relaxed mb-6 quote-pop">
                    &ldquo;{testimonial.quote}&rdquo;
                </p>
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {/* Client Logo */}
                    <div
                        className="w-15 h-15 flex items-center justify-center"
                        onMouseEnter={() => setHoveredLogo(testimonial.id)}
                        onMouseLeave={() => setHoveredLogo(null)}
                    >
                        <div className={`w-full h-full bg-gray-300 rounded flex items-center justify-center transition-all duration-200 ${hoveredLogo === testimonial.id ? 'filter-none' : 'filter grayscale'
                            }`}>
                            <span className="text-gray-500 font-source-sans text-sm font-medium">
                                {testimonial.company}
                            </span>
                        </div>
                    </div>

                    {/* Client Details */}
                    <div>
                        <p className="font-montserrat font-semibold text-gray-700">
                            {testimonial.clientName}
                        </p>
                        <p className="font-source-sans text-gray-600 text-sm">
                            {testimonial.clientRole}, {testimonial.company}
                        </p>
                    </div>
                </div>

                {/* Case Study Link */}
                <a
                    href={testimonial.caseStudyUrl}
                    className="border border-red-500 text-red-500 px-4 py-2 rounded-lg font-source-sans font-medium hover:bg-red-500 hover:bg-opacity-10 transition-all duration-200 text-sm whitespace-nowrap"
                >
                    Read Case Study
                </a>
            </div>
        </div>
    );
}