'use client';

import { useState } from 'react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    {
        id: '1',
        question: 'How quickly do you respond to inquiries?',
        answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly at +254 700 000 000.',
        category: 'General'
    },
    {
        id: '2',
        question: 'Do you offer custom training programs?',
        answer: 'Yes, we specialize in creating bespoke training programs tailored to your organization\'s specific needs, industry, and learning objectives.',
        category: 'Training'
    },
    {
        id: '3',
        question: 'What is the typical duration of your training programs?',
        answer: 'Our programs range from 1-day workshops to comprehensive 5-day courses. We can also design longer programs for specific organizational needs.',
        category: 'Training'
    },
    {
        id: '4',
        question: 'Do you provide training materials and certificates?',
        answer: 'Yes, all participants receive comprehensive training materials and a certificate of completion upon finishing the program.',
        category: 'Training'
    },
    {
        id: '5',
        question: 'Can you conduct training at our office location?',
        answer: 'Absolutely! We offer both in-house training at your premises and online training sessions. We can also arrange training at our facilities.',
        category: 'Training'
    },
    {
        id: '6',
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfers, mobile money (M-Pesa, Airtel Money), and corporate checks. Payment terms are typically 50% upfront and 50% upon completion.',
        category: 'Payment'
    },
    {
        id: '7',
        question: 'Do you offer group discounts?',
        answer: 'Yes, we provide volume discounts for organizations sending multiple participants. Contact us for specific pricing based on your group size.',
        category: 'Payment'
    },
    {
        id: '8',
        question: 'What if we need to reschedule a training session?',
        answer: 'We understand that schedules can change. We offer flexible rescheduling options with at least 48 hours notice before the scheduled session.',
        category: 'General'
    }
];

const categories = ['All', 'General', 'Training', 'Payment'];

export default function ContactFAQ() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [openItems, setOpenItems] = useState<string[]>([]);

    const filteredFAQs = activeCategory === 'All'
        ? faqData
        : faqData.filter(faq => faq.category === activeCategory);

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-montserrat font-bold text-gray-800 text-3xl md:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-source-sans text-gray-600 text-lg max-w-2xl mx-auto">
                        Find answers to common questions about our training services and contact process
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${activeCategory === category
                                ? 'bg-teal-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {filteredFAQs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleItem(faq.id)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                            >
                                <h3 className="font-montserrat font-semibold text-gray-800 text-lg pr-4">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openItems.includes(faq.id) ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openItems.includes(faq.id) && (
                                <div className="px-6 pb-4">
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="font-source-sans text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12 pt-8 border-t border-gray-200">
                    <h3 className="font-montserrat font-semibold text-gray-800 text-xl mb-3">
                        Still have questions?
                    </h3>
                    <p className="font-source-sans text-gray-600 mb-6">
                        Can&lsquo;t find what you&lsquo;re looking for? Our team is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+254700000000"
                            className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-montserrat font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Us Now
                        </a>
                        <a
                            href="mailto:info@estc.co.ke"
                            className="inline-flex items-center justify-center px-6 py-3 border border-teal-500 text-teal-500 font-montserrat font-semibold rounded-lg hover:bg-teal-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 