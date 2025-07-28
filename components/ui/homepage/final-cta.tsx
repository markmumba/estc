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
        <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 relative overflow-hidden">
            {/* Diagonal Red Accent Slice */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, #E53946 0%, #E53946 20%, transparent 20%, transparent 100%)',
                    opacity: 0.1
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
                            <a
                                href={`https://wa.me/254720611517?text=${encodeURIComponent('Hi, I would like to book a free consultation for my team.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-source-sans font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-150 flex items-center justify-center"
                                style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 012 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.73 2.77A9.93 9.93 0 0122 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.02 4.23.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                                </svg>
                                Book a Free Consultation
                            </a>

                            {/* Secondary CTA */}
                            <a
                                href="/TRAINING CATALOGUE.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-red-500 font-source-sans font-semibold text-lg hover:text-red-600 transition-all duration-200 relative group"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Download Full Course Catalog
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Newsletter Signup */}
                    <div className="text-center lg:text-left">
                        <div
                            className={`bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <h3 className="font-montserrat font-semibold text-gray-800 mb-4 text-xl">
                                Stay Updated
                            </h3>
                            <p className="font-source-sans text-gray-600 mb-6 text-sm leading-relaxed">
                                Get the latest insights on corporate training and leadership development.
                            </p>

                            <form onSubmit={handleSubscribe} className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="info@exceptionalskills.co.ke"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={() => setIsEmailFocused(true)}
                                        onBlur={() => setIsEmailFocused(false)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-source-sans text-gray-800 placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 transition-all duration-200 bg-white"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full bg-teal-500 text-white px-6 py-3 rounded-lg font-source-sans font-semibold hover:bg-teal-600 transition-all duration-200 ${showPulse ? 'animate-pulse-once' : ''
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
