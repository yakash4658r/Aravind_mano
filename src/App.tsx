import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Clinic } from "./pages/Clinic";
import { Appointment } from "./pages/Appointment";
import { InnerPage } from "./pages/InnerPage";

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// 404 page
const NotFound: React.FC = () => (
  <main className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center px-4">
      <div className="text-9xl font-extrabold text-[#0e5872]/10 mb-4">404</div>
      <h1 className="text-3xl font-bold text-[#0e5872] mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <a
        href="/Aravind_mano/"
        className="inline-flex items-center gap-2 bg-[#0e5872] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#de1c21] transition-colors"
      >
        Back to Home
      </a>
    </div>
  </main>
);

// Simple placeholder pages for terms/privacy/disclaimer
const SimplePage: React.FC<{ title: string }> = ({ title }) => (
  <main>
    <div className="bg-gradient-to-r from-[#0e5872] to-[#1a7191] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-gray-600 leading-relaxed">
        This {title.toLowerCase()} page is a placeholder. Please replace this content with your actual {title.toLowerCase()} document before publishing.
      </p>
    </div>
  </main>
);

const AppRoutes: React.FC = () => (
  <>
    <ScrollToTop />
    <Header />
    <Routes>
      {/* Core pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/clinic" element={<Clinic />} />
      <Route path="/appointment" element={<Appointment />} />

      {/* Dynamic routing for all Inner Pages */}
      <Route path="/services/:id" element={<InnerPage />} />
      <Route path="/conditions/:id" element={<InnerPage />} />
      <Route path="/resources/:id" element={<InnerPage />} />

      {/* Legal */}
      <Route path="/contact" element={<Clinic />} />
      <Route path="/privacy" element={<SimplePage title="Privacy Policy" />} />
      <Route path="/terms" element={<SimplePage title="Terms of Use" />} />
      <Route path="/disclaimer" element={<SimplePage title="Medical Disclaimer" />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <WhatsAppButton />
  </>
);

const App: React.FC = () => (
  <BrowserRouter basename="/Aravind_mano">
    <AppRoutes />
  </BrowserRouter>
);

export default App;
