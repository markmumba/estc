'use client';

import { useEffect, useState, useRef } from 'react';

export default function MissionVision() {
    const [isMissionVisible, setIsMissionVisible] = useState(false);
    const [isVisionVisible, setIsVisionVisible] = useState(false);
    const missionRef = useRef<HTMLDivElement>(null);
    const visionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const missionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsMissionVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        const visionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisionVisible(true), 200);
                }
            },
            { threshold: 0.5 }
        );

        if (missionRef.current) {
            missionObserver.observe(missionRef.current);
        }
        if (visionRef.current) {
            visionObserver.observe(visionRef.current);
        }

        return () => {
            missionObserver.disconnect();
            visionObserver.disconnect();
        };
    }, []);

    return (
        <section className="py-16 md:py-20 lg:py-25 px-4 md:px-20 lg:px-30">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-15 relative">
                    {/* Mission Column */}
                    <div ref={missionRef} className="text-center lg:text-left">
                        {/* Mission Icon */}
                        <div
                            className={`mb-6 transition-all duration-500 ease-out ${isMissionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`}
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto lg:mx-0">
                                <svg className="w-full h-full text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                                </svg>
                            </div>
                        </div>

                        {/* Mission Heading */}
                        <h2
                            className={`font-montserrat font-bold text-gray-800 mb-6 transition-all duration-600 ease-out ${isMissionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                            style={{
                                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                                lineHeight: '1.2',
                                animationDelay: '0.1s'
                            }}
                        >
                            Our Mission
                        </h2>

                        {/* Mission Text */}
                        <p
                            className={`font-source-sans text-gray-600 leading-relaxed transition-all duration-600 ${isMissionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
                            style={{
                                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                                lineHeight: '1.5',
                                animationDelay: '0.2s'
                            }}
                        >
                            <em>&ldquo;To empower organizations across Eastern Africa with tailored, high-impact training solutions that unlock employee potential and drive measurable business results.&rdquo;</em>
                        </p>
                    </div>

                    {/* Vertical Divider (Desktop Only) */}
                    <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gray-200 transform -translate-x-1/2" />

                    {/* Vision Column */}
                    <div ref={visionRef} className="text-center lg:text-left mt-16 lg:mt-0">
                        {/* Vision Icon */}
                        <div
                            className={`mb-6 transition-all duration-500 ease-out ${isVisionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`}
                            style={{ animationDelay: '0.2s' }}
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto lg:mx-0">
                                <svg className="w-full h-full text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3 3 7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Vision Heading */}
                        <h2
                            className={`font-montserrat font-bold text-gray-800 mb-6 transition-all duration-600 ease-out ${isVisionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                            style={{
                                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                                lineHeight: '1.2',
                                animationDelay: '0.3s'
                            }}
                        >
                            Our Vision
                        </h2>

                        {/* Vision Text */}
                        <p
                            className={`font-source-sans text-gray-600 leading-relaxed transition-all duration-600 ${isVisionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
                            style={{
                                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                                lineHeight: '1.5',
                                animationDelay: '0.4s'
                            }}
                        >
                            <em>&ldquo;To be the region&lsquo;s most trusted partner in corporate learning—innovating continuously to anticipate tomorrow&lsquo;s skill needs and foster transformational growth.&rdquo;</em>
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .py-25 {
                    padding-top: 100px;
                    padding-bottom: 100px;
                }
                .px-30 {
                    padding-left: 120px;
                    padding-right: 120px;
                }
                .gap-15 {
                    gap: 60px;
                }
                .scale-80 {
                    transform: scale(0.8);
                }
                .scale-100 {
                    transform: scale(1);
                }
                .translate-y-1 {
                    transform: translateY(5px);
                }
                .translate-y-2 {
                    transform: translateY(10px);
                }
                
                @media (max-width: 1023px) {
                    .py-25 {
                        padding-top: 80px;
                        padding-bottom: 80px;
                    }
                    .px-30 {
                        padding-left: 80px;
                        padding-right: 80px;
                    }
                }
                
                @media (max-width: 599px) {
                    .py-25 {
                        padding-top: 60px;
                        padding-bottom: 60px;
                    }
                    .px-30 {
                        padding-left: 16px;
                        padding-right: 16px;
                    }
                }
            `}</style>
        </section>
    );
} 