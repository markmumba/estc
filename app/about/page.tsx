import AboutHero from "@/components/ui/about/about-hero";
import CeoSpotlight from "@/components/ui/about/ceo-spotlight";
import MissionVision from "@/components/ui/about/mission-vision";
import OurStory from "@/components/ui/about/our-story";
import CoreValues from "@/components/ui/about/core-values";
import AwardsPartnerships from "@/components/ui/about/awards-partnerships";
import FinalCTA from "@/components/ui/about/final-cta";
import Footer from "@/components/ui/shared/footer";
import Navbar from "@/components/ui/shared/navbar";

export default function About() {
    return (
        <main>
            <Navbar />
            <AboutHero />
            <CeoSpotlight />
            <MissionVision />
            <OurStory />
            <CoreValues />
            <AwardsPartnerships />
            <FinalCTA />
            <Footer />
        </main>
    );
}
