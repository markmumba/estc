'use client';

import { useEffect, useState, useRef } from 'react';

interface Value {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const values: Value[] = [
    {
        title: "Integrity",
        description: "We uphold the highest ethical standards in every engagement.",
        color: "teal",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        title: "Collaboration",
        description: "Partnering with clients to co-create impactful learning experiences.",
        color: "red",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        title: "Innovation",
        description: "Continuously evolving our programs with the latest insights and technologies.",
        color: "yellow-orange",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Impact",
        description: "Measuring outcomes to ensure real, measurable business results.",
        color: "teal",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    }
];

const getColorClasses = (color: string) => {
    switch (color) {
        case 'teal':
            return 'bg-teal-500 text-white';
        case 'red':
            return 'bg-red-500 text-white';
        case 'yellow-orange':
            return 'bg-yellow-orange text-white';
        default:
            return 'bg-teal-500 text-white';
    }
};

export default function CoreValues() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleValues, setVisibleValues] = useState<number[]>([]);
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

    useEffect(() => {
        if (!isVisible) return;

        // Animate values sequentially
        values.forEach((_, index) => {
            setTimeout(() => {
                setVisibleValues(prev => [...prev, index]);
            }, index * 100);
        });
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="bg-light-gray py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-montserrat font-bold text-gray-800 mb-4 text-2xl md:text-3xl lg:text-4xl">
                        Our Core Values
                    </h2>
                    <p className="font-source-sans text-gray-600 text-lg max-w-3xl mx-auto">
                        <em>Driven by principles that foster excellence, collaboration, and innovation.</em>
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-soft p-6 transition-all duration-500 hover:shadow-medium hover:-translate-y-1 ${visibleValues.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 ${getColorClasses(value.color)} rounded-full flex items-center justify-center mb-6 transition-all duration-800 ${visibleValues.includes(index) ? 'scale-100' : 'scale-0'}`}>
                                {value.icon}
                            </div>

                            {/* Title */}
                            <h3 className={`font-montserrat font-semibold text-gray-800 text-lg mb-3 transition-all duration-500 delay-100 ${visibleValues.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                {value.title}
                            </h3>

                            {/* Description */}
                            <p className={`font-source-sans text-gray-600 text-sm leading-relaxed transition-all duration-500 delay-200 ${visibleValues.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .shadow-soft {
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                }
                .shadow-medium {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </section>
    );
} 