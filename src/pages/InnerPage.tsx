import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { INNER_PAGES, PLACEHOLDERS } from "../data/siteData";
import { Activity, AlertCircle, ArrowRight, CheckCircle2, ChevronRight, FileText, Phone, Calendar } from "lucide-react";

export const InnerPage: React.FC = () => {
  const location = useLocation();
  const key = location.pathname.replace(/^\/|\/$/g, "");
  const data = (INNER_PAGES as any)[key];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!data) return <Navigate to="/" replace />;

  const hasTreatment = data.treatmentSteps && Array.isArray(data.treatmentSteps) && data.treatmentSteps.length > 0;
  const hasSymptoms = data.symptoms && Array.isArray(data.symptoms) && data.symptoms.length > 0;
  const hasHighlights = data.highlights && Array.isArray(data.highlights) && data.highlights.length > 0;
  const hasFaq = data.faq && Array.isArray(data.faq) && data.faq.length > 0;

  return (
    <main className="bg-[#f8fafc] min-h-screen relative font-sans">
      <PageHero 
        title={data.title || "Medical Service"} 
        breadcrumb={data.breadcrumb || "Services"} 
      />

      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              
              {/* Intro Overview Card - Editorial Style */}
              <div className="bg-white rounded-xl p-8 md:p-12 border border-[#0e5872]/10 shadow-sm mb-16 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0e5872]" />
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="w-5 h-5 text-[#de1c21]" />
                  <span className="text-[#de1c21] text-xs font-bold uppercase tracking-widest">Clinical Overview</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1f2b43] mb-6 leading-tight tracking-tight">
                  Understanding {data.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                  {data.intro}
                </p>
              </div>

              {/* Highlights Section - Minimal Grid */}
              {hasHighlights && (
                <div className="mb-16">
                  <h3 className="font-bold text-[#1f2b43] text-2xl mb-8 flex items-center gap-3">
                    <Activity className="w-6 h-6 text-[#0e5872]" /> Focus Areas & Advantages
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.highlights.map((h: string, i: number) => (
                      <div key={i} className="group bg-white rounded-lg p-5 border border-gray-200 hover:border-[#0e5872]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-[#0e5872] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 text-sm md:text-base leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Early Indicators - Clinical Alert Box */}
              {hasSymptoms && (
                <div className="mb-16">
                  <div className="bg-white border border-[#de1c21]/20 rounded-xl overflow-hidden shadow-sm relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#de1c21] to-[#ff7680]" />
                    <div className="p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-6">
                        <AlertCircle className="w-6 h-6 text-[#de1c21]" />
                        <h3 className="font-bold text-2xl text-[#1f2b43] tracking-tight">Early Indicators</h3>
                      </div>
                      <p className="text-gray-500 mb-8 italic text-sm md:text-base">
                        Proactive evaluation is the cornerstone of effective surgical outcomes. Please monitor for:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {data.symptoms.map((s: string, i: number) => (
                          <div key={i} className="flex items-center gap-3 bg-red-50/50 rounded-lg p-3 border border-red-100/50 text-gray-700 text-sm font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#de1c21] shrink-0" />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Treatment Protocol Timeline - Highly Innovative */}
              {hasTreatment && (
                <div className="mb-16">
                  <h3 className="font-bold text-[#1f2b43] text-2xl mb-10">Clinical Pathway</h3>
                  <div className="relative border-l-2 border-[#0e5872]/10 ml-6 md:ml-8 space-y-12">
                    {data.treatmentSteps.map((step: any, i: number) => (
                      <div key={i} className="relative pl-8 md:pl-12 group">
                        {/* Timeline Node */}
                        <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border-4 border-[#0e5872]/20 group-hover:border-[#0e5872] flex items-center justify-center transition-all duration-300">
                          <div className="w-2 h-2 rounded-full bg-[#0e5872] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm group-hover:border-[#0e5872]/30 group-hover:shadow-md transition-all duration-300">
                          <span className="text-[#de1c21] text-xs font-bold tracking-widest uppercase mb-2 block">Step 0{i + 1}</span>
                          <h4 className="font-bold text-[#1f2b43] text-lg md:text-xl mb-3">{step.step}</h4>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Columns */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                
                {/* Premium Contact Card */}
                <div className="bg-[#1f2b43] rounded-xl p-8 shadow-lg text-white border border-[#1f2b43]">
                  <h3 className="font-bold text-2xl mb-3">Expert Consultation</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed">
                    Connect directly for a personalized surgical evaluation at M R Hospital or schedule an online consultation.
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href={PLACEHOLDERS.APPOINTMENT_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-white text-[#1f2b43] font-bold py-3.5 rounded hover:bg-gray-100 transition-colors"
                    >
                      <Calendar className="w-4 h-4" /> Book Appointment
                    </a>
                    <a
                      href={`https://wa.me/${PLACEHOLDERS.WHATSAPP}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full border border-white/20 text-white font-semibold py-3.5 rounded hover:bg-white/10 transition-colors"
                    >
                      Message on WhatsApp
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <span className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Emergency 24/7</span>
                    <a href={`tel:${PLACEHOLDERS.PHONE}`} className="flex items-center gap-2 text-xl font-bold hover:text-[#ff7680] transition-colors">
                      <Phone className="w-5 h-5" /> {PLACEHOLDERS.PHONE}
                    </a>
                  </div>
                </div>

                {/* Related Portals - Clean List */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#1f2b43] mb-4">Related Expertise</h4>
                  <ul className="space-y-2">
                    {[
                      { label: "Laparoscopic Surgery", href: "/services/laparoscopic-surgery" },
                      { label: "GI Cancer Surgery", href: "/services/gi-cancer-surgery" },
                      { label: "Clinic Location", href: "/clinic" },
                      { label: "Patient Resources", href: "/resources/faq" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link
                          to={l.href}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-[#0e5872] transition-colors text-sm font-medium group"
                        >
                          {l.label}
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0e5872] transition-colors" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {hasFaq && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1f2b43] tracking-tight mb-4">FAQ</h2>
              <div className="h-1 w-16 bg-[#0e5872] mx-auto rounded" />
            </div>
            <FAQAccordion items={data.faq} />
          </div>
        </section>
      )}

      {/* Reusing the newly built CTASection without overriding props */}
      <CTASection />
    </main>
  );
};
