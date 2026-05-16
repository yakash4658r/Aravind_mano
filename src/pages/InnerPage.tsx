import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { INNER_PAGES, PLACEHOLDERS, resolveAssetPath } from "../data/siteData";
import { ChevronRight } from "lucide-react";

export const InnerPage: React.FC = () => {
  const location = useLocation();
  const key = location.pathname.replace(/^\/|\/$/g, "");
  const data = (INNER_PAGES as any)[key];

  const [activeTab, setActiveTab] = useState<string>("highlights");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Set initial active tab based on what data is available
  useEffect(() => {
    if (data) {
      if (data.highlights && data.highlights.length > 0) setActiveTab("highlights");
      else if (data.treatmentSteps && data.treatmentSteps.length > 0) setActiveTab("treatment");
      else if (data.symptoms && data.symptoms.length > 0) setActiveTab("symptoms");
    }
  }, [data]);

  if (!data) return <Navigate to="/" replace />;

  const hasTreatment = data.treatmentSteps && Array.isArray(data.treatmentSteps) && data.treatmentSteps.length > 0;
  const hasSymptoms = data.symptoms && Array.isArray(data.symptoms) && data.symptoms.length > 0;
  const hasHighlights = data.highlights && Array.isArray(data.highlights) && data.highlights.length > 0;
  const hasFaq = data.faq && Array.isArray(data.faq) && data.faq.length > 0;

  // Dynamically select images based on the page data or fallback to a general hospital image
  const mainImage = data.image || resolveAssetPath("/images/cta_hospital.png");
  
  const bannerImage = resolveAssetPath("/images/medical_banner_bg.png");
  // Secondary image (used in the Tabs section) 
  const secondaryImage = resolveAssetPath("/images/cta_hospital.png");

  return (
    <main className="bg-white min-h-screen relative font-sans">
      <PageHero 
        title={data.title || "Medical Service"} 
        image={bannerImage}
      />

      {/* Section 1: Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 text-[#1a202c] text-[15px] md:text-[16px] leading-loose">
                {data.intro.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={idx} className="text-xl md:text-2xl font-bold text-[#0c2340] uppercase tracking-wide mt-6 first:mt-0 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={mainImage} 
                  alt={data.title} 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      {(hasHighlights || hasSymptoms || hasTreatment) && (
        <section className="pb-16 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
              
              {/* Left Image */}
              <div className="order-2 lg:order-1">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={secondaryImage} 
                    alt="Surgical Care" 
                    className="w-full h-auto object-cover aspect-square rounded-lg"
                  />
                </div>
              </div>

              {/* Right Tabs */}
              <div className="order-1 lg:order-2">
                <div className="flex flex-wrap gap-2 mb-0">
                  {hasHighlights && (
                    <button 
                      onClick={() => setActiveTab('highlights')}
                      className={`px-6 py-3 font-bold text-sm tracking-wide transition-colors ${activeTab === 'highlights' ? 'bg-[#182855] text-white' : 'bg-[#5bb7b6] text-white hover:bg-[#4ea8b1]'}`}
                    >
                      Why Choose Dr. Aravind?
                    </button>
                  )}
                  {hasTreatment && (
                    <button 
                      onClick={() => setActiveTab('treatment')}
                      className={`px-6 py-3 font-bold text-sm tracking-wide transition-colors ${activeTab === 'treatment' ? 'bg-[#182855] text-white' : 'bg-[#5bb7b6] text-white hover:bg-[#4ea8b1]'}`}
                    >
                      Treatment Options
                    </button>
                  )}
                  {hasSymptoms && (
                    <button 
                      onClick={() => setActiveTab('symptoms')}
                      className={`px-6 py-3 font-bold text-sm tracking-wide transition-colors ${activeTab === 'symptoms' ? 'bg-[#182855] text-white' : 'bg-[#5bb7b6] text-white hover:bg-[#4ea8b1]'}`}
                    >
                      When to Seek Care
                    </button>
                  )}
                </div>

                {/* Tab Content Area */}
                <div className="bg-[#eef3f7] p-8 md:p-12">
                  <div className="space-y-5">
                    {activeTab === 'highlights' && data.highlights.map((h: string, i: number) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#182855] flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#182855] text-[15px] font-medium leading-relaxed">{h}</span>
                      </div>
                    ))}

                    {activeTab === 'treatment' && data.treatmentSteps.map((step: any, i: number) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#182855] flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#182855] text-[15px] font-medium leading-relaxed">
                          <strong>{step.step}</strong>{step.desc ? ` - ${step.desc}` : ''}
                        </span>
                      </div>
                    ))}

                    {activeTab === 'symptoms' && data.symptoms.map((s: string, i: number) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#182855] flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#182855] text-[15px] font-medium leading-relaxed">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {hasFaq && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#182855]">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={data.faq} />
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
};

