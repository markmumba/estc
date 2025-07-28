'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className={`transition-all duration-300 ${isScrolled ? 'scale-95' : 'scale-100'
                            }`}>
                            <div className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
                                ? 'bg-white/80 backdrop-blur-sm shadow-sm'
                                : 'bg-white/20 backdrop-blur-sm shadow-lg'
                                }`}>
                                <Image
                                    src="/logo.png"
                                    alt="ESTC Logo"
                                    width={140}
                                    height={70}
                                    className="h-10 lg:h-12 w-auto drop-shadow-sm"
                                    priority
                                />
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`font-source-sans font-medium transition-all duration-200 hover:scale-105 ${isScrolled
                                ? 'text-gray-800 hover:text-teal-600'
                                : 'text-white hover:text-teal-200 drop-shadow-lg'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`font-source-sans font-medium transition-all duration-200 hover:scale-105 ${isScrolled
                                ? 'text-gray-800 hover:text-teal-600'
                                : 'text-white hover:text-teal-200 drop-shadow-lg'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/courses"
                            className={`font-source-sans font-medium transition-all duration-200 hover:scale-105 ${isScrolled
                                ? 'text-gray-800 hover:text-teal-600'
                                : 'text-white hover:text-teal-200 drop-shadow-lg'
                                }`}
                        >
                            Courses
                        </Link>
                        <Link
                            href="/resources"
                            className={`font-source-sans font-medium transition-all duration-200 hover:scale-105 ${isScrolled
                                ? 'text-gray-800 hover:text-teal-600'
                                : 'text-white hover:text-teal-200 drop-shadow-lg'
                                }`}
                        >
                            Resources
                        </Link>
                        <Link
                            href="/contact"
                            className={`font-source-sans font-medium transition-all duration-200 hover:scale-105 ${isScrolled
                                ? 'text-gray-800 hover:text-teal-600'
                                : 'text-white hover:text-teal-200 drop-shadow-lg'
                                }`}
                        >
                            Contact
                        </Link>

                        {/* CTA Button */}
                        <button onClick={() => router.push('/courses')} className={`px-6 py-2.5 rounded-md font-montserrat font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${isScrolled
                            ? 'bg-teal-500 text-white hover:bg-teal-600 shadow-md'
                            : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                            }`}>
                            Build Your Path
                        </button>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <button
                        className={`lg:hidden p-2 rounded-lg transition-all duration-200 hover:scale-105 ${isScrolled
                            ? 'text-gray-800 hover:bg-gray-100'
                            : 'text-white hover:bg-white/20 backdrop-blur-sm'
                            }`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                <div className="bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100">
                    <div className="px-4 py-6 space-y-1">
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-source-sans font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-source-sans font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/courses"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-source-sans font-medium"
                        >
                            Courses
                        </Link>
                        <Link
                            href="/resources"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-source-sans font-medium"
                        >
                            Resources
                        </Link>
                        <Link
                            href="/contact"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-source-sans font-medium"
                        >
                            Contact
                        </Link>

                        {/* Mobile CTA Button */}
                        <div className="px-4 pt-4">
                            <button onClick={() => router.push('/courses')} className="w-full bg-teal-500 text-white px-6 py-3 rounded-md font-montserrat font-semibold hover:bg-teal-600 hover:scale-105 transition-all duration-200 shadow-md">
                                Build Your Path
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 