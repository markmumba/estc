'use client';

import { useState, useEffect } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector('.pagination-section');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <section className="pagination-section py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                {/* Classic Pagination */}
                {totalPages > 1 && (
                    <div className={`flex justify-center items-center space-x-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-400`}>
                        {/* Previous Button */}
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${currentPage === 1
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
                                }`}
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center space-x-1">
                            {getPageNumbers().map((page, index) => (
                                <div key={index}>
                                    {page === '...' ? (
                                        <span className="px-3 py-2 text-gray-400 font-montserrat">...</span>
                                    ) : (
                                        <button
                                            onClick={() => onPageChange(page as number)}
                                            className={`px-3 py-2 rounded-md font-montserrat text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${currentPage === page
                                                ? 'bg-teal-500 text-white'
                                                : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${currentPage === totalPages
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
                                }`}
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Page Info */}
                <div className="text-center mt-4">
                    <p className="font-source-sans text-gray-500 text-sm">
                        Page {currentPage} of {totalPages}
                    </p>
                </div>
            </div>

            <style jsx>{`
                .duration-400 {
                    transition-duration: 400ms;
                }
            `}</style>
        </section>
    );
} 