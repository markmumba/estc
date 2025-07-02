'use client';

import { useState } from 'react';

interface Office {
    id: string;
    name: string;
    address: string;
    city: string;
    phone: string;
    email: string;
    hours: string;
    isMain: boolean;
}

const offices: Office[] = [
    {
        id: '1',
        name: 'Nairobi Main Office',
        address: 'Westlands Business District, 3rd Floor, ABC Building',
        city: 'Nairobi, Kenya',
        phone: '+254 700 000 000',
        email: 'nairobi@estc.co.ke',
        hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
        isMain: true
    },
    {
        id: '2',
        name: 'Mombasa Branch',
        address: 'Mombasa CBD, 2nd Floor, XYZ Plaza',
        city: 'Mombasa, Kenya',
        phone: '+254 700 000 001',
        email: 'mombasa@estc.co.ke',
        hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
        isMain: false
    },
    {
        id: '3',
        name: 'Kisumu Branch',
        address: 'Kisumu City Centre, 1st Floor, Lake View Building',
        city: 'Kisumu, Kenya',
        phone: '+254 700 000 002',
        email: 'kisumu@estc.co.ke',
        hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
        isMain: false
    }
];

export default function OfficeLocations() {
    const [activeOffice, setActiveOffice] = useState<string>('1');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-montserrat font-bold text-gray-800 text-xl mb-3">
                    Our Offices
                </h3>
                <p className="font-source-sans text-gray-600 text-sm">
                    Visit us at any of our locations across Kenya
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
                                            Main Office
                                        </span>
                                    )}
                                </div>
                                <p className="font-source-sans text-gray-600 text-sm">
                                    {office.city}
                                </p>
                            </div>
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
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

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-gray-100 rounded-lg">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <a
                                    href={`tel:${office.phone}`}
                                    className="font-source-sans text-gray-700 text-sm hover:text-teal-600 transition-colors duration-200"
                                >
                                    {office.phone}
                                </a>
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
                            <button className="w-full py-2 px-4 border border-teal-500 text-teal-500 font-montserrat font-medium text-sm rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                                Get Directions
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h4 className="font-montserrat font-semibold text-gray-800 text-lg mb-4">
                    Additional Information
                </h4>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h5 className="font-montserrat font-medium text-gray-800 text-sm mb-1">
                                Parking Available
                            </h5>
                            <p className="font-source-sans text-gray-600 text-sm">
                                Free parking available at all office locations
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h5 className="font-montserrat font-medium text-gray-800 text-sm mb-1">
                                Accessibility
                            </h5>
                            <p className="font-source-sans text-gray-600 text-sm">
                                All offices are wheelchair accessible
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 6v6m-4-6h8m-8 6h8" />
                            </svg>
                        </div>
                        <div>
                            <h5 className="font-montserrat font-medium text-gray-800 text-sm mb-1">
                                Security
                            </h5>
                            <p className="font-source-sans text-gray-600 text-sm">
                                24/7 security and CCTV monitoring
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 