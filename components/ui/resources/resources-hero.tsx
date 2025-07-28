'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, BookOpen, FileText,  Users } from 'lucide-react';

export default function ResourcesHero() {
    const [isVisible, setIsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector('.resources-hero-section');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search functionality
        console.log('Searching for:', searchQuery);
    };

    return (
        <section className="resources-hero-section relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Breadcrumb Navigation */}
                    <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="text-teal-100 hover:text-white transition-colors duration-200"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="text-teal-200">/</li>
                            <li className="text-white font-medium">Resources</li>
                        </ol>
                    </nav>

                    {/* Page Title */}
                    <h1 className="font-montserrat font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                        Resources & Insights
                    </h1>

                    {/* Intro Text */}
                    <p className="font-source-sans text-teal-100 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
                        Discover valuable insights, industry trends, and expert knowledge to enhance your professional development and organizational growth.
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search articles, guides, and resources..."
                                className="w-full pl-12 pr-24 py-4 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans shadow-lg"
                            />
                            <button
                                type="submit"
                                className="absolute inset-y-0 right-0 px-6 bg-teal-500 hover:bg-teal-600 text-white font-montserrat font-medium rounded-r-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                            >
                                Search
                            </button>
                        </div>
                    </form>

                    {/* Resource Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                                <BookOpen className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-white font-montserrat font-semibold text-sm">Articles</div>
                            <div className="text-teal-200 text-xs">Expert insights</div>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                                <FileText className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-white font-montserrat font-semibold text-sm">Guides</div>
                            <div className="text-teal-200 text-xs">Step-by-step</div>
                        </div>

                      

                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                                <Users className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-white font-montserrat font-semibold text-sm">Case Studies</div>
                            <div className="text-teal-200 text-xs">Real examples</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 