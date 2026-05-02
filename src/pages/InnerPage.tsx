import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { INNER_PAGES, PLACEHOLDERS, resolveAssetPath } from "../data/siteData";
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

  // Dynamically select images based on the page key or use defaults
  let mainImage = PLACEHOLDERS.DOCTOR_IMAGE;
  if (key.includes("liver")) {
    mainImage = resolveAssetPath("/images/liver_surgery_illustration.png");
  } else if (key.includes("pancreas") || key.includes("pancreatitis")) {
    mainImage = resolveAssetPath("/images/pancreas_illustration.png");
  } else if (key.includes("stomach") || key.includes("oesophageal") || key.includes("bariatric") || key.includes("hiatus") || key.includes("gallstone")) {
    mainImage = resolveAssetPath("/images/stomach_illustration.png");
  } else if (key.includes("colon") || key.includes("intestinal") || key.includes("gi-cancer")) {
    mainImage = resolveAssetPath("/images/gi_tract_illustration.png");
  } else if (key.includes("robotic")) {
    mainImage = resolveAssetPath("/images/robotic_surgery_illustration.png");
  } else if (key.includes("laparoscopic") || key.includes("hernia")) {
    mainImage = resolveAssetPath("/images/laparoscopic_surgery_setup.png");
  }
  
  const secondaryImage = resolveAssetPath("/images/laparoscopic_surgery_setup.png");

  return (
    <main className="bg-white min-h-screen relative font-sans">
      <PageHero 
        title={data.title || "Medical Service"} 
        breadcrumb={data.breadcrumb || "Services"} 
      />

      {/* Section 1: Introduction (Editorial Style) */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">

              <h2 className="text-4xl md:text-5xl font-black text-[#0e5872] mb-8 leading-tight tracking-tighter">
                Advanced, Minimally Invasive Care for Faster Recovery
              </h2>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
                <p>{data.intro}</p>
                <p>
                  As a super-specialist in Surgical Gastroenterology and GI Oncosurgery, Dr. Aravind Manoharan combines precision techniques with comprehensive patient care to achieve superior outcomes and rapid recovery for his patients.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#0e5872]/10 rounded-[3rem] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3]">
                  <img 
                    src={mainImage} 
                    alt={data.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Clinical Overview / Highlights */}
      <section className="py-12 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
             <h2 className="text-3xl md:text-4xl font-black text-[#0e5872] mb-8 tracking-tight uppercase">What Is {data.title}?</h2>
             <p className="text-gray-500 text-xl leading-relaxed font-medium">
               {data.title} requires a specialized approach combining early detection, accurate staging, and expert surgical intervention. Our clinic prioritizes minimally invasive techniques to ensure the highest quality of life during and after treatment.
             </p>
          </div>
        </div>
      </section>

      {/* Section 3: Advantages & Highlights (Two Column List Style) */}
      {hasHighlights && (
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl group">
                  <img 
                    src={secondaryImage} 
                    alt="Surgical Setup" 
                    className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e5872]/40 to-transparent" />
                </div>
                {/* Floating Stat Card */}
                <div className="absolute -bottom-10 -right-6 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-[200px] hidden md:block">
                  <div className="text-4xl font-black text-[#de1c21] mb-1">MCh</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Super-Specialty Qualification</div>
                </div>
              </div>

              <div>

                
                <div className="bg-[#f0f9fb] rounded-[2rem] p-8 md:p-10 border border-[#0e5872]/10">
                  <h3 className="text-[#0e5872] font-black text-xl mb-8 uppercase tracking-widest flex items-center gap-3">
                    <Activity className="w-5 h-5 text-[#de1c21]" /> Key Focus Areas
                  </h3>
                  <div className="space-y-4">
                    {data.highlights.map((h: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-[#0e5872] flex items-center justify-center text-white shrink-0 group-hover:bg-[#de1c21] transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-[#0e5872] font-bold text-sm md:text-base">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Clinical Indicators / Symptoms */}
      {hasSymptoms && (
        <section className="py-24 bg-[#1f2b43] text-white relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#de1c21]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter leading-tight uppercase">
              When to Seek Care & Clinical Indicators
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.symptoms.map((s: string, i: number) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-[#de1c21] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg font-bold leading-snug group-hover:text-white transition-colors">
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Treatment Protocol / Pathway */}
      {hasTreatment && (
        <section className="py-28 md:py-40">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#0e5872] mb-6 tracking-tighter uppercase">Clinical Pathway</h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              A comprehensive, step-by-step approach to diagnosis, surgery, and long-term recovery management.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.treatmentSteps.map((step: any, i: number) => (
                <div key={i} className="relative group">
                  <div className="bg-white rounded-[2.5rem] p-10 h-full border border-gray-100 shadow-xl group-hover:border-[#0e5872]/30 group-hover:shadow-[0_40px_80px_-20px_rgba(14,88,114,0.15)] transition-all duration-500 flex flex-col text-center">
                    <div className="text-[#de1c21] text-xs font-black tracking-[0.3em] uppercase mb-6">Phase 0{i + 1}</div>
                    <h4 className="text-[#0e5872] font-black text-xl mb-6 leading-tight">{step.step}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium flex-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {hasFaq && (
        <section className="py-28 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black text-[#0e5872] tracking-tighter uppercase">FAQ’S</h2>
            </div>
            <FAQAccordion items={data.faq} />
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
};
