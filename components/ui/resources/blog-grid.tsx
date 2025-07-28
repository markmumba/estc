'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';
import { blogPosts } from '../../../data/blog-posts';

const categories = ['All', 'Leadership', 'Team Building', 'Customer Service', 'Project Management', 'Marketing', 'Finance', 'Human Resources', 'Technology', 'Strategy', 'Communication', 'Change Management', 'Analytics'];

export default function BlogGrid() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    const handlePostClick = (postId: string) => {
        router.push(`/blog/${postId}`);
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
                        className={`px-4 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${selectedCategory === category
                            ? 'bg-teal-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Featured Post */}
            {featuredPost && selectedCategory === 'All' && (
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 group">
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div className="relative h-64 lg:h-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <div className="text-white text-center">
                                    <div className="text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-300">📖</div>
                                </div>
                            </div>
                            <div className="absolute top-6 left-6">
                                <span className="px-4 py-2 bg-teal-500 text-white text-sm font-semibold rounded-full shadow-lg">
                                    Featured
                                </span>
                            </div>
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-2 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">
                                    {featuredPost.category}
                                </span>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(featuredPost.date)}
                                </div>
                            </div>
                            <h3 className="font-montserrat font-bold text-gray-800 text-2xl lg:text-3xl mb-6 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                                {featuredPost.title}
                            </h3>
                            <p className="font-source-sans text-gray-600 mb-8 leading-relaxed text-lg">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6 text-sm text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        {featuredPost.author}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {featuredPost.readTime}
                                    </div>
                                </div>
                                <button
                                    onClick={() => handlePostClick(featuredPost.id)}
                                    className="flex items-center gap-2 text-teal-500 hover:text-teal-600 font-montserrat font-semibold transition-colors duration-200 group-hover:translate-x-1"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4 transition-transform duration-200" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                    <div
                        key={post.id}
                        onClick={() => handlePostClick(post.id)}
                        className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer group ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                            }`}
                    >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <div className="text-white text-center">
                                    <div className="text-4xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-300">📄</div>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                    {post.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(post.date)}
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </div>
                            </div>

                            <h3 className="font-montserrat font-bold text-gray-800 text-xl mb-4 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                                {post.title}
                            </h3>

                            <p className="font-source-sans text-gray-600 text-base mb-6 leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.slice(0, 2).map((tag) => (
                                    <span
                                        key={tag}
                                        className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    {post.author}
                                </span>
                                <ArrowRight className="w-5 h-5 text-teal-500 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

         
        </div>
    );
} 