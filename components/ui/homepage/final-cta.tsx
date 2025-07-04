'use client';

import { useState, useEffect } from 'react';

export default function FinalCta() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [showPulse, setShowPulse] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Show pulse animation if email is populated but idle for 5 seconds
    useEffect(() => {
        if (email && !isEmailFocused) {
            const timer = setTimeout(() => {
                setShowPulse(true);
                setTimeout(() => setShowPulse(false), 1000);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [email, isEmailFocused]);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
    };

    return (
        <section className="bg-white py-20 px-6 relative overflow-hidden">
            {/* Diagonal Red Accent Slice */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, #E53946 0%, #E53946 20%, transparent 20%, transparent 100%)',
                    opacity: 0.15
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="text-center lg:text-left">
                        {/* Heading */}
                        <h2
                            className={`font-montserrat font-extrabold text-gray-800 mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}
                        >
                            Ready to Transform Your Team?
                        </h2>

                        {/* Subheading */}
                        <p
                            className={`font-source-sans text-gray-600 mb-8 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}
                        >
                            Let&lsquo;s design a tailored learning path that drives real impact.
                        </p>

                        {/* CTAs */}
                        <div
                            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-400 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            {/* Primary CTA */}
                            <button
                                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-source-sans font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-150"
                                style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}
                            >
                                Book a Free Consultation
                            </button>

                            {/* Secondary CTA */}
                            <a
                                href="/downloads/course-catalog.pdf"
                                className="text-red-500 font-source-sans font-medium text-lg hover:underline transition-all duration-200 relative group"
                            >
                                Download Full Course Catalog
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Newsletter Signup */}
                    <div className="text-center lg:text-left">
                        <div
                            className={`bg-gray-50 rounded-lg p-8 transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <h3 className="font-montserrat font-semibold text-gray-800 mb-4 text-lg">
                                Stay Updated
                            </h3>
                            <p className="font-source-sans text-gray-600 mb-6 text-sm">
                                Get the latest insights on corporate training and leadership development.
                            </p>

                            <form onSubmit={handleSubscribe} className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Your work email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={() => setIsEmailFocused(true)}
                                        onBlur={() => setIsEmailFocused(false)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 transition-all duration-200"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full border border-teal-500 text-teal-500 px-6 py-3 rounded-lg font-source-sans font-medium hover:bg-teal-500 hover:bg-opacity-10 transition-all duration-200 ${showPulse ? 'animate-pulse-once' : ''
                                        }`}
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-once {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                
                .animate-pulse-once {
                    animation: pulse-once 1s ease-out;
                }
            `}</style>
        </section>
    );
}