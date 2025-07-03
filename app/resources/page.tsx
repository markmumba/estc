
import ResourcesHero from "@/components/ui/resources/resources-hero";
import BlogGrid from "@/components/ui/resources/blog-grid";
import Navbar from "@/components/ui/shared/navbar";
import Footer from "@/components/ui/shared/footer";

export default function Resources() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <ResourcesHero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <BlogGrid />
            </div>

            <Footer />
        </main>
    );
} 