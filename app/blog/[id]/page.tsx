import { blogPosts } from '../../../data/blog-posts';
import BlogPostClient from './BlogPostClient';

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

interface BlogPostPageProps {
    params: Promise<{ id: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { id } = await params;
    const post = blogPosts.find(p => p.id === id);

    return <BlogPostClient post={post} />;
} 