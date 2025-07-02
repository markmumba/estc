'use client';

import { useState, useEffect, useRef } from 'react';

interface Course {
    id: string;
    title: string;
    duration: string;
    price: number;
}

interface CalculatorState {
    participants: number;
    days: number;
    selectedCourses: string[];
    discountCode: string;
    isDiscountApplied: boolean;
    discountPercentage: number;
}

const sampleCourses: Course[] = [
    { id: '1', title: 'Executive Marketing Skills', duration: '2 days', price: 25000 },
    { id: '2', title: 'Customer Service Excellence', duration: '2 days', price: 20000 },
    { id: '3', title: 'Market Research Strategy', duration: '2 days', price: 22000 },
    { id: '4', title: 'Corporate Governance', duration: '2 days', price: 30000 },
    { id: '5', title: 'Negotiation Skills Training', duration: '1 day', price: 15000 },
    { id: '6', title: 'Project Management', duration: '3 days', price: 35000 },
    { id: '7', title: 'Cyber Security Masterclass', duration: '3 days', price: 40000 },
    { id: '8', title: 'Accounting & Finance', duration: '2 days', price: 28000 }
];

const validDiscountCodes = {
    'WELCOME10': 10,
    'BULK15': 15,
    'CORP20': 20
};

export default function CostCalculator() {
    const [calculator, setCalculator] = useState<CalculatorState>({
        participants: 10,
        days: 2,
        selectedCourses: [],
        discountCode: '',
        isDiscountApplied: false,
        discountPercentage: 0
    });

    const [showEstimate, setShowEstimate] = useState(false);
    const [isDiscountValid, setIsDiscountValid] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [previewTotal, setPreviewTotal] = useState(0);

    const calculatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 599);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Sticky behavior for desktop
    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            if (calculatorRef.current) {
                const rect = calculatorRef.current.getBoundingClientRect();
                const gridBottom = document.querySelector('.course-grid-section')?.getBoundingClientRect().bottom || 0;
                setIsSticky(rect.top <= 20 && window.scrollY + window.innerHeight < gridBottom);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    // Calculate preview total
    useEffect(() => {
        const selectedCourseData = sampleCourses.filter(course =>
            calculator.selectedCourses.includes(course.id)
        );

        if (selectedCourseData.length === 0) {
            setPreviewTotal(0);
            return;
        }

        const basePrice = selectedCourseData.reduce((sum, course) => sum + course.price, 0);
        const total = basePrice * calculator.participants * (calculator.days / 2); // Assuming 2 days is base unit
        setPreviewTotal(total);
    }, [calculator.participants, calculator.days, calculator.selectedCourses]);

    const handleParticipantChange = (value: number) => {
        const newValue = Math.max(1, Math.min(500, value));
        setCalculator(prev => ({ ...prev, participants: newValue }));
    };

    const handleCourseToggle = (courseId: string) => {
        setCalculator(prev => ({
            ...prev,
            selectedCourses: prev.selectedCourses.includes(courseId)
                ? prev.selectedCourses.filter(id => id !== courseId)
                : [...prev.selectedCourses, courseId]
        }));
    };

    const handleDiscountApply = () => {
        const code = calculator.discountCode.toUpperCase();
        if (validDiscountCodes[code as keyof typeof validDiscountCodes]) {
            setCalculator(prev => ({
                ...prev,
                isDiscountApplied: true,
                discountPercentage: validDiscountCodes[code as keyof typeof validDiscountCodes]
            }));
            setIsDiscountValid(true);
        } else {
            setIsDiscountValid(false);
        }
    };

    const calculateTotal = () => {
        const selectedCourseData = sampleCourses.filter(course =>
            calculator.selectedCourses.includes(course.id)
        );

        if (selectedCourseData.length === 0) return 0;

        const basePrice = selectedCourseData.reduce((sum, course) => sum + course.price, 0);
        const subtotal = basePrice * calculator.participants * (calculator.days / 2);
        const discount = calculator.isDiscountApplied ? (subtotal * calculator.discountPercentage / 100) : 0;

        return subtotal - discount;
    };

    const formatPrice = (amount: number) => {
        return `KES ${amount.toLocaleString()}`;
    };

    const canCalculate = calculator.selectedCourses.length > 0;

    const total = calculateTotal();
    const subtotal = previewTotal;
    const discount = calculator.isDiscountApplied ? (subtotal * calculator.discountPercentage / 100) : 0;

    return (
        <div
            ref={calculatorRef}
            className={`${isMobile ? 'w-full' : 'w-80'} ${isSticky ? 'sticky top-4' : ''}`}
        >
            {/* Mobile Collapsible Header */}
            {isMobile && (
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="w-full bg-white border border-gray-200 rounded-lg p-4 mb-4 flex items-center justify-between shadow-sm"
                >
                    <span className="font-montserrat font-semibold text-gray-800">Estimate Cost</span>
                    <svg
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isCollapsed ? '' : 'rotate-180'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            )}

            {/* Calculator Widget */}
            {(!isMobile || !isCollapsed) && (
                <div className="bg-white rounded-lg shadow-soft p-6 border border-gray-100">
                    {/* Header */}
                    <h3 className="font-montserrat font-semibold text-gray-800 text-xl mb-6">
                        Estimate Your Training Investment
                    </h3>

                    {/* Participants Input */}
                    <div className="mb-6">
                        <label className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            Number of participants
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                                onClick={() => handleParticipantChange(calculator.participants - 1)}
                                className="px-3 py-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                            </button>
                            <input
                                type="number"
                                min="1"
                                max="500"
                                value={calculator.participants}
                                onChange={(e) => handleParticipantChange(parseInt(e.target.value) || 1)}
                                className="flex-1 px-3 py-2 text-center border-0 focus:ring-0 focus:outline-none"
                            />
                            <button
                                onClick={() => handleParticipantChange(calculator.participants + 1)}
                                className="px-3 py-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Days Input */}
                    <div className="mb-6">
                        <label className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            Number of days
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                                onClick={() => setCalculator(prev => ({ ...prev, days: Math.max(1, prev.days - 1) }))}
                                className="px-3 py-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                            </button>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={calculator.days}
                                onChange={(e) => setCalculator(prev => ({ ...prev, days: Math.max(1, Math.min(10, parseInt(e.target.value) || 1)) }))}
                                className="flex-1 px-3 py-2 text-center border-0 focus:ring-0 focus:outline-none"
                            />
                            <button
                                onClick={() => setCalculator(prev => ({ ...prev, days: Math.min(10, prev.days + 1) }))}
                                className="px-3 py-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Course Selection */}
                    <div className="mb-6">
                        <label className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            Select courses
                        </label>
                        <div className="max-h-48 overflow-y-auto border border-gray-300 rounded-md p-2">
                            {sampleCourses.map((course) => (
                                <label key={course.id} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={calculator.selectedCourses.includes(course.id)}
                                        onChange={() => handleCourseToggle(course.id)}
                                        className="mr-3 h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
                                    />
                                    <div className="flex-1">
                                        <div className="font-source-sans text-sm text-gray-800">{course.title}</div>
                                        <div className="font-source-sans text-xs text-gray-500">{course.duration} · {formatPrice(course.price)}</div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Discount Code */}
                    <div className="mb-6">
                        <label className="block font-source-sans text-gray-700 text-sm font-medium mb-2">
                            Have a promo code?
                        </label>
                        <div className="flex">
                            <input
                                type="text"
                                value={calculator.discountCode}
                                onChange={(e) => setCalculator(prev => ({ ...prev, discountCode: e.target.value }))}
                                placeholder="Enter code"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            />
                            <button
                                onClick={handleDiscountApply}
                                className="px-4 py-2 bg-teal-500 text-white font-medium rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                Apply
                            </button>
                        </div>
                        {!isDiscountValid && (
                            <p className="text-red-500 text-sm mt-1">Code not recognized</p>
                        )}
                        {calculator.isDiscountApplied && (
                            <p className="text-green-600 text-sm mt-1">Code applied: {calculator.discountPercentage}% off</p>
                        )}
                    </div>

                    {/* Preview Total */}
                    {previewTotal > 0 && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-md">
                            <p className="font-source-sans text-sm text-gray-600">
                                Preview: {formatPrice(previewTotal)}
                            </p>
                        </div>
                    )}

                    {/* Calculate Button */}
                    <button
                        onClick={() => setShowEstimate(true)}
                        disabled={!canCalculate}
                        className={`w-full py-3 px-4 rounded-md font-montserrat font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${canCalculate
                            ? 'bg-teal-500 text-white hover:bg-teal-600 hover:scale-105 focus:ring-teal-500'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        title={!canCalculate ? 'Please select at least one course' : ''}
                    >
                        Show Estimate
                    </button>

                    {/* Result Display */}
                    {showEstimate && total > 0 && (
                        <div className="mt-6 p-4 bg-gray-50 rounded-md">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-source-sans text-gray-600">Subtotal:</span>
                                    <span className="font-source-sans text-gray-800">{formatPrice(subtotal)}</span>
                                </div>
                                {discount > 0 && (
                                    <div className="flex justify-between">
                                        <span className="font-source-sans text-gray-600">Discount:</span>
                                        <span className="font-source-sans text-green-600">- {formatPrice(discount)} ({calculator.discountPercentage}% promo)</span>
                                    </div>
                                )}
                                <div className="border-t border-gray-300 pt-2">
                                    <div className="flex justify-between">
                                        <span className="font-montserrat font-bold text-red-500 text-lg">Estimated Total:</span>
                                        <span className="font-montserrat font-bold text-red-500 text-lg">{formatPrice(total)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Enquire CTA */}
                            <button className="w-full mt-4 py-2 px-4 border border-red-500 text-red-500 font-montserrat font-medium rounded-md hover:bg-red-500 hover:bg-opacity-10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                Enquire Now
                            </button>
                        </div>
                    )}
                </div>
            )}

            <style jsx>{`
                .shadow-soft {
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                }
            `}</style>
        </div>
    );
} 