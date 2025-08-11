'use client';

import { useEffect, useState, useRef } from 'react';

interface Milestone {
    year: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
}

const milestones: Milestone[] = [
    {
        year: "2016",
        title: "The Beginning",
        description: "Started with a simple vision: to make corporate training more accessible and impactful for organizations across the region.",
        color: "text-teal-600",
        bgColor: "bg-teal-50",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        year: "2017",
        title: "First Major Success",
        description: "Reached our first milestone of serving over 50 organizations, proving that our approach to training was making a real difference.",
        color: "text-yellow-orange",
        bgColor: "bg-yellow-50",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        year: "2018",
        title: "Expanding Horizons",
        description: "Began offering specialized programs in leadership, ICT, and HR management, responding to the evolving needs of modern organizations.",
        color: "text-red-500",
        bgColor: "bg-red-50",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        )
    },
    {
        year: "2020",
        title: "Adapting to Change",
        description: "Successfully navigated global challenges by developing innovative hybrid learning solutions that kept organizations moving forward.",
        color: "text-teal-600",
        bgColor: "bg-teal-50",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        year: "2022",
        title: "Growing Stronger",
        description: "Celebrated serving hundreds of organizations and thousands of professionals, becoming a trusted name in corporate training.",
        color: "text-yellow-orange",
        bgColor: "bg-yellow-50",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        year: "2024",
        title: "Looking Forward",
        description: "Continuing to innovate and expand our services, ready to meet the future challenges of corporate learning and development.",
        color: "text-red-500",
        bgColor: "bg-red-50",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        )
    }
];

export default function OurStory() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
    const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        // Animate milestones sequentially with staggered timing
        milestones.forEach((_, index) => {
            setTimeout(() => {
                setVisibleMilestones(prev => [...prev, index]);
            }, index * 300);
        });
    }, [isVisible]);

    return (
        <section id="our-story" ref={sectionRef} className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-20 blur-3xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-orange/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className={`inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                        Our Journey
                    </div>
                    <h2 className={`font-montserrat font-bold text-gray-800 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                        A Decade of Growth & Innovation
                    </h2>
                    <p className={`font-source-sans text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        From humble beginnings to becoming a trusted partner in corporate training across the region.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Desktop Timeline */}
                    <div className="hidden lg:block">
                        <div className="relative overflow-x-auto pb-8">
                            {/* Timeline Line */}
                            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2">
                                <div
                                    className={`h-full bg-gradient-to-r from-teal-500 via-yellow-orange to-red-500 transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                                />
                            </div>

                            {/* Milestones */}
                            <div className="flex justify-center items-center relative gap-8 min-w-max px-8">
                                {milestones.map((milestone, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex-shrink-0 transition-all duration-700 ${visibleMilestones.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                                        style={{ animationDelay: `${index * 200}ms` }}
                                        onMouseEnter={() => setActiveMilestone(index)}
                                        onMouseLeave={() => setActiveMilestone(null)}
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                            <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${activeMilestone === index ? 'scale-125' : 'scale-100'}`}
                                                style={{ backgroundColor: milestone.color.replace('text-', '') === 'teal-600' ? '#0891b2' : milestone.color.replace('text-', '') === 'yellow-orange' ? '#ffb300' : '#ef4444' }} />
                                        </div>

                                        {/* Milestone Card */}
                                        <div className={`w-72 ${index % 2 === 0 ? 'mb-20' : 'mt-20'}`}>
                                            <div className={`${milestone.bgColor} rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${activeMilestone === index ? 'ring-2 ring-teal-500 ring-opacity-50' : ''}`}>
                                                {/* Icon */}
                                                <div className={`w-14 h-14 ${milestone.bgColor} rounded-2xl flex items-center justify-center mb-4 ${milestone.color} transition-all duration-300 ${activeMilestone === index ? 'scale-110' : ''}`}>
                                                    {milestone.icon}
                                                </div>

                                                {/* Date */}
                                                <div className={`font-montserrat font-bold ${milestone.color} text-xl mb-3 transition-all duration-300`}>
                                                    {milestone.year}
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-montserrat font-bold text-gray-800 text-lg mb-3 leading-tight">
                                                    {milestone.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="font-source-sans text-gray-600 text-sm leading-relaxed">
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
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200">
                                <div
                                    className={`w-full bg-gradient-to-b from-teal-500 via-yellow-orange to-red-500 transition-all duration-1000 ease-out ${isVisible ? 'h-full' : 'h-0'}`}
                                />
                            </div>

                            {/* Milestones */}
                            <div className="space-y-12 ml-16">
                                {milestones.map((milestone, index) => (
                                    <div
                                        key={index}
                                        className={`relative transition-all duration-700 ${visibleMilestones.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                        style={{ animationDelay: `${index * 200}ms` }}
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-12 top-6 transform -translate-x-1/2 z-20">
                                            <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                                                style={{ backgroundColor: milestone.color.replace('text-', '') === 'teal-600' ? '#0891b2' : milestone.color.replace('text-', '') === 'yellow-orange' ? '#ffb300' : '#ef4444' }} />
                                        </div>

                                        {/* Milestone Card */}
                                        <div className={`${milestone.bgColor} rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl`}>
                                            {/* Icon */}
                                            <div className={`w-12 h-12 ${milestone.bgColor} rounded-xl flex items-center justify-center mb-4 ${milestone.color}`}>
                                                {milestone.icon}
                                            </div>

                                            {/* Date */}
                                            <div className={`font-montserrat font-bold ${milestone.color} text-xl mb-2`}>
                                                {milestone.year}
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-montserrat font-bold text-gray-800 text-lg mb-3 leading-tight">
                                                {milestone.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="font-source-sans text-gray-600 text-sm leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-20 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="font-source-sans text-gray-600 mb-6 text-lg">
                        Ready to be part of our next chapter?
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-teal-500 text-white px-8 py-4 rounded-xl font-montserrat font-semibold text-lg hover:bg-teal-600 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Start Your Journey
                    </a>
                </div>
            </div>
        </section>
    );
} 