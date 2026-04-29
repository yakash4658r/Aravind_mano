import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { PLACEHOLDERS } from "../data/siteData";

export const CTASection: React.FC = () => {
  return (
    <section className="bg-[#0e5872] text-white relative overflow-hidden" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 py-10 md:py-12 z-10">
            <h2 className="text-3xl md:text-[38px] font-bold text-white leading-tight mb-6 tracking-tight">
              Take the First Step Toward Advanced Gastro & Cancer Care
            </h2>
            <p className="text-white/80 text-[15px] leading-relaxed mb-6">
              Whether you’re dealing with digestive concerns or seeking expert surgical care, Dr. Aravind Manoharan and his team are here to guide you with precision, compassion, and advanced treatment solutions—every step of the way.
            </p>
            
            <div className="mb-10 text-white/90 text-sm">
              <span className="block mb-2 font-semibold">Specializing in:</span>
              Gastro Surgery | GI Cancer Care | HPB Cancer Surgery | Advanced Laparoscopic & Robotic Procedures
            </div>

            <a
              href={PLACEHOLDERS.APPOINTMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1f2b43] font-bold px-7 py-3.5 rounded hover:bg-gray-100 transition-colors shadow-sm"
            >
              <Calendar className="w-5 h-5 text-[#1f2b43]" />
              MAKE AN APPOINTMENT
            </a>
          </div>

          {/* Doctor Image */}
          <div className="w-full md:w-5/12 lg:w-4/12 flex justify-center md:justify-end self-end pt-8 md:pt-0 pb-0 z-10 relative">
            <div className="relative w-64 md:w-80 lg:w-[350px]">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-t-[40px]">
                {/* Fallback styling for the portrait if image doesn't fill properly */}
                <img 
                  src={PLACEHOLDERS.DOCTOR_IMAGE} 
                  alt={PLACEHOLDERS.DOCTOR_NAME} 
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
