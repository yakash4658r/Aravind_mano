import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { PLACEHOLDERS, STATS, SERVICES_BAND } from "../data/siteData";
import { ArrowRight, MapPin, Clock, Shield, Star } from "lucide-react";

const FACILITIES = [
  { icon: "🔭", title: "Advanced Laparoscopy Suite", desc: "Equipped with high-definition 4K camera systems for ultra-precise keyhole surgeries." },
  { icon: "🔬", title: "Diagnostic Endoscopy Unit", desc: "Dedicated facility for Painless Gastroscopy and Colonoscopy using advanced Olympus systems." },
  { icon: "🩺", title: "GI Motility & Health Lab", desc: "Specialized testing for chronic digestive issues, acid reflux, and functional disorders." },
  { icon: "🛏️", title: "Specialized GI Ward", desc: "Recovery areas designed specifically for post-operative gastrointestinal surgical care." },
  { icon: "🥗", title: "GI Nutrition Centre", desc: "Expert dietary counselling for liver health, post-cancer recovery, and chronic GI conditions." },
  { icon: "⚡", title: "Emergency GI Support", desc: "24/7 protocols for acute abdominal pain, obstructions, and gastrointestinal emergencies." },
];

const ACCREDITATIONS = [
  "NABH Accredited Hospital",
  "ISO 9001:2015 Certified",
  "National Cancer Grid Member",
  "JCI-compliant Protocols",
];

export const Clinic: React.FC = () => {
  return (
    <main>
      <PageHero
        title={PLACEHOLDERS.CLINIC_NAME}
        breadcrumb={PLACEHOLDERS.CLINIC_NAME}
        subtitle={"Centre of Excellence in Gastroenterology & GI Surgery, " + PLACEHOLDERS.CITY}
      />

      {/* Mission / Vision */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#de1c21] text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e5872] section-title mb-6">
                A Specialist Approach to GI Care
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {PLACEHOLDERS.CLINIC_NAME} was founded on the belief that world-class surgical expertise in gastroenterology should be accessible, transparent, and patient-centered. Our facility combines senior surgical leadership with state-of-the-art technology in Chennai.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every aspect of the clinic — from our pre-operative counselling to our enhanced recovery protocols — is designed around ensuring the best possible outcome for your digestive health. We understand that abdominal health affects overall quality of life, and we treat every case with the urgency and precision it deserves.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Our Mission", text: "Providing world-class GI surgical care with precision & empathy." },
                  { title: "Our Vision", text: "To be Chennai's most trusted name in Gastroenterology." },
                  { title: "Our Values", text: "Integrity, innovation, and unwavering patient commitment." },
                  { title: "Our Promise", text: "Advanced care with a compassionate, personal touch." },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100 border-l-4 border-[#de1c21]">
                    <div className="font-bold text-[#0e5872] text-sm mb-1.5">{item.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-b-8 border-[#0e5872]">
                <img
                  src={PLACEHOLDERS.CLINIC_IMAGE} 
                  alt={PLACEHOLDERS.CLINIC_NAME}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/800x600/0e5872/ffffff?text=Our+Clinic"; }}
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-[#0e5872] text-white rounded-xl p-5 shadow-xl hidden md:block border-l-4 border-[#de1c21]">
                <div className="text-3xl font-extrabold">{STATS[0].value}</div>
                <div className="text-[#ff7680] text-xs mt-1 font-bold">{STATS[0].label}</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#de1c21] text-white rounded-xl p-5 shadow-xl hidden md:block">
                <div className="text-3xl font-extrabold">{STATS[2].value}</div>
                <div className="text-xs mt-1 text-white/80">{STATS[2].label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e5872] section-title centered mb-3">Our Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover flex gap-4">
                <div className="text-3xl w-12 h-12 flex items-center justify-center flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0e5872] mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services quick links */}
      <section className="py-12 bg-[#0e5872]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white section-title centered text-white">Services We Offer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_BAND.map((s, i) => (
              <Link key={i} to={s.href} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-[#de1c21]/10 hover:border-[#de1c21]/40 transition-all card-hover text-center group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <div className="text-[#de1c21] text-xs flex items-center justify-center gap-1 mt-3 group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-3.5 h-3.5" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Location", text: PLACEHOLDERS.ADDRESS },
              { icon: Clock, title: "Hours", text: PLACEHOLDERS.WORKING_HOURS },
              { icon: Shield, title: "Specialty", text: "Surgical Gastroenterology\nAdvanced Laparoscopy" },
              { icon: Star, title: "Patient Choice", text: "Trusted by thousands for complex GI procedures." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-[#de1c21]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#de1c21]" />
                </div>
                <div>
                  <div className="font-bold text-[#0e5872] text-sm mb-1">{item.title}</div>
                  <div className="text-gray-500 text-xs whitespace-pre-line leading-relaxed">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};
