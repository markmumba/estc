'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import Navbar from "@/components/ui/shared/navbar";
import Footer from "@/components/ui/shared/footer";

// This would typically come from an API or CMS
const blogPosts = [
    {
        id: '1',
        title: 'The Future of Leadership Development in the Digital Age',
        content: `
            <p class="mb-6">Leadership development has always been a cornerstone of organizational success, but the digital age has fundamentally transformed how we approach this critical aspect of business growth. As technology continues to reshape the workplace, leaders must adapt to new challenges and opportunities.</p>
            
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">The Digital Transformation of Leadership</h2>
            <p class="mb-6">The rapid pace of technological change has created a new paradigm for leadership development. Traditional leadership models focused on hierarchical structures and command-and-control approaches are giving way to more collaborative, adaptive leadership styles.</p>
            
            <p class="mb-6">Today's leaders must navigate complex digital ecosystems, manage remote and hybrid teams, and make data-driven decisions while maintaining human connection and emotional intelligence. This requires a new set of skills and competencies that go beyond traditional management training.</p>
            
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Key Trends Shaping Leadership Development</h2>
            <ul class="list-disc list-inside mb-6 space-y-2">
                <li><strong>Personalized Learning:</strong> AI-powered platforms that adapt to individual learning styles and needs</li>
                <li><strong>Microlearning:</strong> Bite-sized, just-in-time learning modules that fit busy schedules</li>
                <li><strong>Virtual Reality:</strong> Immersive simulations for leadership scenarios and decision-making</li>
                <li><strong>Social Learning:</strong> Peer-to-peer learning networks and collaborative platforms</li>
                <li><strong>Data Analytics:</strong> Real-time feedback and performance tracking</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Building Digital Leadership Competencies</h2>
            <p class="mb-6">To thrive in the digital age, leaders need to develop several key competencies:</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-3">1. Digital Literacy</h3>
            <p class="mb-4">Understanding emerging technologies and their business implications is crucial. Leaders don't need to be technical experts, but they must be comfortable with digital tools and platforms.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-3">2. Adaptive Thinking</h3>
            <p class="mb-4">The ability to quickly adapt to changing circumstances and make decisions in uncertain environments is more important than ever.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-3">3. Emotional Intelligence</h3>
            <p class="mb-4">Despite the digital nature of modern work, human connection remains vital. Leaders must excel at building relationships and managing emotions in virtual environments.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-3">4. Data-Driven Decision Making</h3>
            <p class="mb-4">The ability to analyze data, identify patterns, and make informed decisions based on evidence rather than intuition alone.</p>
            
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">The Role of Organizations</h2>
            <p class="mb-6">Organizations play a critical role in supporting leadership development in the digital age. This includes:</p>
            
            <ul class="list-disc list-inside mb-6 space-y-2">
                <li>Investing in modern learning technologies and platforms</li>
                <li>Creating opportunities for experiential learning and real-world application</li>
                <li>Fostering a culture of continuous learning and development</li>
                <li>Providing mentorship and coaching programs</li>
                <li>Recognizing and rewarding leadership development efforts</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Looking Ahead</h2>
            <p class="mb-6">As we look to the future, leadership development will continue to evolve alongside technology. The most successful organizations will be those that embrace change and invest in developing leaders who can navigate the complexities of the digital age.</p>
            
            <p class="mb-6">The key is to balance technological advancement with human-centered leadership principles. While digital tools can enhance learning and development, they should complement rather than replace the human elements of leadership.</p>
            
            <p class="mb-6">By staying ahead of these trends and investing in comprehensive leadership development programs, organizations can ensure they have the leaders they need to succeed in an increasingly digital world.</p>
        `,
        category: 'Leadership',
        author: 'Dr. Sarah Johnson',
        date: '2024-01-15',
        readTime: '8 min read',
        tags: ['Leadership', 'Digital Transformation', 'Future of Work', 'Technology', 'Management']
    }
];

export default function BlogPost() {
    const params = useParams();
    const postId = params.id as string;

    const post = blogPosts.find(p => p.id === postId);

    if (!post) {
        return (
            <main className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
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
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Blog Post Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 font-medium transition-colors duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Resources
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {post.author}
                            </div>
                        </div>
                    </div>

                    <h1 className="font-montserrat font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Share Button */}
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-200">
                        <Share2 className="w-4 h-4" />
                        Share Article
                    </button>
                </header>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">
                    <div
                        className="prose prose-lg max-w-none font-source-sans"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>

                {/* Author Bio */}
                <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                                {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                        <div>
                            <h3 className="font-montserrat font-semibold text-gray-800 text-lg mb-2">
                                {post.author}
                            </h3>
                            <p className="font-source-sans text-gray-600">
                                Expert in leadership development and organizational psychology with over 15 years of experience helping organizations build effective leadership programs.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
} 