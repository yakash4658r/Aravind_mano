import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PLACEHOLDERS } from "../data/siteData";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "gradient" | "dark" | "light";
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Begin Your Care Journey?",
  subtitle = "Our specialist team is here to help. Book a consultation at your convenience — in person or via video call.",
  variant = "gradient",
}) => {
  const bgClass =
    variant === "gradient"
      ? "bg-gradient-to-r from-[#0e5872] via-[#de1c21] to-[#ff7680]"
      : variant === "dark"
      ? "bg-[#0e5872]"
      : "bg-gray-50";

  const textClass = variant === "light" ? "text-[#0e5872]" : "text-white";
  const subClass = variant === "light" ? "text-gray-600" : "text-white/80";

  return (
    <section className={`${bgClass} py-20 relative overflow-hidden`} aria-label="Call to action">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-20 translate-x-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-20 -translate-x-20 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>{title}</h2>
        <p className={`${subClass} text-lg mb-10 max-w-2xl mx-auto`}>{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PLACEHOLDERS.APPOINTMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#de1c21] hover:bg-[#c4191e] text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:scale-105"
          >
            Make An Appointment
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={`tel:${PLACEHOLDERS.PHONE}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10"
          >
            <Phone className="w-5 h-5" />
            {PLACEHOLDERS.PHONE}
          </a>
        </div>
      </div>
    </section>
  );
};
