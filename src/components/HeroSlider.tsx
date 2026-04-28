import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { HERO_SLIDES } from "../data/siteData";
import { ArrowRight, ChevronRight } from "lucide-react";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/effect-fade";

const SLIDE_COLORS = [
  "from-[#0e5872] via-[#0e5872]/80",
  "from-[#0b4a61] via-[#0b4a61]/80",
  "from-[#083a4d] via-[#083a4d]/80",
];

export const HeroSlider: React.FC = () => {
  return (
    <section className="relative" aria-label="Hero carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        className="h-[400px] md:h-[500px] lg:h-[550px]"
      >
        {HERO_SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full overflow-hidden">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${SLIDE_COLORS[i]} to-transparent`} />

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
                <div className="max-w-xl animate-fadeInUp">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#de1c21]/20 border border-[#de1c21]/40 rounded-full px-4 py-1.5 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#de1c21] animate-pulse" />
                    <span className="text-[#de1c21] text-xs font-bold uppercase tracking-widest">{slide.badge}</span>
                  </div>

                  {/* Quote mark */}
                  <div className="text-[#de1c21]/30 text-8xl font-serif leading-none -mb-6 select-none">"</div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                    {slide.headline}
                  </h1>
                  <p className="text-white/75 text-base md:text-lg mb-8 leading-relaxed">
                    {slide.subtext}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={slide.ctaHref}
                      className="inline-flex items-center gap-2 bg-[#de1c21] hover:bg-[#c4191e] text-white font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:scale-105"
                    >
                      {slide.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to={slide.secondaryHref}
                      className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 font-medium px-7 py-3.5 rounded-full transition-all"
                    >
                      {slide.secondaryLabel}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-[#de1c21]/5 rounded-full -translate-x-10 translate-y-10 hidden md:block" />
              <div className="absolute right-20 top-20 w-32 h-32 bg-white/5 rounded-full hidden md:block" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest rotate-90 mb-2">SCROLL</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};
