import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  subtitle?: string;
  bgColor?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  breadcrumb,
  subtitle,
  bgColor = "from-[#0e5872] via-[#0e5872] to-[#0a4256]",
}) => {
  const crumbs = breadcrumb.split(">").map((c) => c.trim());

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${bgColor} py-24 md:py-32`} aria-label="Page hero">
      {/* Immersive Background Depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#de1c21]/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        
        {/* Subtle Tech Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px" 
          }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Breadcrumb Container */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8 shadow-sm">
          <Link to="/" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          {crumbs.map((crumb, i) => (
            <React.Fragment key={i}>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <span className={`text-xs font-bold uppercase tracking-wider ${i === crumbs.length - 1 ? "text-[#de1c21]" : "text-white/80"}`}>
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium">
              {subtitle}
            </p>
          )}
          
          {/* Decorative Specialist Accent */}
          <div className="flex items-center gap-4 mt-10">
            <div className="h-1.5 w-24 bg-[#de1c21] rounded-full" />
            <div className="h-1.5 w-4 bg-white/20 rounded-full" />
            <div className="h-1.5 w-4 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
