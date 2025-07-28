'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag,  Eye } from 'lucide-react';
import Navbar from "@/components/ui/shared/navbar";
import Footer from "@/components/ui/shared/footer";
import { blogPosts } from '../../../data/blog-posts';
import { useState, useEffect } from 'react';

export default function BlogPost() {
    const params = useParams();
    const postId = params.id as string;
    const [readingProgress, setReadingProgress] = useState(0);

    const post = blogPosts.find(p => p.id === postId);

    useEffect(() => {
        const updateReadingProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setReadingProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', updateReadingProgress);
        return () => window.removeEventListener('scroll', updateReadingProgress);
    }, []);

    if (!post) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                        <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
                        <Link
                            href="/resources"
                            className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Resources
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-40">
                <div
                    className="h-full bg-gradient-to-r from-teal-400 to-teal-500 transition-all duration-300 ease-out"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            {/* Blog Post Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 mt-16 lg:mt-20">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 font-medium transition-colors duration-200 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                        Back to Resources
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {post.author}
                            </div>
                        </div>
                    </div>

                    <h1 className="font-montserrat font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {/* Removed Share and Save buttons */}
                    </div>
                </header>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 mb-12">
                    <div
                        className="prose prose-lg max-w-none font-source-sans text-gray-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        style={{
                            fontSize: '1.125rem',
                            lineHeight: '1.75',
                        }}
                    />
                </div>

                {/* Author Bio */}
                <div className="bg-gradient-to-br from-teal-25 to-blue-25 rounded-2xl border border-teal-100 p-8 lg:p-12 mb-12">
                    <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-2xl">
                                {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-montserrat font-bold text-gray-800 text-xl mb-3">
                                {post.author}
                            </h3>
                            <p className="font-source-sans text-gray-600 text-lg leading-relaxed mb-4">
                                Helen Nguli is the CEO of ESTC, a leading provider of leadership development solutions. With over 20 years of experience in the industry, she has helped numerous organizations build effective leadership programs and develop leaders who drive business success.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    2,847 views
                                </span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
} 