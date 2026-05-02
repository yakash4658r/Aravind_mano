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
  FAQ_ITEMS,
  PLACEHOLDERS,
  resolveAssetPath,
} from "../data/siteData";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

// ─── Section: About Doctor ───────────────────────────────────
const AboutSection: React.FC = () => (
  <section className="py-12 bg-white overflow-hidden" aria-label="About the specialist">
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0e5872] mb-10 tracking-tighter leading-tight lg:whitespace-nowrap">
            {ABOUT_DOCTOR.tagline}
          </h2>
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
            <p>{ABOUT_DOCTOR.bio1}</p>
            <p>{ABOUT_DOCTOR.bio2}</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            <a href={PLACEHOLDERS.IG} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0e5872]/10 text-[#0e5872] flex items-center justify-center hover:bg-[#de1c21] hover:text-white transition-all shadow-sm">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href={PLACEHOLDERS.FB} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0e5872]/10 text-[#0e5872] flex items-center justify-center hover:bg-[#de1c21] hover:text-white transition-all shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-12">
            <Link
              to="/about"
              className="bg-[#0e5872] text-white font-black px-10 py-5 rounded-2xl hover:bg-[#de1c21] transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-3"
            >
              View full profile <ArrowRight className="w-5 h-5" />
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


// ─── Section: Expertise Grid ─────────────────────────────────
const ExpertiseSection: React.FC = () => (
  <section className="py-12 bg-white" aria-label="Clinical expertise">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#0e5872] tracking-tighter leading-none text-center uppercase">
          Areas of Expertise
        </h2>
        <p className="text-gray-500 text-center mt-3 text-sm md:text-base font-medium">
          As a surgical oncologist, I specialise in advanced cancer surgeries — from organ-preserving cancer procedures to high-precision robotic and laparoscopic techniques.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {EXPERTISE_CARDS.map((card, i) => (
          <Link
            key={i}
            to={card.href}
            className="group block bg-white border border-[#0e5872] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            aria-label={card.title}
          >
            <div className="p-4 flex-1 flex flex-col">
              <div className="w-full aspect-[4/3] rounded overflow-hidden mb-4 bg-gray-100">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <h3 className="font-bold text-[#0e5872] text-[17px] underline underline-offset-4 mb-3 leading-tight decoration-1">
                {card.title}
              </h3>
              
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">
                {card.desc}
              </p>

              <div className="mt-auto">
                <span className="font-bold text-[13px] text-[#0e5872] flex items-center gap-1 group-hover:text-[#de1c21] transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
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
  <section className="py-16 bg-[#0e5872] relative overflow-hidden" aria-label="Oncology specialty">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight uppercase">
          EXPLORE CANCERS WE TREAT
        </h2>
      </div>

      <div className="relative cancer-swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {CANCERS.map((cancer, i) => (
            <SwiperSlide key={i} className="h-auto">
              <Link
                to={cancer.href}
                className="group relative block h-[480px] transition-all duration-300"
                aria-label={cancer.title}
              >
                <div className="h-full bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-8 md:p-10 hover:bg-white/[0.1] hover:border-white/40 transition-all duration-500 hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] flex flex-col text-center md:text-left">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-6xl mb-8 transform origin-left flex justify-center md:justify-start">
                      {cancer.icon}
                    </div>
                    <h3 className="font-black text-white text-2xl mb-4 tracking-tight leading-tight uppercase">
                      {cancer.title}
                    </h3>
                    
                    <ul className="text-white/50 text-base leading-relaxed mb-10 group-hover:text-white/80 transition-colors font-medium space-y-3 flex-1">
                      {cancer.points.map((pt, j) => (
                        <li key={j} className="flex items-center gap-2 justify-center md:justify-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto inline-flex items-center justify-between pt-8 transition-colors border-t border-white/5">
                      <div className="text-[10px] font-black text-white/40 group-hover:text-white uppercase tracking-[0.4em] transition-all">
                        READ MORE
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
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
      <CancersSection />
      <TestimonialSlider />

      {/* FAQ section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-[#0e5872] tracking-tighter uppercase">FAQ’S</h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection />
    </main>
  );
};
