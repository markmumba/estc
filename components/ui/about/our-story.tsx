'use client';

import { useEffect, useState, useRef } from 'react';

interface Milestone {
    year: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const milestones: Milestone[] = [
    {
        year: "2005",
        title: "ESTC Founded in Nairobi",
        description: "Started as a small consultancy with a vision to transform corporate learning in Eastern Africa.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        year: "2008",
        title: "First Regional Training in Kampala",
        description: "Expanded beyond Kenya to serve organizations across the region with our first international program.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        year: "2012",
        title: "Launched ICT Curriculum",
        description: "Introduced comprehensive ICT training programs to meet the growing digital transformation needs.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        year: "2016",
        title: "10,000+ Professionals Trained",
        description: "Reached a major milestone in our mission to empower professionals across the region.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
        )
    },
    {
        year: "2020",
        title: "Digital Learning Platform Goes Live",
        description: "Successfully transitioned 95% of programs to hybrid delivery models during global challenges.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        )
    },
    {
        year: "2024",
        title: "Expanded to 5 Countries",
        description: "Now serving organizations across Kenya, Uganda, Tanzania, Rwanda, and Ethiopia.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

export default function OurStory() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

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

        // Animate timeline line
        const timeline = timelineRef.current;
        if (timeline) {
            timeline.style.strokeDashoffset = '0';
        }

        // Animate milestones sequentially
        milestones.forEach((_, index) => {
            setTimeout(() => {
                setVisibleMilestones(prev => [...prev, index]);
            }, index * 200);
        });
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="bg-white py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-montserrat font-bold text-gray-800 mb-4 text-2xl md:text-3xl lg:text-4xl">
                        Our Journey
                    </h2>
                    <p className="font-source-sans text-gray-600 text-lg max-w-3xl mx-auto">
                        <em>Over 20 years of empowering Eastern African organizations through tailored training.</em>
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Desktop Timeline */}
                    <div className="hidden lg:block">
                        <div className="relative overflow-x-auto pb-8">
                            {/* Timeline Line */}
                            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200">
                                <div
                                    ref={timelineRef}
                                    className="h-full bg-teal-500 transition-all duration-800 ease-out"
                                    style={{
                                        width: '0%',
                                        strokeDasharray: '100%',
                                        strokeDashoffset: '100%'
                                    }}
                                />
                            </div>

                            {/* Milestones */}
                            <div className="flex gap-8 lg:gap-16 xl:gap-24 min-w-max px-8">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="flex-shrink-0 w-64">
                                        <div className="relative">
                                            {/* Timeline Dot */}
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                                                <div className={`w-4 h-4 bg-teal-500 rounded-full transition-all duration-400 ${visibleMilestones.includes(index) ? 'scale-100' : 'scale-0'}`} />
                                            </div>

                                            {/* Milestone Card */}
                                            <div className={`bg-white rounded-lg shadow-soft p-6 border border-gray-100 transition-all duration-500 ${visibleMilestones.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                                {/* Icon */}
                                                <div className="w-16 h-16 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mb-4 text-teal-500">
                                                    {milestone.icon}
                                                </div>

                                                {/* Date */}
                                                <div className={`font-montserrat font-semibold text-red-500 text-lg mb-2 transition-all duration-500 delay-100 ${visibleMilestones.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                                    {milestone.year}
                                                </div>

                                                {/* Title */}
                                                <h3 className={`font-source-sans font-bold text-gray-800 text-lg mb-2 transition-all duration-500 delay-200 ${visibleMilestones.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                                    {milestone.title}
                                                </h3>

                                                {/* Description */}
                                                <p className={`font-source-sans text-gray-600 text-sm leading-relaxed transition-all duration-500 delay-300 ${visibleMilestones.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Scroll Hint */}
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 animate-pulse">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="lg:hidden">
                        <div className="relative">
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2">
                                <div
                                    className="w-full bg-teal-500 transition-all duration-800 ease-out"
                                    style={{
                                        height: isVisible ? '100%' : '0%'
                                    }}
                                />
                            </div>

                            {/* Milestones */}
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className={`relative ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                        {/* Timeline Dot */}
                                        <div className="absolute left-1/2 top-6 transform -translate-x-1/2 z-10">
                                            <div className={`w-4 h-4 bg-teal-500 rounded-full transition-all duration-400 ${visibleMilestones.includes(index) ? 'scale-100' : 'scale-0'}`} />
                                        </div>

                                        {/* Milestone Card */}
                                        <div className={`bg-white rounded-lg shadow-soft p-6 border border-gray-100 transition-all duration-500 ${visibleMilestones.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                                            {/* Icon */}
                                            <div className="w-12 h-12 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mb-4 text-teal-500">
                                                {milestone.icon}
                                            </div>

                                            {/* Date */}
                                            <div className={`font-montserrat font-semibold text-red-500 text-lg mb-2 transition-all duration-500 delay-100 ${visibleMilestones.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                                {milestone.year}
                                            </div>

                                            {/* Title */}
                                            <h3 className={`font-source-sans font-bold text-gray-800 text-lg mb-2 transition-all duration-500 delay-200 ${visibleMilestones.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                                {milestone.title}
                                            </h3>

                                            {/* Description */}
                                            <p className={`font-source-sans text-gray-600 text-sm leading-relaxed transition-all duration-500 delay-300 ${visibleMilestones.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .shadow-soft {
                    box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
                }
            `}</style>
        </section>
    );
} 