'use client';

import { useState, useEffect } from 'react';

interface Step {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const steps: Step[] = [
    {
        id: 1,
        title: "Choose Your Focus",
        description: "Select from Leadership, ICT, HR, or specialized areas.",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Select Format & Duration",
        description: "Pick in-person, virtual, or hybrid delivery options.",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Get Your Plan & Quote",
        description: "Receive a customized training proposal and pricing.",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
        )
    }
];

export default function LearningPathTeaser() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        // Animate steps in sequence
        const timer = setTimeout(() => {
            setActiveStep(1);
        }, 300);

        const timer2 = setTimeout(() => {
            setActiveStep(2);
        }, 600);

        const timer3 = setTimeout(() => {
            setActiveStep(3);
        }, 900);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className={`font-montserrat font-bold text-gray-800 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
                    >
                        Create Your Custom Training in 3 Simple Steps
                    </h2>
                </div>

                {/* Progress Bar Container */}
                <div className="relative mb-12">
                    {/* Background Teal Block */}
                    <div
                        className="absolute inset-0 bg-teal-500 opacity-5 rounded-2xl"
                        style={{
                            top: '-20px',
                            bottom: '-20px',
                            left: '-20px',
                            right: '-20px'
                        }}
                    />

                    {/* Progress Bar */}
                    <div className="relative flex items-center justify-between px-8 py-12">
                        {/* Progress Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-500 transform -translate-y-1/2 z-0" />

                        {/* Steps */}
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="relative z-10 flex flex-col items-center text-center max-w-xs"
                            >
                                {/* Step Circle */}
                                <div
                                    className={`w-16 h-16 rounded-full border-4 border-red-500 bg-white flex items-center justify-center mb-4 transition-all duration-500 ${activeStep >= step.id
                                            ? 'scale-100 shadow-lg'
                                            : 'scale-80'
                                        } hover:border-yellow-orange hover:shadow-yellow-orange/30 transition-all duration-300`}
                                >
                                    <span className="font-montserrat font-bold text-red-500 text-lg">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Step Icon */}
                                <div className="text-gray-600 mb-3 transition-all duration-300">
                                    {step.icon}
                                </div>

                                {/* Step Title */}
                                <h3 className="font-montserrat font-semibold text-gray-800 mb-2 text-lg leading-tight">
                                    {step.title}
                                </h3>

                                {/* Step Description */}
                                <p className="font-source-sans text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button
                        className={`bg-teal-500 text-white px-8 py-4 rounded-lg font-source-sans font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-subtle ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{
                            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                            animationDelay: '1.2s'
                        }}
                    >
                        Start Building Now
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-subtle {
                    0%, 100% { 
                        transform: scale(1);
                        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                    }
                    50% { 
                        transform: scale(1.02);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    }
                }
                
                .animate-pulse-subtle {
                    animation: pulse-subtle 6s ease-in-out infinite;
                }
                
                .scale-80 {
                    transform: scale(0.8);
                }
                
                .scale-100 {
                    transform: scale(1);
                }
            `}</style>
        </section>
    );
}