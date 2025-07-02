'use client';

import ContactHero from "@/components/ui/contact/contact-hero";
import ContactForm from "@/components/ui/contact/contact-form";
import OfficeLocations from "@/components/ui/contact/office-locations";
import ContactFAQ from "@/components/ui/contact/contact-faq";
import Navbar from "@/components/ui/shared/navbar";
import Footer from "@/components/ui/shared/footer";

export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <ContactHero />

            {/* Main Content */}
            <div className="relative">
                {/* Contact Form and Office Locations */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* Contact Form */}
                        <div className="flex-1 lg:max-w-2xl">
                            <ContactForm />
                        </div>

                        {/* Office Locations */}
                        <div className="lg:w-96 lg:flex-shrink-0">
                            <OfficeLocations />
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <ContactFAQ />
            </div>

            <Footer />
        </main>
    );
}
