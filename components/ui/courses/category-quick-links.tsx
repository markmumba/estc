'use client';

import { useState, useEffect } from 'react';

interface CategoryQuickLinksProps {
    onCategoryChange?: (category: string) => void;
    selectedCategory?: string;
}

const categories = [
    'All',
    'Leadership',
    'ICT & Digital Skills',
    'HR & People Development',
    'Finance & Accounting',
    'Soft Skills',
    'Management & Strategy'
];

const mobileVisibleCategories = ['All', 'Leadership', 'ICT & Digital Skills', 'HR & People Development'];

export default function CategoryQuickLinks({ onCategoryChange, selectedCategory = 'All' }: CategoryQuickLinksProps) {
    const [activeCategory, setActiveCategory] = useState(selectedCategory);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        setActiveCategory(selectedCategory);
    }, [selectedCategory]);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        setIsMoreOpen(false);
        if (onCategoryChange) {
            onCategoryChange(category);
        }
    };

    const visibleCategories = isMobile ? mobileVisibleCategories : categories;
    const hiddenCategories = isMobile ? categories.filter(cat => !mobileVisibleCategories.includes(cat)) : [];

    return (
        <section className="bg-white border-b border-gray-100 py-4">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide">
                    {/* Visible Category Pills */}
                    {visibleCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            aria-pressed={activeCategory === category}
                            className={`flex-shrink-0 px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${activeCategory === category
                                ? 'bg-teal-500 text-white border-transparent shadow-sm'
                                : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-teal-500 hover:bg-opacity-20 hover:border-teal-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}

                    {/* More Dropdown for Mobile */}
                    {isMobile && hiddenCategories.length > 0 && (
                        <div className="relative flex-shrink-0">
                            <button
                                onClick={() => setIsMoreOpen(!isMoreOpen)}
                                className={`flex items-center px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${isMoreOpen
                                    ? 'bg-teal-500 text-white border-transparent shadow-sm'
                                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-teal-500 hover:bg-opacity-20 hover:border-teal-200'
                                    }`}
                            >
                                More
                                <svg
                                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isMoreOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                    <div className="py-2">
                                        {hiddenCategories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => handleCategoryClick(category)}
                                                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category
                                                    ? 'bg-teal-50 text-teal-700'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Click outside to close dropdown */}
            {isMoreOpen && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setIsMoreOpen(false)}
                />
            )}

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
} 