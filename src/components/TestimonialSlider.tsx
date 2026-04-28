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
    <section className="py-24 bg-white" aria-label="Patient testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[34px] font-bold text-[#0e5872] tracking-tight">
            Here's what patients have to say about their journey
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
            1024: { slidesPerView: 4 },
          }}
          className="pb-14 testimonial-swiper"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div className="bg-white rounded-[10px] p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">{t.name}</h4>
                <p className="text-gray-400 text-[11px] mb-3">3 January 2026</p>
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-[13px] leading-relaxed mb-6 flex-1">
                  "{t.text}"
                </p>

                <div className="mt-auto">
                  <button className="text-gray-400 text-xs hover:text-[#0e5872] transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
