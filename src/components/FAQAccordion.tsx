import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = { q: string; a: string };

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className = "" }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`} role="list" aria-label="Frequently asked questions">
      {items.map((item, i) => (
        <div
          key={i}
          role="listitem"
          className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            className={`flex items-center justify-between w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors ${open === i ? "border-l-4 border-[#de1c21]" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-${i}`}
          >
            <span className={`font-bold pr-4 text-sm md:text-base ${open === i ? "text-[#de1c21]" : "text-[#0e5872]"}`}>{item.q}</span>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                open === i ? "rotate-180 text-[#de1c21]" : "text-[#0e5872]"
              }`}
            />
          </button>
          <div
            id={`faq-${i}`}
            role="region"
            aria-hidden={open !== i}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-5 pt-1 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 bg-gray-50/50">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
