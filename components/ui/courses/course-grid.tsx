'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Course {
    id: string;
    title: string;
    category: string;
    duration: string;
    mode: string;
    thumbnail: string;
    slug: string;
    price: number;
    rating: number;
    participants: number;
}

interface CourseGridProps {
    courses: Course[];
    currentPage?: number;
    onPageChange?: (page: number) => void;
    onLoadMore?: () => void;
    hasMore?: boolean;
    isLoading?: boolean;
    totalCourses?: number;
}

const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
        'Marketing & Sales': 'bg-red-500',
        'Customer Experience': 'bg-blue-500',
        'Market Research': 'bg-purple-500',
        'Corporate Governance': 'bg-gray-600',
        'Management & Supervisory': 'bg-green-500',
        'Project Management': 'bg-orange-500',
        'Business ICT': 'bg-teal-500',
        'Finance Skills': 'bg-yellow-600'
    };
    return colors[category] || 'bg-gray-500';
};

const formatPrice = (price: number) => {
    return `KES ${price.toLocaleString()}`;
};

const StarRating = ({ rating }: { rating: number }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        );
    }

    if (hasHalfStar) {
        stars.push(
            <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <defs>
                    <linearGradient id="halfStar">
                        <stop offset="50%" stopColor="#FBBF24" />
                        <stop offset="50%" stopColor="#E5E7EB" />
                    </linearGradient>
                </defs>
                <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        );
    }

    return <div className="flex items-center">{stars}</div>;
};

export default function CourseGrid({
    courses,
    currentPage = 1,
    onPageChange,
    onLoadMore,
    hasMore = false,
    isLoading = false,
    totalCourses = 0
}: CourseGridProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleCourses, setVisibleCourses] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector('.course-grid-section');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        // Animate courses sequentially
        courses.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCourses(prev => [...prev, index]);
            }, index * 100);
        });
    }, [isVisible, courses]);

    return (
        <section className="course-grid-section">
            {/* Section Header */}
            <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="font-montserrat font-bold text-gray-800 text-2xl md:text-3xl">
                            Available Courses
                        </h2>
                        <p className="font-source-sans text-gray-600 mt-1">
                            Discover professional training programs tailored for your organization
                        </p>
                    </div>
                    <div className="text-sm text-gray-500">
                        Showing {courses.length} of {totalCourses} courses
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                    <article
                        key={course.id}
                        aria-labelledby={`course-title-${course.id}`}
                        className={`group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${visibleCourses.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Thumbnail Container */}
                        <div className="relative overflow-hidden">
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={course.thumbnail}
                                    alt={`${course.title} course thumbnail`}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTUwTDIwMCAxMDBMMzAwIDE1MEwyMDAgMjAwTDEwMCAxNTBaIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iMjAiIGZpbGw9IiNEN0Q5RDAiLz4KPC9zdmc+';
                                    }}
                                />
                            </div>

                            {/* Category Pill */}
                            <div className="absolute top-3 left-3">
                                <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full ${getCategoryColor(course.category)}`}>
                                    {course.category}
                                </span>
                            </div>

                            {/* Price Badge */}
                            <div className="absolute top-3 right-3">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-800 bg-white bg-opacity-90 rounded-full">
                                    {formatPrice(course.price)}
                                </span>
                            </div>
                        </div>

                        {/* Course Content */}
                        <div className="p-6">
                            {/* Course Title */}
                            <h3
                                id={`course-title-${course.id}`}
                                className="font-montserrat font-semibold text-gray-800 text-lg mb-3 leading-tight line-clamp-2"
                            >
                                {course.title}
                            </h3>

                            {/* Rating and Participants */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <StarRating rating={course.rating} />
                                    <span className="text-sm text-gray-600">{course.rating}</span>
                                </div>
                                <div className="text-sm text-gray-500">
                                    {course.participants} participants
                                </div>
                            </div>

                            {/* Meta Information */}
                            <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {course.duration}
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                    </svg>
                                    {course.mode}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href={`/courses/${course.slug}`}
                                aria-label={`Enquire about ${course.title}`}
                                className="inline-flex items-center justify-center w-full px-4 py-3 border border-teal-500 text-teal-500 font-montserrat font-medium text-sm rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                            >
                                Enquire Now
                                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .aspect-w-16 {
                    position: relative;
                    padding-bottom: 56.25%;
                }
                
                .aspect-w-16 > * {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                }
            `}</style>
        </section>
    );
} 