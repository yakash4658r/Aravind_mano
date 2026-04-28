import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { FAQAccordion } from "../components/FAQAccordion";
import { ABOUT_DOCTOR, STATS, FAQ_ITEMS, PLACEHOLDERS } from "../data/siteData";
import { CheckCircle, Award, BookOpen, Users, ArrowRight } from "lucide-react";

const TIMELINE = [
  { year: "2010", event: "MBBS" },
  { year: "2016", event: "MS General Surgery" },
  { year: "2021", event: "MCh Surgical Gastroenterology & GI Surgery" },
  { year: "2022", event: "Advanced Fellowship in Minimally Invasive & Laparoscopic Surgery" },
  { year: "2023", event: "Senior Consultant — specialized in GI Onco-surgery" },
  { year: "2024", event: "Successfully completed over 5,000+ complex GI surgical procedures" },
];

const AWARDS = [
  "Award for Excellence in Surgical Gastroenterology — GSI 2023",
  "Best Paper Award — Advanced Laparoscopic Techniques, ASI Conference",
  "Rising Star in GI Surgery — Health Excellence Awards, Tamil Nadu",
  "Distinguished Alumnus Recognition — Stanley Medical College",
  "Patient Satisfaction Excellence Award — Multi-year Winner",
];

export const About: React.FC = () => {
  return (
    <main>
      <PageHero
        title={ABOUT_DOCTOR.name}
        breadcrumb="About"
        subtitle={ABOUT_DOCTOR.degree + " | " + ABOUT_DOCTOR.speciality}
      />

      {/* Main profile */}
      <section className="py-20 bg-white">
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
                <p>
                  Specializing in both benign and malignant digestive disorders, Dr. Aravind is dedicated to the principle that "surgery is an art of healing." He focuses on organ-preserving surgeries and utilizes the latest technology to ensure his patients return to their normal lives as quickly as possible.
                </p>
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

              {/* Awards */}
              <div className="mt-8">
                <h3 className="font-bold text-[#0e5872] text-lg mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#de1c21]" />
                  Awards & Recognition
                </h3>
                <ul className="space-y-2.5">
                  {AWARDS.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-[#de1c21]/15 flex items-center justify-center flex-shrink-0 text-[#de1c21] text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      {a}
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

      {/* Career timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e5872] section-title centered">Career Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-0.5" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-16 md:pl-0`}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 inline-block text-left border-l-4 border-[#de1c21]">
                      <div className="text-[#de1c21] font-bold text-sm mb-1">{item.year}</div>
                      <div className="text-[#0e5872] font-medium text-sm">{item.event}</div>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-5 w-4 h-4 rounded-full bg-[#de1c21] border-4 border-white shadow md:-translate-x-2" />
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Associations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0e5872] mb-8 flex items-center justify-center gap-2">
            <Users className="w-6 h-6 text-[#de1c21]" />
            Professional Associations
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Association of Surgeons of India (ASI)",
              "Indian Association of Surgical Gastroenterology",
              "IMA (Indian Medical Association)",
              "IHPBA (International Hepato-Pancreato-Biliary)",
            ].map((org, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-sm font-medium text-[#0e5872] hover:border-[#de1c21]/40 transition-colors">
                {org}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0e5872] section-title centered">Common Questions</h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS.slice(0, 4)} />
        </div>
      </section>

      <CTASection />
    </main>
  );
};
