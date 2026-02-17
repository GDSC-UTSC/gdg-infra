'use client';

import React, { useState, useEffect } from 'react';
import { Users, FileText, Lightbulb, Users2, Presentation, Trophy } from 'lucide-react';
import Image from 'next/image';

/**
 * About BWAI Section Component
 *
 * Displays information about Build With AI event
 */
export function StatsSection() {
    const lastYearStats = [
        {
            icon: Users,
            label: 'Participants',
            value: 500,
            suffix: '+',
            color: 'text-purple-400',
        },
        {
            icon: FileText,
            label: 'Registrations',
            value: 800,
            suffix: '+',
            color: 'text-blue-400',
        },
    ];

    const expectations = [
        {
            icon: Presentation,
            title: 'Compelling keynote speeches',
            description: 'From experts in the industry',
        },
        {
            icon: Lightbulb,
            title: 'Hands-on workshops',
            description: 'About evolving technologies like AI',
        },
        {
            icon: Users2,
            title: 'Networking & panel discussion',
            description: 'Connect with professionals and peers',
        },
        {
            icon: Trophy,
            title: 'Case Competition',
            description: 'For best AI hack of the problem',
        },
    ];

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    About BWAI
                </h2>

                {/* Description */}
                <p className="text-xl text-center text-gray-300 max-w-4xl mx-auto mb-16">
                    Build With AI is the Biggest AI Conference + Competition at the University of Toronto! Which brings together passionate and curious minds to explore the future of Artificial Intelligence
                </p>

                {/* Last Year Stats */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                        Last Year We Had
                    </h3>
                    <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {lastYearStats.map((stat, index) => (
                            <StatCard key={index} {...stat} index={index} />
                        ))}
                    </div>
                </div>

                {/* Photos Section - Placeholder */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Photo placeholders - replace /placeholder.jpg with your actual image paths */}
                        <div className="relative h-64 rounded-lg overflow-hidden bg-white/5 border border-white/10">
                            <div className="flex items-center justify-center h-full text-gray-500">
                                <div className="text-center">
                                    <Users className="w-16 h-16 mx-auto mb-2 opacity-50" />
                                    <p>Team Photo</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 rounded-lg overflow-hidden bg-white/5 border border-white/10">
                            <div className="flex items-center justify-center h-full text-gray-500">
                                <div className="text-center">
                                    <Users2 className="w-16 h-16 mx-auto mb-2 opacity-50" />
                                    <p>Networking Photo</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 rounded-lg overflow-hidden bg-white/5 border border-white/10">
                            <div className="flex items-center justify-center h-full text-gray-500">
                                <div className="text-center">
                                    <Presentation className="w-16 h-16 mx-auto mb-2 opacity-50" />
                                    <p>Event Photo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What to Expect This Year */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
                        What to Expect This Year
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {expectations.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-start gap-4">
                                    <item.icon className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

interface StatCardProps {
    icon: React.ElementType;
    label: string;
    value: number;
    suffix: string;
    color: string;
    index: number;
}

function StatCard({ icon: Icon, label, value, suffix, color, index }: StatCardProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const animateCount = () => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
    };

    useEffect(() => {
        // Simple intersection observer to trigger animation when in view
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    animateCount();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`stat-${index}`);
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [hasAnimated, index]);

    return (
        <div
            id={`stat-${index}`}
            className="relative bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-white/20 transition-all duration-300 hover:scale-105"
        >
            <Icon className={`w-12 h-12 mx-auto mb-4 ${color}`} />
            <div className="text-4xl md:text-5xl font-bold mb-2">
                <span className={color}>{count}</span>
                <span className={`${color} text-3xl`}>{suffix}</span>
            </div>
            <div className="text-gray-400 text-lg">{label}</div>
        </div>
    );
}
