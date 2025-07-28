'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Course {
    id: number;
    title: string;
    category: 'Leadership' | 'ICT' | 'HR';
    mode: string;
    image: string;
    imageAlt: string;
}

const featuredCourses: Course[] = [
    {
        id: 1,
        title: "Strategic Leadership Development",
        category: "Leadership",
        mode: "In-Person",
        image: "/courses/courses-1.jpg",
        imageAlt: "Leadership training session"
    },
    {
        id: 2,
        title: "Digital Transformation & ICT Strategy",
        category: "ICT",
        mode: "Hybrid",
        image: "/courses/courses-2.jpg",
        imageAlt: "ICT strategy workshop"
    },
    {
        id: 3,
        title: "Modern HR Management Practices",
        category: "HR",
        mode: "In-Person",
        image: "/courses/courses-3.jpg",
        imageAlt: "HR management training"
    },
    {
        id: 4,
        title: "Executive Communication Skills",
        category: "Leadership",
        mode: "Virtual",
        image: "/courses/courses-4.jpg",
        imageAlt: "Communication skills workshop"
    },
    {
        id: 5,
        title: "Cybersecurity Fundamentals",
        category: "ICT",
        mode: "Hybrid",
        image: "/courses/courses-5.jpg",
        imageAlt: "Cybersecurity training"
    },
    {
        id: 6,
        title: "Employee Engagement & Retention",
        category: "HR",
        mode: "In-Person",
        image: "/courses/courses-6.jpg",
        imageAlt: "Employee engagement workshop"
    }
];

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'Leadership':
            return 'bg-yellow-orange';
        case 'ICT':
            return 'bg-teal-500';
        case 'HR':
            return 'bg-red-500';
        default:
            return 'bg-gray-500';
    }
};

export default function FeaturedCourses() {
    const [isVisible, setIsVisible] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
            return () => carousel.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className={`font-montserrat font-bold text-gray-800 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
                    >
                        Our Top Courses
                    </h2>
                    <p
                        className={`font-source-sans text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}
                    >
                        Browse our most popular training programs—designed for maximum impact.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Left Arrow */}
                    {showLeftArrow && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100"
                            aria-label="Scroll left"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Right Arrow */}
                    {showRightArrow && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100"
                            aria-label="Scroll right"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Course Cards Carousel */}
                    <div
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {featuredCourses.map((course, index) => (
                            <div
                                key={course.id}
                                className={`flex-shrink-0 w-80 snap-start transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <div className="bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
                                    {/* Course Image */}
                                    <div className="relative h-48 rounded-t-lg overflow-hidden">
                                        <Image
                                            src={course.image}
                                            alt={course.imageAlt}
                                            fill
                                            className="object-cover"
                                            sizes="320px"
                                            priority={index < 3}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent z-10" />
                                    </div>

                                    {/* Course Content */}
                                    <div className="p-6">
                                        {/* Category Tag */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`${getCategoryColor(course.category)} text-white text-xs px-3 py-1 rounded-full font-source-sans font-medium`}>
                                                {course.category}
                                            </span>
                                        </div>

                                        {/* Course Title */}
                                        <h3 className="font-montserrat font-semibold text-gray-800 mb-2 text-lg leading-tight">
                                            {course.title}
                                        </h3>

                                        {/* Duration & Mode */}
                                        <p className="font-source-sans text-gray-500 text-sm mb-4">
                                            {course.mode}
                                        </p>

                                        {/* Enquire Now Button */}
                                        <a
                                            href={`https://wa.me/254720611517?text=${encodeURIComponent('Hey, I want to get more information about the ' + course.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full block border border-teal-500 text-teal-500 py-2 px-4 rounded-lg font-source-sans font-medium hover:bg-teal-500 hover:bg-opacity-10 transition-all duration-200 group-hover:border-teal-600 group-hover:text-teal-600 text-center"
                                        >
                                            Enquire Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}