'use client';

import { useState, useEffect } from 'react';
import CoursesHero from "@/components/ui/courses/courses-hero";
import FilterSearchBar from "@/components/ui/courses/filter-search-bar";
import CategoryQuickLinks from "@/components/ui/courses/category-quick-links";
import CourseGrid from "@/components/ui/courses/course-grid";
import BuilderPrompt from "@/components/ui/courses/builder-prompt";
import Pagination from "@/components/ui/courses/pagination";
import BottomCTA from "@/components/ui/courses/bottom-cta";
import CostCalculator from "@/components/ui/courses/cost-calculator";
import Navbar from "@/components/ui/shared/navbar";
import Footer from "@/components/ui/shared/footer";

// Sample courses data - in a real app this would come from an API
const allCourses = [
    {
        id: '1',
        title: 'Executive Marketing Skills',
        category: 'Marketing & Sales',
        duration: '2 days',
        mode: 'In-House / Online',
        thumbnail: '/images/courses/marketing-executive.jpg',
        slug: 'executive-marketing-skills',
        price: 25000,
        rating: 4.8,
        participants: 156
    },
    {
        id: '2',
        title: 'Customer Service Excellence for Frontline Staff',
        category: 'Customer Experience',
        duration: '2 days',
        mode: 'In-House',
        thumbnail: '/images/courses/customer-service.jpg',
        slug: 'customer-service-excellence',
        price: 20000,
        rating: 4.9,
        participants: 203
    },
    {
        id: '3',
        title: 'Developing Your Market Research Strategy',
        category: 'Market Research',
        duration: '2 days',
        mode: 'In-House',
        thumbnail: '/images/courses/market-research.jpg',
        slug: 'market-research-strategy',
        price: 22000,
        rating: 4.7,
        participants: 89
    },
    {
        id: '4',
        title: 'Corporate Governance & Board Competency',
        category: 'Corporate Governance',
        duration: '2 days',
        mode: 'In-House',
        thumbnail: '/images/courses/corporate-governance.jpg',
        slug: 'corporate-governance-board',
        price: 30000,
        rating: 4.6,
        participants: 67
    },
    {
        id: '5',
        title: 'Successful Negotiation Skills Training',
        category: 'Management & Supervisory',
        duration: '1 day',
        mode: 'Online',
        thumbnail: '/images/courses/negotiation-skills.jpg',
        slug: 'negotiation-skills-training',
        price: 15000,
        rating: 4.8,
        participants: 134
    },
    {
        id: '6',
        title: 'Principles of Project Management',
        category: 'Project Management',
        duration: '3 days',
        mode: 'In-House',
        thumbnail: '/images/courses/project-management.jpg',
        slug: 'project-management-principles',
        price: 35000,
        rating: 4.9,
        participants: 178
    },
    {
        id: '7',
        title: 'Cyber Security & Penetration Testing Masterclass',
        category: 'Business ICT',
        duration: '3 days',
        mode: 'In-House',
        thumbnail: '/images/courses/cyber-security.jpg',
        slug: 'cyber-security-masterclass',
        price: 40000,
        rating: 4.7,
        participants: 92
    },
    {
        id: '8',
        title: 'Accounting & Finance for Non-Finance Officers',
        category: 'Finance Skills',
        duration: '2 days',
        mode: 'Online / In-House',
        thumbnail: '/images/courses/accounting-finance.jpg',
        slug: 'accounting-finance-non-finance',
        price: 28000,
        rating: 4.8,
        participants: 145
    },
    // Additional courses for pagination demo
    {
        id: '9',
        title: 'Leadership & Team Management',
        category: 'Management & Supervisory',
        duration: '3 days',
        mode: 'In-House',
        thumbnail: '/images/courses/leadership.jpg',
        slug: 'leadership-team-management',
        price: 32000,
        rating: 4.9,
        participants: 198
    },
    {
        id: '10',
        title: 'Digital Marketing Strategy',
        category: 'Marketing & Sales',
        duration: '2 days',
        mode: 'Online',
        thumbnail: '/images/courses/digital-marketing.jpg',
        slug: 'digital-marketing-strategy',
        price: 24000,
        rating: 4.7,
        participants: 167
    },
    {
        id: '11',
        title: 'Data Analysis & Business Intelligence',
        category: 'Business ICT',
        duration: '3 days',
        mode: 'In-House',
        thumbnail: '/images/courses/data-analysis.jpg',
        slug: 'data-analysis-business-intelligence',
        price: 38000,
        rating: 4.8,
        participants: 123
    },
    {
        id: '12',
        title: 'Strategic Planning & Execution',
        category: 'Management & Supervisory',
        duration: '2 days',
        mode: 'In-House',
        thumbnail: '/images/courses/strategic-planning.jpg',
        slug: 'strategic-planning-execution',
        price: 29000,
        rating: 4.6,
        participants: 89
    }
];

const COURSES_PER_PAGE = 6;

export default function Courses() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [displayedCourses, setDisplayedCourses] = useState(allCourses.slice(0, COURSES_PER_PAGE));

    const totalPages = Math.ceil(allCourses.length / COURSES_PER_PAGE);
    const hasMore = currentPage < totalPages;

    const handlePageChange = (page: number) => {
        setIsLoading(true);
        setCurrentPage(page);

        // Simulate API delay
        setTimeout(() => {
            const startIndex = (page - 1) * COURSES_PER_PAGE;
            const endIndex = startIndex + COURSES_PER_PAGE;
            setDisplayedCourses(allCourses.slice(startIndex, endIndex));
            setIsLoading(false);

            // Scroll to top of course grid
            document.querySelector('.course-grid-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
    };

    const handleLoadMore = () => {
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            const nextPage = currentPage + 1;
            const startIndex = 0;
            const endIndex = nextPage * COURSES_PER_PAGE;

            // Add more courses to the existing list (for load more functionality)
            setDisplayedCourses(allCourses.slice(startIndex, endIndex));
            setCurrentPage(nextPage);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <CoursesHero />

            {/* Main Content Area */}
            <div className="relative">
                {/* Sticky Filter Bar */}
                <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto">
                        <FilterSearchBar />
                        <CategoryQuickLinks />
                    </div>
                </div>

                {/* Course Grid and Calculator Layout */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Course Grid - Main Content */}
                        <div className="flex-1 lg:max-w-4xl">
                            <CourseGrid
                                courses={displayedCourses}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                onLoadMore={handleLoadMore}
                                hasMore={hasMore}
                                isLoading={isLoading}
                                totalCourses={allCourses.length}
                            />
                        </div>

                        {/* Cost Calculator - Sidebar */}
                        <div className="lg:w-80 lg:flex-shrink-0">
                            <div className="sticky top-24">
                                <CostCalculator />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Builder Prompt */}
                <BuilderPrompt />

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    onLoadMore={handleLoadMore}
                    hasMore={hasMore}
                    isLoading={isLoading}
                />

                {/* Bottom CTA */}
                <BottomCTA />
            </div>

            <Footer />
        </main>
    );
}