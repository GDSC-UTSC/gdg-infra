'use client';

import React from 'react';
import { Button } from '@buildwithai/components/ui/button';
import { Calendar, MapPin, ExternalLink, Clock, Mail } from 'lucide-react';
import Image from 'next/image';

/**
 * Hero Section Component
 *
 * Main hero section with:
 * - Animated cosmic background
 * - Event title and description
 * - Event details card
 * - Registration CTA
 */
export function HeroSection() {

    const LUMA_EVENT_URL = 'https://lu.ma/cpkos17w';


    const eventDetails = {
        date: 'March 28, 2026',
        time: '9:00 AM - 5:00 PM EST',
        location: 'University of Toronto Scarborough',
        email: 'gdgutsc@gmail.com',
    };

    return (
        <>
            <section className="relative overflow-hidden py-20">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black/50 to-black pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4">
                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Build with AI
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-center text-gray-400 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">                         Biggest AI Conference + Competition at UofT
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-8 text-xl font-semibold shadow-lg shadow-purple-500/50"
                            onClick={() => window.open(LUMA_EVENT_URL, '_blank')}
                        >
                            Apply to be a Participant
                            <ExternalLink className="ml-3 w-6 h-6" />
                        </Button>
                    </div>

                    {/* Event Details Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mt-16">
                        {/* Left: Event Details Card */}
                        <div className="animate-in fade-in slide-in-from-left duration-1000 delay-200">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Event Details</h2>

                            {/* Glass Card */}
                            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 space-y-6">
                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white text-lg">{eventDetails.location}</p>
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white text-lg">{eventDetails.date}</p>
                                    </div>
                                </div>

                                {/* Time */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white text-lg">{eventDetails.time}</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <a href={`mailto:${eventDetails.email}`} className="text-white text-lg hover:text-purple-400 transition-colors">
                                            {eventDetails.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Earth Image - Hidden on mobile, visible on desktop */}
                        <div className="hidden lg:flex items-center justify-center animate-in fade-in slide-in-from-right duration-1000 delay-300">
                            <div className="relative w-full max-w-md aspect-square">
                                <Image
                                    src="/earth.png"
                                    alt="Earth at night"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </section>
        </>
    );
}