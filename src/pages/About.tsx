import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { FAQAccordion } from "../components/FAQAccordion";
import { ABOUT_DOCTOR, STATS, FAQ_ITEMS, PLACEHOLDERS } from "../data/siteData";
import { CheckCircle, Award, BookOpen, Users, ArrowRight } from "lucide-react";



export const About: React.FC = () => {
  return (
    <main>
      <PageHero
        title={ABOUT_DOCTOR.name}
        breadcrumb="About"
        subtitle={ABOUT_DOCTOR.degree + " | " + ABOUT_DOCTOR.speciality}
      />

      {/* Main profile */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Sticky image */}
            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-2xl border-b-8 border-[#de1c21]">
                <img
                  src={ABOUT_DOCTOR.image}
                  alt={ABOUT_DOCTOR.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/480x600/0e5872/ffffff?text=Dr.+Photo";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0e5872] to-transparent p-6">
                  <div className="text-white font-bold text-xl">{ABOUT_DOCTOR.name}</div>
                  <div className="text-[#ff7680] text-sm font-bold">{ABOUT_DOCTOR.degree}</div>
                </div>
              </div>

              {/* Stats mini */}
              <div className="grid grid-cols-2 gap-4 mt-6 max-w-sm mx-auto lg:mx-0">
                {STATS.slice(0, 4).map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl font-extrabold text-[#0e5872]">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-[#de1c21] text-sm font-semibold uppercase tracking-widest mb-3">Biography</p>
              <h2 className="text-3xl font-bold text-[#0e5872] mb-6 section-title">{ABOUT_DOCTOR.tagline}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{ABOUT_DOCTOR.bio1}</p>
                <p>{ABOUT_DOCTOR.bio2}</p>
              </div>

              {/* Highlights */}
              <div className="mt-8">
                <h3 className="font-bold text-[#0e5872] text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#de1c21]" />
                  Qualifications & Training
                </h3>
                <ul className="space-y-2.5">
                  {ABOUT_DOCTOR.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#de1c21] flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={PLACEHOLDERS.APPOINTMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-[#0e5872] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#de1c21] transition-colors shadow-lg"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};
