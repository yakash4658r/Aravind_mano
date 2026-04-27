import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { TESTIMONIALS } from "../data/siteData";
import { Quote, Star } from "lucide-react";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

export const TestimonialSlider: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" aria-label="Patient testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#de1c21] text-sm font-semibold uppercase tracking-widest mb-3">Patient Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e5872] section-title centered">
            What Our Patients Say
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col border border-gray-100 card-hover">
                <Quote className="w-8 h-8 text-[#de1c21]/30 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0e5872] to-[#de1c21] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0e5872] text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
                    <div className="text-[#de1c21] text-xs font-medium mt-0.5">{t.tag}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
