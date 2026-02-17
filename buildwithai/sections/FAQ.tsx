'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who can participate in the conference?",
    a: "The event is open to everyone, and there is no fee associated with participation.",
  },
  {
    q: "How do I participate in the Case Competition?",
    a: "During your registration, there will be a question at the end where you can select to participate & we will send you out the case ahead of the event with details.",
  },
  {
    q: "When does BWAI start?",
    a: "At 10:00 am ET, on March 28th.",
  },
  {
    q: "Do I need prior AI experience to attend?",
    a: "No prior AI experience is required.",
  },
  {
    q: "How many people can be in my team for the Case Competition?",
    a: "You may be alone, or form a team of up to 3 participants.",
  },
  {
    q: "Will there be Food?",
    a: "We'll have breakfast & lunch accommodated, make sure to list your dietary restrictions when you apply!",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleFAQ = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setOpenItems(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Frequently Asked Questions (FAQ's)
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-white/5 border border-white/10 cursor-pointer transition-all duration-300 overflow-hidden ${
                openItems.includes(index) ? 'shadow-lg shadow-purple-500/20 border-purple-500/30' : 'hover:border-white/20'
              }`}
              onClick={(e) => toggleFAQ(index, e)}
            >
              {/* Question Header - Fixed Height */}
              <div className="flex items-center justify-between p-6 min-h-[80px]">
                <h3 className="text-white font-semibold text-lg pr-4">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Answer - Expandable */}
              <div
                className={`transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0 border-t border-white/10">
                  <p className="text-gray-300 mt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
