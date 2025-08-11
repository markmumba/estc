'use client';

import { useState } from 'react';

interface Office {
    id: string;
    name: string;
    address: string;
    city: string;
    email: string;
    hours: string;
    isMain: boolean;
}

const offices: Office[] = [
    {
        id: '1',
        name: 'Nairobi Embakasi Office',
        address: 'Nairobi, Kenya',
        city: 'Nairobi, Kenya',
        email: 'info@exceptionalskills.co.ke',
        hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
        isMain: false
    }
];

export default function OfficeLocations() {
    const [activeOffice, setActiveOffice] = useState<string>('1');
    const [showPhoneNumberModal, setShowPhoneNumberModal] = useState(false);
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-montserrat font-bold text-gray-800 text-xl mb-3">
                    Our Office Location
                </h3>
                <p className="font-source-sans text-gray-600 text-sm">
                    Visit us at our office in Embakasi, Nairobi
                </p>
            </div>

            {/* Office Cards */}
            <div className="space-y-4">
                {offices.map((office) => (
                    <div
                        key={office.id}
                        className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 cursor-pointer transition-all duration-200 hover:shadow-md ${activeOffice === office.id ? 'ring-2 ring-teal-500' : ''
                            }`}
                        onClick={() => setActiveOffice(office.id)}
                    >
                        {/* Office Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-montserrat font-semibold text-gray-800 text-lg">
                                        {office.name}
                                    </h4>
                                    {office.isMain && (
                                        <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                                            Embakasi Office
                                        </span>
                                    )}
                                </div>
                                <p className="font-source-sans text-gray-600 text-sm">
                                    {office.city}
                                </p>
                            </div>
                        </div>

                        {/* Office Details */}
                        <div className="space-y-3">
                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <div className="p-1.5 bg-gray-100 rounded-lg mt-0.5">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-source-sans text-gray-700 text-sm leading-relaxed">
                                        {office.address}
                                    </p>
                                </div>
                            </div>

                        

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-gray-100 rounded-lg">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a
                                    href={`mailto:${office.email}`}
                                    className="font-source-sans text-gray-700 text-sm hover:text-teal-600 transition-colors duration-200"
                                >
                                    {office.email}
                                </a>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-gray-100 rounded-lg">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="font-source-sans text-gray-700 text-sm">
                                    {office.hours}
                                </span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <button className="w-full py-2 px-4 border border-teal-500 text-teal-500 font-montserrat font-medium text-sm rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" onClick={() => setShowPhoneNumberModal(true)}>
                                Call Us
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showPhoneNumberModal && <PhoneNumberModal onClose={() => setShowPhoneNumberModal(false)}   />}
        </div>
    );
} 

const PhoneNumberModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div 
            className="fixed inset-0 bg-black/40 flex items-center justify-center"
            onClick={onClose}
        >
            <div 
                className="bg-white p-4 rounded-lg flex flex-col items-center justify-center space-y-4"
                onClick={e => e.stopPropagation()}
            >
                <h1 className="text-2xl font-bold text-black">0720611517</h1>
                <p className="text-sm text-gray-500">Call us to discuss your training needs</p>
                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}   