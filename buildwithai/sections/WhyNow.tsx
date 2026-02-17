'use client';

import React from 'react';
import { TrendingUp, DollarSign, Building2, Users } from 'lucide-react';

export default function WhyNow() {
  const stats = [
    {
      icon: TrendingUp,
      stat: '67% YoY growth',
      description: 'In the global demand for AI talent',
    },
    {
      icon: DollarSign,
      stat: '$15 trillion',
      description: 'Projected contribution to the global economy by 2030',
    },
    {
      icon: Building2,
      stat: '50%+ of companies',
      description: 'Worldwide are already integrating AI into their workflows',
    },
    {
      icon: Users,
      stat: '3X more demand',
      description: 'Than talent available, and in 2026, the global race for AI expertise has never been more competitive for employers',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-purple-900/20 to-[#0a0a1f]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Why Now?
        </h2>

        {/* Opening statement */}
        <p className="text-2xl md:text-3xl text-center text-white font-semibold max-w-4xl mx-auto mb-16">
          Artificial Intelligence is already here, reshaping industries at lightning speed.
        </p>

        {/* Main content */}
        <p className="text-xl text-center text-gray-300 max-w-5xl mx-auto mb-16">
          So next year we are going even bigger for 600 participants, making Build With AI your front row seat to one of Canada's most concentrated pool of AI innovators and curious minds.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30">
                      <item.icon className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {item.stat}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
