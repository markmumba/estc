'use client';

import { useState, useEffect, useRef } from 'react';

interface FilterState {
    search: string;
    category: string;
    deliveryMode: string;
    duration: [number, number];
    price: [number, number];
    sortBy: string;
}

const categories = [
    'All Categories',
    'Marketing & Sales',
    'Customer Experience',
    'Market Research',
    'Corporate Governance',
    'Management & Supervisory',
    'Project Management',
    'Business ICT',
    'Finance Skills'
];

const deliveryModes = ['All Modes', 'In-House', 'Online', 'Hybrid'];
const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Duration', 'Popularity'];

export default function FilterSearchBar() {
    const [filters, setFilters] = useState<FilterState>({
        search: '',
        category: 'All Categories',
        deliveryMode: 'All Modes',
        duration: [1, 5],
        price: [10000, 50000],
        sortBy: 'Relevance'
    });

    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            // Apply filters here
            console.log('Applying filters:', filters);
        }, 300);

        return () => clearTimeout(timer);
    }, [filters]);

    const handleReset = () => {
        setFilters({
            search: '',
            category: 'All Categories',
            deliveryMode: 'All Modes',
            duration: [1, 5],
            price: [10000, 50000],
            sortBy: 'Relevance'
        });
    };

    const formatPrice = (value: number) => {
        return `KES ${value.toLocaleString()}`;
    };

    return (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Filter Bar */}
                <div className="py-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        {/* Search and Category Row */}
                        <div className="flex flex-col sm:flex-row gap-3 flex-1">
                            {/* Search Input */}
                            <div className="flex-1 sm:max-w-md">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        ref={searchRef}
                                        type="text"
                                        placeholder="Search courses..."
                                        value={filters.search}
                                        onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm text-gray-900 placeholder-gray-500 bg-white"
                                    />
                                </div>
                            </div>

                            {/* Category Dropdown */}
                            <div className="sm:w-48">
                                <select
                                    value={filters.category}
                                    onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                                    className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm text-gray-900 bg-white"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category} className="text-gray-900 bg-white">
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Sort and Expand Controls */}
                        <div className="flex items-center gap-3">
                            {/* Sort Dropdown */}
                            <div className="w-40">
                                <select
                                    value={filters.sortBy}
                                    onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                                    className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm text-gray-900 bg-white"
                                >
                                    {sortOptions.map((option) => (
                                        <option key={option} value={option} className="text-gray-900 bg-white">
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Reset Button */}
                            <button
                                onClick={handleReset}
                                className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                Reset
                            </button>

                            {/* Expand/Collapse Button */}
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="lg:hidden px-3 py-2.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <svg className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Advanced Filters - Expanded on mobile, always visible on desktop */}
                    <div className={`${isExpanded || !isMobile ? 'block' : 'hidden'} mt-4 pt-4 border-t border-gray-200`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Delivery Mode */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Mode</label>
                                <div className="flex flex-wrap gap-2">
                                    {deliveryModes.map((mode) => (
                                        <button
                                            key={mode}
                                            onClick={() => setFilters(prev => ({ ...prev, deliveryMode: mode }))}
                                            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${filters.deliveryMode === mode
                                                ? 'bg-teal-500 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            {mode}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Duration Range */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Duration: {filters.duration[0]}-{filters.duration[1]} days
                                </label>
                                <div className="space-y-2">
                                    <input
                                        type="range"
                                        min="1"
                                        max="10"
                                        value={filters.duration[0]}
                                        onChange={(e) => setFilters(prev => ({
                                            ...prev,
                                            duration: [parseInt(e.target.value), prev.duration[1]]
                                        }))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <input
                                        type="range"
                                        min="1"
                                        max="10"
                                        value={filters.duration[1]}
                                        onChange={(e) => setFilters(prev => ({
                                            ...prev,
                                            duration: [prev.duration[0], parseInt(e.target.value)]
                                        }))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Price: {formatPrice(filters.price[0])} - {formatPrice(filters.price[1])}
                                </label>
                                <div className="space-y-2">
                                    <input
                                        type="range"
                                        min="5000"
                                        max="100000"
                                        step="5000"
                                        value={filters.price[0]}
                                        onChange={(e) => setFilters(prev => ({
                                            ...prev,
                                            price: [parseInt(e.target.value), prev.price[1]]
                                        }))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <input
                                        type="range"
                                        min="5000"
                                        max="100000"
                                        step="5000"
                                        value={filters.price[1]}
                                        onChange={(e) => setFilters(prev => ({
                                            ...prev,
                                            price: [prev.price[0], parseInt(e.target.value)]
                                        }))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                </div>
                            </div>

                            {/* Results Count */}
                            <div className="flex items-end">
                                <div className="text-sm text-gray-600">
                                    <span className="font-medium">24</span> courses found
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #6EC7C0;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                
                .slider::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #6EC7C0;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
} 