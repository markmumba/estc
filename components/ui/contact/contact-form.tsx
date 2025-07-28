'use client';

import { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    position: string;
    subject: string;
    message: string;
    preferredContact: string;
    trainingInterest: string[];
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        trainingInterest: []
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const trainingOptions = [
        'Leadership & Management',
        'Customer Service',
        'Sales & Marketing',
        'Project Management',
        'IT & Digital Skills',
        'Finance & Accounting',
        'HR & People Development',
        'Custom Training Programs'
    ];

    const handleInputChange = (field: keyof FormData, value: string | string[]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.company.trim()) newErrors.company = 'Company name is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    position: '',
                    subject: '',
                    message: '',
                    preferredContact: 'email',
                    trainingInterest: []
                });
                setIsSubmitted(false);
            }, 3000);
        }, 2000);
    };

    const handleTrainingInterestToggle = (interest: string) => {
        setFormData(prev => ({
            ...prev,
            trainingInterest: prev.trainingInterest.includes(interest)
                ? prev.trainingInterest.filter(item => item !== interest)
                : [...prev.trainingInterest, interest]
        }));
    };

    if (isSubmitted) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="font-montserrat font-semibold text-gray-800 text-xl mb-2">
                        Message Sent Successfully!
                    </h3>
                    <p className="font-source-sans text-gray-600">
                        Thank you for contacting us. We&lsquo;ll get back to you within 24 hours.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-12">
            {/* Header */}
            <div className="mb-10 text-center">
                <h2 className="font-montserrat font-bold text-gray-800 text-3xl lg:text-4xl mb-4">
                    Send us a Message
                </h2>
                <p className="font-source-sans text-gray-600 text-lg max-w-2xl mx-auto">
                    Fill out the form below and we&lsquo;ll get back to you as soon as possible.
                </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block font-source-sans text-gray-800 text-base font-semibold mb-3">
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-base transition-all duration-200 placeholder-gray-500 placeholder-opacity-75 ${errors.firstName ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                                }`}
                            placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                            <p className="text-red-600 text-sm mt-2 font-medium">{errors.firstName}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block font-source-sans text-gray-800 text-base font-semibold mb-3">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-base transition-all duration-200 placeholder-gray-500 placeholder-opacity-75 ${errors.lastName ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                                }`}
                            placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                            <p className="text-red-600 text-sm mt-2 font-medium">{errors.lastName}</p>
                        )}
                    </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block font-source-sans text-gray-800 text-base font-semibold mb-3">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-base transition-all duration-200 placeholder-gray-500 placeholder-opacity-75 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                                }`}
                            placeholder="your.email@company.com"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-2 font-medium">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block font-source-sans text-gray-800 text-base font-semibold mb-3">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-base transition-all duration-200 hover:border-gray-400 placeholder-gray-500 placeholder-opacity-75"
                            placeholder="+254 720 611 517"
                        />
                    </div>
                </div>

                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="company" className="block font-source-sans text-gray-800 text-base font-semibold mb-3">
                            Company Name *
                        </label>
                        <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-base transition-all duration-200 placeholder-gray-500 placeholder-opacity-75 ${errors.company ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                                }`}
                            placeholder="Enter your company name"
                        />
                        {errors.company && (
                            <p className="text-red-600 text-sm mt-2 font-medium">{errors.company}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="position" className="block font-source-sans text-gray-800 text-base font-semibold mb-3">
                            Job Title
                        </label>
                        <input
                            type="text"
                            id="position"
                            value={formData.position}
                            onChange={(e) => handleInputChange('position', e.target.value)}
                            className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-base transition-all duration-200 hover:border-gray-400 placeholder-gray-500 placeholder-opacity-75"
                            placeholder="Enter your job title"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className="block font-source-sans text-gray-800 text-base font-semibold mb-3">
                        Subject *
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-base transition-all duration-200 placeholder-gray-500 placeholder-opacity-75 ${errors.subject ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                            }`}
                        placeholder="What is this regarding?"
                    />
                    {errors.subject && (
                        <p className="text-red-600 text-sm mt-2 font-medium">{errors.subject}</p>
                    )}
                </div>

                {/* Training Interest */}
                <div>
                    <label className="block font-source-sans text-gray-800 text-base font-semibold mb-4">
                        Training Areas of Interest
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {trainingOptions.map((option) => (
                            <label key={option} className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.trainingInterest.includes(option)}
                                    onChange={() => handleTrainingInterestToggle(option)}
                                    className="h-5 w-5 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <span className="ml-3 font-source-sans text-base text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                    <label className="block font-source-sans text-gray-800 text-base font-semibold mb-4">
                        Preferred Contact Method
                    </label>
                    <div className="flex gap-6">
                        <label className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 cursor-pointer">
                            <input
                                type="radio"
                                name="preferredContact"
                                value="email"
                                checked={formData.preferredContact === 'email'}
                                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                                className="h-5 w-5 text-teal-500 focus:ring-teal-500 border-gray-300"
                            />
                            <span className="ml-3 font-source-sans text-base text-gray-700">Email</span>
                        </label>
                        <label className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 cursor-pointer">
                            <input
                                type="radio"
                                name="preferredContact"
                                value="phone"
                                checked={formData.preferredContact === 'phone'}
                                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                                className="h-5 w-5 text-teal-500 focus:ring-teal-500 border-gray-300"
                            />
                            <span className="ml-3 font-source-sans text-base text-gray-700">Phone</span>
                        </label>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block font-source-sans text-gray-800 text-base font-semibold mb-3">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-base resize-none transition-all duration-200 placeholder-gray-500 placeholder-opacity-75 ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                            }`}
                        placeholder="Tell us more about your training needs and how we can help..."
                    />
                    {errors.message && (
                        <p className="text-red-600 text-sm mt-2 font-medium">{errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 px-8 rounded-xl font-montserrat font-bold text-lg text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 focus:ring-teal-500 hover:shadow-xl hover:scale-105'
                        }`}
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                        </div>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
} 