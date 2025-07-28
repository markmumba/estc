'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [showShake, setShowShake] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) {
            setShowShake(true);
            setTimeout(() => setShowShake(false), 500);
            return;
        }
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
        setEmail('');
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/company/estc',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            brandColor: '#0077B5'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/estc_ke',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
            brandColor: '#1DA1F2'
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/estc.ke',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            brandColor: '#1877F2'
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/@estc_ke',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
            brandColor: '#FF0000'
        }
    ];

    return (
        <footer className="bg-gray-800 text-light-gray">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* About ESTC */}
                    <div className="lg:col-span-1">
                        <h3 className="font-montserrat font-semibold text-white mb-4 text-lg">
                            About ESTC
                        </h3>
                        <p className="font-source-sans text-sm leading-relaxed mb-4">
                            Empowering organizations through tailored corporate training solutions that drive measurable impact and sustainable growth.
                        </p>
                        <a
                            href="/about"
                            className="text-teal-400 hover:text-teal-300 hover:underline transition-all duration-200 font-source-sans text-sm"
                        >
                            About Us
                        </a>
                    </div>

                    {/* Courses & Services */}
                    <div className="lg:col-span-1">
                        <h3 className="font-montserrat font-semibold text-white mb-4 text-lg">
                            Courses & Services
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/courses"
                                    className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                                >
                                    All Courses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/build-your-path"
                                    className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                                >
                                    Build Your Path
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/consultancy"
                                    className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                                >
                                    Consultancy Services
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-1">
                        <h3 className="font-montserrat font-semibold text-white mb-4 text-lg">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                                >
                                    Blog / Insights
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/downloads"
                                    className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                                >
                                    Downloads
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/case-studies"
                                    className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                                >
                                    Case Studies
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="lg:col-span-1">
                        <h3 className="font-montserrat font-semibold text-white mb-4 text-lg">
                            Connect
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:ngulihelen@gmail.com/info@exceptionalskills.co.ke"
                                    className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                                >
                                    info@exceptionalskills.co.ke
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+254720611517"
                                    className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                                >
                                    +254 720 611517
                                </a>
                            </li>
                            <li className="text-light-gray font-source-sans text-sm">
                                Nairobi HQ
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="lg:col-span-1">
                        <h3 className="font-montserrat font-semibold text-white mb-4 text-lg">
                            Social
                        </h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-light-gray hover:bg-opacity-80 transition-all duration-200 group"
                                    style={{
                                        '--brand-color': social.brandColor
                                    } as React.CSSProperties}
                                >
                                    <div className="group-hover:scale-110 transition-transform duration-200">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div className="lg:col-span-1">
                        <h3 className="font-montserrat font-semibold text-white mb-4 text-lg">
                            Subscribe
                        </h3>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <input
                                type="email"
                                placeholder="ngulihelen@gmail.com/info@exceptionalskills.co.ke"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-light-gray placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-all duration-200 ${showShake ? 'animate-shake' : ''}`}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full border border-teal-400 text-teal-400 px-4 py-2 rounded font-source-sans font-medium hover:bg-teal-400 hover:bg-opacity-10 transition-all duration-200"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-light-gray font-source-sans text-sm">
                            © 2025 ESTC. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a
                                href="/privacy"
                                className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="text-light-gray hover:text-teal-400 hover:underline transition-all duration-200 font-source-sans text-sm"
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                
                .animate-shake {
                    animation: shake 0.5s ease-in-out;
                }
            `}</style>
        </footer>
    );
}