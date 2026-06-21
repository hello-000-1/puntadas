import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseDescription from "./components/CourseDescription";
import Projects from "./components/Projects";
import Bonuses from "./components/Bonuses";
import BenefitsGuarantees from "./components/BenefitsGuarantees";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  // Theme Toggle state with LocalStorage persistence
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem("isDarkTheme");
      return saved !== null ? saved === "true" : true;
    } catch {
      return true;
    }
  });

  const toggleDark = () => {
    setIsDark((prev) => {
      const newVal = !prev;
      try {
        localStorage.setItem("isDarkTheme", String(newVal));
      } catch (e) {
        // Silently skip if writing to quota/localStorage fails in iframe
      }
      return newVal;
    });
  };

  // Shared state: dynamic coupon countdown remaining 
  // Initialized to 2 hours, 14 minutes, and 45 seconds for scarcity trigger
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 45 });

  // State to track scroll positioning for the floating CTA
  const [showFloatBtn, setShowFloatBtn] = useState(false);

  // Dynamic countdown decrementation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 3 hours to loop scarcity rather than displaying negative
          return { hours: 3, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Listen to window scroll distance to trigger floating button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowFloatBtn(true);
      } else {
        setShowFloatBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnrollClick = () => {
    window.location.href = "https://wa.link/13814u";
  };

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-purple-200 selection:text-purple-950 overflow-x-hidden transition-colors duration-300 ${
      isDark ? "bg-stone-950 text-stone-100" : "bg-stone-50 text-stone-850"
    }`}>
      
      {/* 1. Navigation Header & Active Alarm Countdown Bar */}
      <Header onEnrollClick={handleEnrollClick} timeLeft={timeLeft} isDark={isDark} toggleDark={toggleDark} />

      {/* 2. Visual Split Hero Segment */}
      <Hero onEnrollClick={handleEnrollClick} isDark={isDark} />

      {/* 3. Syllabus Curriculum & Interactive Stylist Portfolio */}
      <CourseDescription isDark={isDark} />

      {/* 3.5. Our Projects showcase portfolio */}
      <Projects isDark={isDark} />

      {/* 4. FREE Lifetime Value Bonuses */}
      <Bonuses isDark={isDark} />

      {/* 5. Core Advantages & Money-Back Guarantees */}
      <BenefitsGuarantees isDark={isDark} />

      {/* 6. Realistic Success Testimonials and Before/After Panel */}
      <Testimonials isDark={isDark} />

      {/* 8. Frequently Asked Questions */}
      <FAQ isDark={isDark} />

      {/* 9. Footwear Links, Contacts & Corporate Modals */}
      <Footer isDark={isDark} />

      {/* Floating CTA dynamic sticky action footer for higher conversions */}
      <AnimatePresence>
        {showFloatBtn && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 pl-3 sm:pl-5 rounded-2xl shadow-xl transition-all max-w-[92vw] sm:max-w-md border ${
              isDark 
                ? "bg-stone-900/95 backdrop-blur-md border-purple-900/40 shadow-black/80 text-white" 
                : "bg-white/95 backdrop-blur-md border-purple-200 shadow-purple-950/10 text-stone-900"
            }`}
            id="floating-cta"
          >
            {/* Scarcity tag info */}
            <div className={`hidden xs:block text-left pr-3 sm:pr-4 border-r ${
              isDark ? "border-stone-800" : "border-stone-200"
            }`}>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse flex-shrink-0" />
                <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-red-600 leading-none">Últimos cupos</span>
              </div>
              <p className={`text-xs font-serif font-black mt-0.5 whitespace-nowrap ${isDark ? "text-stone-100" : "text-stone-900"}`}>65% Descuento Activo</p>
            </div>

            {/* High Conversion CTA main trigger */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEnrollClick}
              className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-stone-50 font-bold text-xs sm:text-sm rounded-xl cursor-pointer transition-all ${
                isDark
                  ? "bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-900 hover:to-purple-950 shadow-md hover:shadow-purple-900/30"
                  : "bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 shadow-md hover:shadow-lg"
              }`}
              id="floating-enroll-btn"
            >
              <span>Inscribirse Ahora</span>
              <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
