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
                        Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {/* Header */}
            <div className="mb-8">
                <h2 className="font-montserrat font-bold text-gray-800 text-2xl md:text-3xl mb-3">
                    Send us a Message
                </h2>
                <p className="font-source-sans text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm ${errors.firstName ? 'border-red-300' : 'border-gray-300'
                                }`}
                            placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm ${errors.lastName ? 'border-red-300' : 'border-gray-300'
                                }`}
                            placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm ${errors.email ? 'border-red-300' : 'border-gray-300'
                                }`}
                            placeholder="Enter your email address"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm"
                            placeholder="Enter your phone number"
                        />
                    </div>
                </div>

                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="company" className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            Company Name *
                        </label>
                        <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm ${errors.company ? 'border-red-300' : 'border-gray-300'
                                }`}
                            placeholder="Enter your company name"
                        />
                        {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="position" className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            Job Title
                        </label>
                        <input
                            type="text"
                            id="position"
                            value={formData.position}
                            onChange={(e) => handleInputChange('position', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm"
                            placeholder="Enter your job title"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                        Subject *
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm ${errors.subject ? 'border-red-300' : 'border-gray-300'
                            }`}
                        placeholder="What is this regarding?"
                    />
                    {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                </div>

                {/* Training Interest */}
                <div>
                    <label className="block font-source-sans text-gray-700 text-sm font-medium mb-3">
                        Training Areas of Interest
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {trainingOptions.map((option) => (
                            <label key={option} className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={formData.trainingInterest.includes(option)}
                                    onChange={() => handleTrainingInterestToggle(option)}
                                    className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <span className="ml-3 font-source-sans text-sm text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                    <label className="block font-source-sans text-gray-700 text-sm font-medium mb-3">
                        Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="preferredContact"
                                value="email"
                                checked={formData.preferredContact === 'email'}
                                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                                className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300"
                            />
                            <span className="ml-2 font-source-sans text-sm text-gray-700">Email</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="preferredContact"
                                value="phone"
                                checked={formData.preferredContact === 'phone'}
                                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                                className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300"
                            />
                            <span className="ml-2 font-source-sans text-sm text-gray-700">Phone</span>
                        </label>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-source-sans text-sm resize-none ${errors.message ? 'border-red-300' : 'border-gray-300'
                            }`}
                        placeholder="Tell us more about your training needs..."
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-montserrat font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-teal-500 hover:bg-teal-600 focus:ring-teal-500 hover:scale-105'
                        }`}
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
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