'use client';

import { useState } from 'react';
import CoursesHero from "@/components/ui/courses/courses-hero";
import CategoryQuickLinks from "@/components/ui/courses/category-quick-links";
import CourseGrid from "@/components/ui/courses/course-grid";
import BuilderPrompt from "@/components/ui/courses/builder-prompt";
import Pagination from "@/components/ui/courses/pagination";
import BottomCTA from "@/components/ui/courses/bottom-cta";
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
        thumbnail: '/courses/courses-1.jpg',
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
        thumbnail: '/courses/courses-2.jpg',
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
        thumbnail: '/courses/courses-3.jpg',
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
        thumbnail: '/courses/courses-4.jpg',
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
        thumbnail: '/courses/courses-5.jpg',
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
        thumbnail: '/courses/courses-6.jpg',
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
        thumbnail: '/courses/courses-1.jpg',
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
        thumbnail: '/courses/courses-2.jpg',
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
        thumbnail: '/courses/courses-3.jpg',
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
        thumbnail: '/courses/courses-4.jpg',
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
        thumbnail: '/courses/courses-5.jpg',
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
        thumbnail: '/courses/courses-6.jpg',
        slug: 'strategic-planning-execution',
        price: 29000,
        rating: 4.6,
        participants: 89
    }
];

const COURSES_PER_PAGE = 6;

export default function Courses() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredCourses, setFilteredCourses] = useState(allCourses);
    const [displayedCourses, setDisplayedCourses] = useState(allCourses.slice(0, COURSES_PER_PAGE));

    // Filter courses based on selected category
    const filterCoursesByCategory = (category: string) => {
        if (category === 'All') {
            return allCourses;
        }

        // Map the category names from CategoryQuickLinks to the actual course categories
        const categoryMapping: { [key: string]: string[] } = {
            'Leadership': ['Management & Supervisory'],
            'ICT & Digital Skills': ['Business ICT'],
            'HR & People Development': ['Customer Experience'],
            'Finance & Accounting': ['Finance Skills'],
            'Soft Skills': ['Customer Experience', 'Management & Supervisory'],
            'Management & Strategy': ['Management & Supervisory', 'Corporate Governance']
        };

        const targetCategories = categoryMapping[category] || [category];
        return allCourses.filter(course => targetCategories.includes(course.category));
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page when changing category

        const filtered = filterCoursesByCategory(category);
        setFilteredCourses(filtered);
        setDisplayedCourses(filtered.slice(0, COURSES_PER_PAGE));
    };

    const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        // Simulate API delay
        setTimeout(() => {
            const startIndex = (page - 1) * COURSES_PER_PAGE;
            const endIndex = startIndex + COURSES_PER_PAGE;
            setDisplayedCourses(filteredCourses.slice(startIndex, endIndex));

            // Scroll to top of course grid
            document.querySelector('.course-grid-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
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
                        <CategoryQuickLinks
                            onCategoryChange={handleCategoryChange}
                            selectedCategory={selectedCategory}
                        />
                    </div>
                </div>

                {/* Course Grid - Full Width */}
                <div className="course-grid-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <CourseGrid
                        courses={displayedCourses}
                        totalCourses={filteredCourses.length}
                    />
                </div>

                {/* Builder Prompt */}
                <BuilderPrompt />

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />

                {/* Bottom CTA */}
                <BottomCTA />
            </div>

            <Footer />
        </main>
    );
}