'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    featured: boolean;
    tags: string[];
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Future of Leadership Development in the Digital Age',
        excerpt: 'Explore how technology is reshaping leadership training and what organizations need to know to stay ahead in the evolving workplace landscape.',
        category: 'Leadership',
        author: 'Dr. Sarah Johnson',
        date: '2024-01-15',
        readTime: '8 min read',
        image: '/api/placeholder/600/400',
        featured: true,
        tags: ['Leadership', 'Digital Transformation', 'Future of Work']
    },
    {
        id: '2',
        title: 'Building High-Performance Teams: A Comprehensive Guide',
        excerpt: 'Learn the essential strategies and techniques for creating and maintaining high-performing teams in any organization.',
        category: 'Team Building',
        author: 'Michael Chen',
        date: '2024-01-12',
        readTime: '12 min read',
        image: '/api/placeholder/400/300',
        featured: false,
        tags: ['Team Building', 'Performance', 'Management']
    },
    {
        id: '3',
        title: 'Customer Service Excellence: Beyond the Basics',
        excerpt: 'Discover advanced customer service strategies that can transform your organization\'s customer experience and drive loyalty.',
        category: 'Customer Service',
        author: 'Lisa Rodriguez',
        date: '2024-01-10',
        readTime: '6 min read',
        image: '/api/placeholder/400/500',
        featured: false,
        tags: ['Customer Service', 'Experience', 'Loyalty']
    },
    {
        id: '4',
        title: 'Project Management Best Practices for 2024',
        excerpt: 'Stay updated with the latest project management methodologies and tools that are shaping successful project delivery.',
        category: 'Project Management',
        author: 'David Kim',
        date: '2024-01-08',
        readTime: '10 min read',
        image: '/api/placeholder/400/300',
        featured: false,
        tags: ['Project Management', 'Methodologies', 'Tools']
    },
    {
        id: '5',
        title: 'Digital Marketing Strategies for B2B Organizations',
        excerpt: 'Master the art of B2B digital marketing with proven strategies that generate leads and drive business growth.',
        category: 'Marketing',
        author: 'Emma Thompson',
        date: '2024-01-05',
        readTime: '9 min read',
        image: '/api/placeholder/600/300',
        featured: false,
        tags: ['Digital Marketing', 'B2B', 'Lead Generation']
    },
    {
        id: '6',
        title: 'Financial Planning and Budgeting for Non-Financial Managers',
        excerpt: 'Essential financial skills every manager needs to make informed decisions and drive organizational success.',
        category: 'Finance',
        author: 'Robert Wilson',
        date: '2024-01-03',
        readTime: '7 min read',
        image: '/api/placeholder/400/400',
        featured: false,
        tags: ['Finance', 'Budgeting', 'Management']
    },
    {
        id: '7',
        title: 'HR Trends: Building Inclusive and Diverse Workplaces',
        excerpt: 'Explore the latest HR trends and best practices for creating inclusive, diverse, and equitable workplace environments.',
        category: 'Human Resources',
        author: 'Jennifer Lee',
        date: '2024-01-01',
        readTime: '11 min read',
        image: '/api/placeholder/400/300',
        featured: false,
        tags: ['HR', 'Diversity', 'Inclusion']
    },
    {
        id: '8',
        title: 'Cybersecurity Awareness: Protecting Your Organization',
        excerpt: 'Essential cybersecurity practices and training programs to protect your organization from evolving digital threats.',
        category: 'Technology',
        author: 'Alex Martinez',
        date: '2023-12-28',
        readTime: '8 min read',
        image: '/api/placeholder/400/300',
        featured: false,
        tags: ['Cybersecurity', 'Training', 'Protection']
    }
];

const categories = ['All', 'Leadership', 'Team Building', 'Customer Service', 'Project Management', 'Marketing', 'Finance', 'Human Resources', 'Technology'];

export default function BlogGrid() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPost, setSelectedPost] = useState<string | null>(null);

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    const handlePostClick = (postId: string) => {
        setSelectedPost(postId);
        // In a real app, this would navigate to the blog post page
        console.log('Opening blog post:', postId);
        // You can implement navigation here: router.push(`/blog/${postId}`)
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="space-y-12">
            {/* Section Header */}
            <div className="text-center">
                <h2 className="font-montserrat font-bold text-gray-800 text-3xl md:text-4xl mb-4">
                    Latest Articles & Insights
                </h2>
                <p className="font-source-sans text-gray-600 text-lg max-w-2xl mx-auto">
                    Stay updated with the latest trends, best practices, and expert insights in professional development and organizational growth.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Featured Post */}
            {featuredPost && selectedCategory === 'All' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div className="relative h-64 lg:h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="text-6xl font-bold opacity-20">📖</div>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                                    Featured
                                </span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                    {featuredPost.category}
                                </span>
                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(featuredPost.date)}
                                </div>
                            </div>
                            <h3 className="font-montserrat font-bold text-gray-800 text-2xl mb-4 leading-tight">
                                {featuredPost.title}
                            </h3>
                            <p className="font-source-sans text-gray-600 mb-6 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span>By {featuredPost.author}</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {featuredPost.readTime}
                                    </div>
                                </div>
                                <button
                                    onClick={() => handlePostClick(featuredPost.id)}
                                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-montserrat font-medium transition-colors duration-200"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, index) => (
                    <div
                        key={post.id}
                        onClick={() => handlePostClick(post.id)}
                        className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                            }`}
                    >
                        {/* Image */}
                        <div className="relative h-48">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="text-4xl font-bold opacity-20">📄</div>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                                    {post.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(post.date)}
                                </div>
                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </div>
                            </div>

                            <h3 className="font-montserrat font-bold text-gray-800 text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                                {post.title}
                            </h3>

                            <p className="font-source-sans text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 2).map((tag) => (
                                    <span
                                        key={tag}
                                        className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">By {post.author}</span>
                                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center">
                <button className="px-8 py-3 bg-blue-500 text-white font-montserrat font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Load More Articles
                </button>
            </div>
        </div>
    );
} 