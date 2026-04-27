import React from "react";
import { Link } from "react-router-dom";
import { HeroSlider } from "../components/HeroSlider";
import { StatsRibbon } from "../components/StatsRibbon";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { CTASection } from "../components/CTASection";
import { FAQAccordion } from "../components/FAQAccordion";
import {
  ABOUT_DOCTOR,
  APPROACH_POINTS,
  EXPERTISE_CARDS,
  CANCERS,
  SERVICES_BAND,
  FAQ_ITEMS,
  PLACEHOLDERS,
} from "../data/siteData";
import { ArrowRight, CheckCircle } from "lucide-react";

// ─── Section: About Doctor ───────────────────────────────────
const AboutSection: React.FC = () => (
  <section className="py-24 bg-white overflow-hidden" aria-label="About the specialist">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Grid */}
        <div className="relative">
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-2xl border-8 border-gray-50 group">
            <img
              src={ABOUT_DOCTOR.image}
              alt={ABOUT_DOCTOR.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = PLACEHOLDERS.DOCTOR_IMAGE;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e5872]/60 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
               <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border-l-[6px] border-[#de1c21]">
                  <div className="text-[#0e5872] font-black text-xl mb-1">{ABOUT_DOCTOR.name}</div>
                  <div className="text-[#de1c21] text-sm font-bold uppercase tracking-widest">{ABOUT_DOCTOR.degree}</div>
               </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#de1c21]/5 rounded-full blur-3xl -z-10" />
        </div>

        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#de1c21]/5 rounded-full mb-6 border border-[#de1c21]/10">
            <p className="text-[#de1c21] text-[10px] font-black uppercase tracking-[0.3em]">Chief Surgeon Profile</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0e5872] mb-10 tracking-tighter leading-none">
            {ABOUT_DOCTOR.tagline}
          </h2>
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
            <p>{ABOUT_DOCTOR.bio1}</p>
            <p>{ABOUT_DOCTOR.bio2}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {ABOUT_DOCTOR.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#0e5872]/20 transition-all">
                <CheckCircle className="w-5 h-5 text-[#de1c21] shrink-0" />
                <span className="text-sm font-black text-[#0e5872] tracking-tight">{h}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-12">
            <Link
              to="/about"
              className="bg-[#0e5872] text-white font-black px-10 py-5 rounded-2xl hover:bg-[#de1c21] transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-3"
            >
              Academic Profile <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${PLACEHOLDERS.PHONE}`}
              className="text-[#0e5872] font-black border-b-2 border-[#de1c21] pb-1 hover:text-[#de1c21] transition-all tracking-tight"
            >
              Contact Specialist
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section: Approach ───────────────────────────────────────
const ApproachSection: React.FC = () => (
  <section className="py-32 bg-white relative overflow-hidden" aria-label="Clinical approach">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#0e5872]/5 rounded-full mb-6">
          <p className="text-[#0e5872] text-[10px] font-black uppercase tracking-[0.3em]">Our Philosophy</p>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-[#0e5872] tracking-tighter mb-8 leading-none">The Patient Experience.</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
          Combining cutting-edge surgical technology with profound clinical empathy for superior digestive health outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {APPROACH_POINTS.map((point, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-[3rem] p-12 border border-gray-100 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(14,88,114,0.12)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#de1c21] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />
            <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center text-5xl mb-10 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform">
              {point.icon}
            </div>
            <h3 className="font-black text-[#0e5872] text-2xl mb-4 transition-colors group-hover:text-[#de1c21]">
              {point.title}
            </h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section: Expertise Grid ─────────────────────────────────
const ExpertiseSection: React.FC = () => (
  <section className="py-32 bg-gray-50/50" aria-label="Clinical expertise">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#0e5872]/5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#de1c21] animate-pulse" />
            <p className="text-[#0e5872] text-[10px] font-black uppercase tracking-[0.3em]">Surgical Mastery</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#0e5872] tracking-tighter leading-none">Clinical Pillars.</h2>
        </div>
        <Link 
          to="/appointment" 
          className="inline-flex items-center gap-4 text-[#0e5872] font-black border-b-4 border-[#de1c21] pb-2 hover:text-[#de1c21] transition-all group"
        >
          Book Consultation <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {EXPERTISE_CARDS.map((card, i) => (
          <Link
            key={i}
            to={card.href}
            className="group relative bg-white rounded-[3rem] p-12 border border-gray-100 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_-15px_rgba(14,88,114,0.15)] transition-all duration-500 flex flex-col h-full"
            aria-label={card.title}
          >
            <div className="absolute top-10 right-10 text-6xl font-black text-gray-50 group-hover:text-[#de1c21]/5 transition-colors">
              0{i + 1}
            </div>

            <div className="relative z-10 flex-1">
              <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center text-4xl mb-12 shadow-inner group-hover:bg-[#0e5872] group-hover:text-white transition-all">
                {card.icon}
              </div>
              <h3 className="font-black text-[#0e5872] text-3xl mb-6 group-hover:text-[#de1c21] transition-colors leading-tight tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium text-lg">
                {card.desc}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-gray-100 pt-10 mt-auto">
              <span className="text-[11px] font-black text-[#0e5872]/40 group-hover:text-[#0e5872] transition-colors uppercase tracking-[0.3em]">
                View Protocol
              </span>
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#de1c21] group-hover:text-white transition-all">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section: Cancers Grid ───────────────────────────────────
const CancersSection: React.FC = () => (
  <section className="py-32 bg-white relative overflow-hidden" aria-label="Oncology specialty">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#de1c21]/5 rounded-full mb-6 border border-[#de1c21]/10">
          <p className="text-[#de1c21] text-[10px] font-black uppercase tracking-[0.3em]">Specialized Oncology</p>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-[#0e5872] tracking-tighter mb-8 leading-none">Oncology Interventions.</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
          Integrated management for complex gastrointestinal malignancies using globally recognized surgical protocols.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {CANCERS.map((cancer, i) => (
          <Link
            key={i}
            to={cancer.href}
            className="group relative block"
            aria-label={cancer.title}
          >
            <div className="bg-gray-50/50 rounded-[3.5rem] p-12 border border-transparent hover:border-[#0e5872]/10 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(14,88,114,0.15)] transition-all duration-500 h-full flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <div 
                  className="w-20 h-20 rounded-3xl flex items-center justify-center text-5xl shadow-inner transition-transform group-hover:scale-110"
                  style={{ backgroundColor: cancer.color + "15" }}
                >
                  {cancer.icon}
                </div>
                <div className="text-[10px] font-black text-[#0e5872]/20 group-hover:text-[#de1c21]/20 transition-colors uppercase tracking-[0.4em]">
                  Curative care
                </div>
              </div>

              <h3 className="font-black text-[#0e5872] text-3xl mb-8 group-hover:text-[#de1c21] transition-colors tracking-tight leading-tight">
                {cancer.title}
              </h3>

              <div className="mb-10 flex-1">
                <p className="text-[11px] font-black text-gray-300 uppercase tracking-widest mb-6 border-b border-gray-100 pb-3">Surgical Procedures</p>
                <ul className="space-y-4">
                  {cancer.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-4 text-lg font-bold text-gray-500 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: cancer.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100/50 flex items-center justify-between">
                <span className="text-[11px] font-black text-[#de1c21] uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                  Full Protocol
                </span>
                <ArrowRight className="w-6 h-6 text-gray-200 group-hover:text-[#de1c21] transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section: Services Ribbon ────────────────────────────────
const ServicesBand: React.FC = () => (
  <section className="py-32 bg-[#0e5872] relative overflow-hidden" aria-label="Ribbon services">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-[#de1c21]/15 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-24">
        <p className="text-[#de1c21] text-xs font-black uppercase tracking-[0.4em] mb-4">Precision Mastery</p>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
          Super-Specialty Clinical Focus.
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {SERVICES_BAND.map((s, i) => (
          <Link
            key={i}
            to={s.href}
            className="group relative block h-full"
          >
            <div className="h-full bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 hover:bg-white/[0.1] hover:border-white/40 hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] flex flex-col">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-[#de1c21]/20 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-6xl mb-10 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform origin-left">
                  {s.icon}
                </div>
                <h3 className="font-black text-white text-2xl mb-4 tracking-tight leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-10 group-hover:text-white/80 transition-colors font-medium">
                  {s.desc}
                </p>
                
                <div className="mt-auto inline-flex items-center justify-between pt-8 border-t border-white/5 group-hover:border-white/20 transition-colors">
                  <div className="text-[10px] font-black text-white/40 group-hover:text-[#de1c21] uppercase tracking-[0.4em] transition-all">
                    Explore Protocol
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

// ─── Home Page ───────────────────────────────────────────────
export const Home: React.FC = () => {
  return (
    <main className="overflow-x-hidden selection:bg-[#de1c21]/20 selection:text-[#de1c21]">
      <HeroSlider />
      <StatsRibbon />
      <AboutSection />
      <ExpertiseSection />
      <ApproachSection />
      <CancersSection />
      <ServicesBand />
      <TestimonialSlider />

      {/* FAQ section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-24">
            <p className="text-[#de1c21] text-sm font-black uppercase tracking-[0.4em] mb-4">Common Protocols</p>
            <h2 className="text-5xl md:text-7xl font-black text-[#0e5872] tracking-tighter">Frequently Asked.</h2>
            <div className="h-2 w-24 bg-[#de1c21] mx-auto mt-10 rounded-full" />
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection />
    </main>
  );
};
