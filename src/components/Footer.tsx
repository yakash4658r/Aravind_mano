import React from "react";
import { Link } from "react-router-dom";
import { PLACEHOLDERS, FOOTER_LINKS } from "../data/siteData";
import { Phone, Mail, MapPin } from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e5872] text-white" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src={PLACEHOLDERS.LOGO_URL} 
                alt={`${PLACEHOLDERS.CLINIC_NAME} Logo`} 
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-lg leading-tight">{PLACEHOLDERS.CLINIC_NAME}</div>
                <div className="text-[#de1c21] text-[10px] uppercase tracking-wider font-bold">Gastroenterology & GI Surgery</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Expert surgical care for gastrointestinal conditions and GI cancers. Combining advanced laparoscopic techniques with personalized treatment for optimal patient outcomes.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${PLACEHOLDERS.PHONE}`} className="flex items-center gap-3 text-white/60 hover:text-[#de1c21] transition-colors">
                <Phone className="w-4 h-4 text-[#de1c21] flex-shrink-0" />
                {PLACEHOLDERS.PHONE}
              </a>
              <a href={`mailto:${PLACEHOLDERS.EMAIL}`} className="flex items-center gap-3 text-white/60 hover:text-[#de1c21] transition-colors">
                <Mail className="w-4 h-4 text-[#de1c21] flex-shrink-0" />
                {PLACEHOLDERS.EMAIL}
              </a>
              <p className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-[#de1c21] flex-shrink-0 mt-0.5" />
                {PLACEHOLDERS.ADDRESS}
              </p>
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[
                { href: PLACEHOLDERS.FB, Icon: FacebookIcon, label: "Facebook" },
                { href: PLACEHOLDERS.IG, Icon: InstagramIcon, label: "Instagram" },
                { href: PLACEHOLDERS.LI, Icon: LinkedinIcon, label: "LinkedIn" },
                { href: PLACEHOLDERS.YT, Icon: YoutubeIcon, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#de1c21] hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-[#de1c21] mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/60 text-sm hover:text-[#de1c21] hover:pl-1 transition-all">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-[#de1c21] mb-5">Services</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/60 text-sm hover:text-[#de1c21] hover:pl-1 transition-all">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-sm uppercase tracking-widest text-[#de1c21] mb-5 mt-8">Resources</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.resources.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/60 text-sm hover:text-[#de1c21] hover:pl-1 transition-all">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-[#de1c21] mb-5">Expertise</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.expertise.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/60 text-sm hover:text-[#de1c21] hover:pl-1 transition-all">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()}, {PLACEHOLDERS.CLINIC_NAME}. All Rights Reserved.</span>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-[#de1c21] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#de1c21] transition-colors">Terms of Use</Link>
            <Link to="/disclaimer" className="hover:text-[#de1c21] transition-colors">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
