import Hero from '../components/ui/homepage/hero';
import FeaturedCourses from '../components/ui/homepage/featured-courses';
import WhyEstc from '../components/ui/homepage/why-estc';
import LearningPathTeaser from '../components/ui/homepage/learning-path-teaser';
import FinalCta from '../components/ui/homepage/final-cta';
import Footer from '@/components/ui/shared/footer';
import Testimonials from '@/components/ui/homepage/testimonial';
import ResourcesInsights from '@/components/ui/homepage/resource-insight';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCourses />
      <WhyEstc />
      <LearningPathTeaser />
      <Testimonials />
      <ResourcesInsights />
      <FinalCta />
      <Footer />
    </main>
  );
}