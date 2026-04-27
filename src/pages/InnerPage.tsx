import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { INNER_PAGES, PLACEHOLDERS } from "../data/siteData";
import { CheckCircle, AlertCircle, ArrowRight, List } from "lucide-react";

export const InnerPage: React.FC = () => {
  const location = useLocation();
  const key = location.pathname.replace(/^\/|\/$/g, "");
  const data = (INNER_PAGES as any)[key];

  if (!data) return <Navigate to="/" replace />;

  const hasTreatment = data.treatmentSteps && Array.isArray(data.treatmentSteps) && data.treatmentSteps.length > 0;
  const hasSymptoms = data.symptoms && Array.isArray(data.symptoms) && data.symptoms.length > 0;
  const hasHighlights = data.highlights && Array.isArray(data.highlights) && data.highlights.length > 0;
  const hasFaq = data.faq && Array.isArray(data.faq) && data.faq.length > 0;

  return (
    <main className="bg-gray-50/50 min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[#0e5872]/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#de1c21]/[0.02] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <PageHero 
        title={data.title || "Medical Service"} 
        breadcrumb={data.breadcrumb || "Services"} 
      />

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              {/* Intro Overview Card */}
              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-gray-100 mb-12">
                <div className="inline-block px-4 py-1 bg-[#de1c21]/10 rounded-full mb-6">
                  <span className="text-[#de1c21] text-[10px] font-black uppercase tracking-widest">Clinical Overview</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0e5872] mb-8 leading-tight tracking-tight">
                  Understanding {data.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-medium">
                  {data.intro}
                </p>
              </div>

              {/* Highlights Section */}
              {hasHighlights && (
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#0e5872] flex items-center justify-center text-white text-xl">
                      <List className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-[#0e5872] text-2xl tracking-tight">Focus Areas & Advantages</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.highlights.map((h: string, i: number) => (
                      <div key={i} className="group bg-white rounded-3xl p-6 border border-gray-100 hover:border-[#de1c21]/30 hover:shadow-xl transition-all duration-500 flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#de1c21] group-hover:text-white transition-colors">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <span className="text-gray-700 font-semibold text-base flex-1">{h}</span>
                        <div className="w-1 h-8 bg-[#de1c21]/10 rounded-full group-hover:bg-[#de1c21] transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* When to Consult - Premium Alert */}
              {hasSymptoms && (
                <div className="mb-16">
                  <div className="relative bg-[#0e5872] rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6 text-amber-400">
                        <AlertCircle className="w-8 h-8 animate-pulse" />
                        <h3 className="font-bold text-2xl tracking-tight text-white uppercase tracking-widest">Early Indicators</h3>
                      </div>
                      <p className="text-white/60 mb-8 font-medium italic">
                        "Proactive evaluation is the cornerstone of effective surgical outcomes. Please monitor for:"
                      </p>
                      <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                        {data.symptoms.map((s: string, i: number) => (
                          <div key={i} className="flex items-center gap-4 text-white/90 font-medium border-l-2 border-amber-400/30 pl-5 hover:border-amber-400 transition-colors">
                            {s}
                          </div>
                        ))}
                      </div>
                      <Link
                        to="/appointment"
                        className="inline-flex items-center gap-3 mt-10 bg-white text-[#0e5872] font-black px-8 py-4 rounded-full hover:bg-amber-400 hover:text-white transition-all shadow-lg active:scale-95 group"
                      >
                        Request Specialist Evaluation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Treatment Protocol Timeline */}
              {hasTreatment && (
                <div className="mb-16">
                  <h3 className="font-black text-[#0e5872] text-3xl mb-10 tracking-tight">Clinical Pathway Overview</h3>
                  <div className="space-y-4">
                    {data.treatmentSteps.map((step: any, i: number) => (
                      <div key={i} className="group relative flex gap-8 items-start">
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-xl font-black text-[#0e5872] shadow-sm group-hover:border-[#de1c21] group-hover:text-[#de1c21] transition-all z-10">
                            0{i + 1}
                          </div>
                          {i !== data.treatmentSteps.length - 1 && (
                            <div className="w-0.5 h-20 bg-gray-100 group-hover:bg-[#de1c21]/20 transition-colors" />
                          )}
                        </div>
                        <div className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 group-hover:border-[#0e5872]/10 group-hover:shadow-[0_15px_40px_-15px_rgba(14,88,114,0.1)] transition-all">
                          <h4 className="font-black text-[#0e5872] text-xl mb-3 tracking-tight">{step.step}</h4>
                          <p className="text-gray-500 leading-relaxed text-base font-medium">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Columns */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Master CTA Card */}
                <div className="relative bg-[#0e5872] rounded-[2rem] p-10 overflow-hidden shadow-2xl border-t-[10px] border-[#de1c21]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mb-8 border border-white/10">
                      🏥
                    </div>
                    <h3 className="font-black text-white text-3xl mb-4 leading-tight">Patient Assistance</h3>
                    <p className="text-white/60 mb-10 text-lg leading-relaxed">
                      Connect directly for surgical evaluation at M R Hospital or online consultation.
                    </p>
                    
                    <div className="space-y-4">
                      <Link
                        to="/appointment"
                        className="block w-full text-center bg-[#de1c21] hover:bg-white hover:text-[#0e5872] text-white font-black px-6 py-5 rounded-2xl transition-all shadow-xl active:scale-95"
                      >
                        Book Appointment
                      </Link>
                      <a
                        href={`https://wa.me/${PLACEHOLDERS.WHATSAPP}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center border border-white/20 hover:bg-white/10 text-white font-bold px-6 py-5 rounded-2xl transition-all"
                      >
                        Message on WhatsApp
                      </a>
                    </div>

                    <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-black text-[#de1c21] uppercase tracking-[0.2em] mb-2">Emergency Line</div>
                        <a href={`tel:${PLACEHOLDERS.PHONE}`} className="text-2xl font-black text-white hover:text-amber-400 transition-colors">
                          {PLACEHOLDERS.PHONE}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auxiliary Links */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                  <h4 className="text-[10px] font-black text-[#0e5872] uppercase tracking-[0.2em] mb-6">Related Portals</h4>
                  <ul className="space-y-4">
                    {[
                      { label: "Laparoscopic Procedures", href: "/services/laparoscopic-surgery" },
                      { label: "GI Cancer Care", href: "/services/gi-cancer-surgery" },
                      { label: "Clinic Location", href: "/clinic" },
                      { label: "Patient FAQ", href: "/resources/faq" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link
                          to={l.href}
                          className="group flex items-center justify-between text-gray-500 hover:text-[#de1c21] font-bold text-sm transition-all"
                        >
                          {l.label}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all" />
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

      {/* FAQ Overlay Section */}
      {hasFaq && (
        <section className="py-32 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#0e5872] tracking-tight">Procedure FAQ</h2>
              <div className="h-1 w-20 bg-[#de1c21] mx-auto mt-6" />
            </div>
            <FAQAccordion items={data.faq} />
          </div>
        </section>
      )}

      <CTASection
        title={`Have Questions About ${data.title}?`}
        subtitle="Our specialist team is happy to discuss your individual situation. Book a consultation today."
      />
    </main>
  );
};
