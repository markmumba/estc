'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function AwardsPartnerships() {
    const [isVisible, setIsVisible] = useState(false);
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

    return (
        <section ref={sectionRef} className="bg-white py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
                {/* Section Header */}
                <h2 className="font-montserrat font-bold text-gray-800 mb-6 text-2xl md:text-3xl lg:text-4xl transition-all duration-700">
                    Our Recognized Partnerships
                </h2>
                <p className="font-source-sans text-gray-600 text-lg mb-12 max-w-xl mx-auto transition-all duration-700 delay-200">
                    We are proud to have partnered with some of the region&apos;s most respected organizations.
                </p>

                {/* Isuzu Logo */}
                <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '0.3s' }}>
                    <Image
                        src="/isuzu.png"
                        alt="Isuzu Logo"
                        width={180}
                        height={60}
                        className="mx-auto drop-shadow-lg"
                        priority
                    />
                </div>

                {/* HR Quote */}
                <blockquote className={`bg-teal-50 border-l-4 border-teal-500 rounded-xl px-8 py-8 shadow-md max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.5s' }}>
                    <p className="font-source-sans text-lg text-gray-700 italic mb-4">
                        &ldquo;Working with ESTC has been a truly transformative experience for our teams. Their tailored approach and commitment to excellence have made a real difference in our organization.&rdquo;
                    </p>
                    <footer className="font-montserrat font-semibold text-teal-700 text-base">
                        HR Manager, Isuzu East Africa
                    </footer>
                </blockquote>
            </div>
        </section>
    );
} 