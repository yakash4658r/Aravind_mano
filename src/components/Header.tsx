import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS, PLACEHOLDERS } from "../data/siteData";
import { ChevronDown, Phone, Menu, X } from "lucide-react";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const DropdownPanel: React.FC<{ item: NavItem; onClose: () => void }> = ({ item, onClose }) => {
  if (!item.children) return null;
  return (
    <div
      className="dropdown-panel absolute top-full left-1/2 -translate-x-1/2 w-72 rounded-b-lg z-50"
      role="menu"
      aria-label={item.label + " submenu"}
    >
      <ul className="py-2">
        {item.children.map((child) => (
          <li key={child.href} role="none">
            <Link
              to={child.href}
              role="menuitem"
              onClick={onClose}
              className="flex items-center justify-between px-5 py-3 text-sm text-white/85 hover:text-white hover:bg-white/10 border-b border-white/5 last:border-none transition-colors group"
            >
              <span>{child.label}</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90 opacity-40 group-hover:opacity-100 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0e5872] text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-white" />
            <a href={`tel:${PLACEHOLDERS.PHONE}`} className="hover:text-white/80 transition-colors">
              {PLACEHOLDERS.PHONE}
            </a>
            <span className="mx-2 text-white/30">|</span>
            <a href={`mailto:${PLACEHOLDERS.EMAIL}`} className="hover:text-white/80 transition-colors">
              {PLACEHOLDERS.EMAIL}
            </a>
          </span>
          <span className="text-white/60">{PLACEHOLDERS.ADDRESS}</span>
        </div>
      </div>

      {/* Main header */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Home">
              <img 
                src={PLACEHOLDERS.LOGO_URL} 
                alt={`${PLACEHOLDERS.CLINIC_NAME} Logo`} 
                className="h-10 md:h-20 w-auto object-contain transition-all"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Logo';
                }}
              />
              <div className="block">
                <div className="font-bold text-[#0e5872] text-[13px] md:text-lg leading-tight">{PLACEHOLDERS.CLINIC_NAME}</div>
                <div className="text-[#de1c21] text-[6px] md:text-[10px] uppercase tracking-wider font-bold leading-tight">Gastroenterology & GI Surgery</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && openDropdown(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  {item.href && !item.children ? (
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        location.pathname === item.href
                          ? "text-[#de1c21]"
                          : "text-[#0e5872] hover:text-[#de1c21]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeDropdown === item.label
                          ? "text-[#de1c21]"
                          : "text-[#0e5872] hover:text-[#de1c21]"
                      }`}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180 text-[#de1c21]" : ""
                        }`}
                      />
                    </button>
                  )}
                  {activeDropdown === item.label && (
                    <div onMouseEnter={() => openDropdown(item.label)} onMouseLeave={scheduleClose}>
                      <DropdownPanel item={item} onClose={() => setActiveDropdown(null)} />
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Link
                to="/appointment"
                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#0e5872] to-[#1a7191] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Make An Appointment
              </Link>
              {/* Hamburger */}
              <button
                className="lg:hidden p-2 rounded-md text-[#0e5872] hover:bg-gray-100 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0e5872] text-white overflow-y-auto max-h-[80vh]" role="dialog" aria-label="Mobile navigation">
            <nav>
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-white/10">
                  {item.children ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-5 py-4 text-sm font-medium text-white/90"
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        aria-expanded={mobileExpanded === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileExpanded === item.label ? "rotate-180 text-[#de1c21]" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="bg-[#0a4256]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-8 py-3 text-sm text-white/70 hover:text-[#de1c21] border-b border-white/5 last:border-none transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href!}
                      className="block px-5 py-4 text-sm font-medium text-white/90 hover:text-[#de1c21] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="p-5">
                <Link
                  to="/appointment"
                  className="block text-center bg-gradient-to-r from-[#de1c21] to-[#ff7680] text-white font-semibold py-3 rounded-full"
                >
                  Make An Appointment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
