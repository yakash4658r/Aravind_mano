import React, { useEffect, useRef, useState } from "react";
import { STATS } from "../data/siteData";

const useCountUp = (target: string, active: boolean) => {
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (!active) return;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    if (isNaN(num) || target.includes("/")) {
      // For MCh, 24/7, etc.
      setCount(target);
      return;
    }
    const suffix = target.replace(/[\d,]/g, "");
    const duration = 2500; // Increased duration for a more visible dynamic effect
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    
    // Add a slight delay before it starts counting
    const delayTimer = setTimeout(() => {
      const timer = setInterval(() => {
        current += increment;
        if (current >= num) {
          setCount(num.toLocaleString() + suffix);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current).toLocaleString() + suffix);
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, 300);

    return () => clearTimeout(delayTimer);
  }, [active, target]);

  return count;
};

const StatItem: React.FC<{ value: string; label: string; active: boolean; index: number }> = ({
  value,
  label,
  active,
  index,
}) => {
  const animated = useCountUp(value, active);
  return (
    <div
      className="flex flex-col items-center text-center px-6 py-8 relative group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Separator */}
      {index > 0 && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20 hidden sm:block" />
      )}
      <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
        {animated}
      </span>
      <span className="text-white/90 text-sm font-extrabold mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );
};

export const StatsRibbon: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="stats-ribbon relative overflow-hidden py-2" aria-label="Key statistics">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 z-10 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 30" preserveAspectRatio="none" className="w-full h-8 fill-white">
          <path d="M0,15 C360,30 720,0 1080,15 C1260,22 1350,10 1440,15 L1440,0 L0,0 Z" />
        </svg>
      </div>
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 30" preserveAspectRatio="none" className="w-full h-8 fill-white">
          <path d="M0,15 C360,0 720,30 1080,15 C1260,8 1350,20 1440,15 L1440,30 L0,30 Z" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x-0 sm:divide-x divide-white/0">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
