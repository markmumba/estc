'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-4 flex justify-between items-center bg-black bg-opacity-20 backdrop-blur-sm shadow-lg">
            {/* Logo */}
            <div className="text-white font-montserrat font-bold text-2xl drop-shadow-lg">
                ESTC
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-teal-200 transition-colors font-source-sans font-medium drop-shadow-md">
                    Home
                </Link>
                <Link href="/about" className="text-white hover:text-teal-200 transition-colors font-source-sans font-medium drop-shadow-md">
                    About
                </Link>
                <Link href="/courses" className="text-white hover:text-teal-200 transition-colors font-source-sans font-medium drop-shadow-md">
                    Courses
                </Link>
                <Link href="/faculty" className="text-white hover:text-teal-200 transition-colors font-source-sans font-medium drop-shadow-md">
                    Faculty
                </Link>
                <Link href="/resources" className="text-white hover:text-teal-200 transition-colors font-source-sans font-medium drop-shadow-md">
                    Resources
                </Link>
                <Link href="/contact" className="text-white hover:text-teal-200 transition-colors font-source-sans font-medium drop-shadow-md">
                    Contact
                </Link>
                <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-source-sans font-semibold hover:shadow-lg hover:scale-105 transition-all duration-150 shadow-md">
                    Build Your Path
                </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
                className="md:hidden text-white p-2 rounded-lg bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-150"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm md:hidden shadow-xl border-t border-gray-200">
                    <div className="px-6 py-4 space-y-4">
                        <a href="#home" className="block text-gray-800 hover:text-teal-500 transition-colors font-source-sans font-medium py-2">
                            Home
                        </a>
                        <a href="#about" className="block text-gray-800 hover:text-teal-500 transition-colors font-source-sans font-medium py-2">
                            About
                        </a>
                        <a href="#courses" className="block text-gray-800 hover:text-teal-500 transition-colors font-source-sans font-medium py-2">
                            Courses
                        </a>
                        <a href="#faculty" className="block text-gray-800 hover:text-teal-500 transition-colors font-source-sans font-medium py-2">
                            Faculty
                        </a>
                        <a href="#resources" className="block text-gray-800 hover:text-teal-500 transition-colors font-source-sans font-medium py-2">
                            Resources
                        </a>
                        <a href="#contact" className="block text-gray-800 hover:text-teal-500 transition-colors font-source-sans font-medium py-2">
                            Contact
                        </a>
                        <button className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg font-source-sans font-semibold hover:shadow-lg hover:scale-105 transition-all duration-150 shadow-md">
                            Build Your Path
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
} 