import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Sparkles, Clock, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onEnrollClick: () => void;
  timeLeft: { hours: number; minutes: number; seconds: number };
  isDark: boolean;
  toggleDark: () => void;
}

export default function Header({ onEnrollClick, timeLeft, isDark, toggleDark }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <header className="sticky top-0 z-50 w-full" id="header-root">
      {/* Dynamic Top Promotion Banner with Live Timer */}
      <div className="bg-purple-950 text-fuchsia-50 text-xs sm:text-sm py-2 px-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-medium border-b border-fuchsia-800/20 shadow-sm relative z-50">
        <span className="flex items-center gap-1.5 justify-center">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
          <span>¡Oferta de Lanzamiento: <span className="font-bold text-fuchsia-300 text-sm">65% de Descuento</span> + 4 Bonos Premium!</span>
        </span>
        <span className="hidden md:inline-block text-fuchsia-400 font-light">|</span>
        <span className="flex items-center gap-1.5 justify-center font-mono">
          <Clock className="w-3.5 h-3.5 text-fuchsia-450 text-fuchsia-300" />
          <span>La oferta termina en: </span>
          <span className="bg-purple-900 border border-purple-700 rounded px-1.5 py-0.5 text-white font-bold">{formatNumber(timeLeft.hours)}h</span>
          <span className="bg-purple-900 border border-purple-700 rounded px-1.5 py-0.5 text-white font-bold">{formatNumber(timeLeft.minutes)}m</span>
          <span className="bg-purple-900 border border-purple-700 rounded px-1.5 py-0.5 text-white font-bold text-fuchsia-300">{formatNumber(timeLeft.seconds)}s</span>
        </span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 border-b ${
          isScrolled
            ? isDark
              ? "bg-stone-900/95 backdrop-blur-md shadow-sm border-stone-800 py-3"
              : "bg-stone-50/90 backdrop-blur-md shadow-sm border-purple-100 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold shadow-md shadow-purple-900/10 group-hover:bg-purple-800 hover:shadow-purple-500/20 transition-all">
              <span className="font-serif text-lg tracking-wider">T</span>
            </div>
            <div>
              <span className={`block font-serif font-bold tracking-tight leading-none text-base sm:text-lg transition-colors ${
                isDark ? "text-stone-100 group-hover:text-purple-400" : "text-stone-900 group-hover:text-purple-900"
              }`}>
                Masterclass de Trapillo
              </span>
              <span className={`block text-[10px] tracking-widest font-mono uppercase font-bold mt-0.5 ${
                isDark ? "text-purple-450 text-purple-300" : "text-purple-700"
              }`}>
                Crochet y Negocio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("curriculum")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isDark ? "text-stone-300 hover:text-purple-300" : "text-stone-600 hover:text-purple-800"
              }`}
            >
              Plan de Estudios
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                isDark ? "text-stone-300 hover:text-purple-300" : "text-stone-600 hover:text-purple-800"
              }`}
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("bonuses")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isDark ? "text-stone-300 hover:text-purple-300" : "text-stone-600 hover:text-purple-800"
              }`}
            >
              Bonos
            </button>
            <button
              onClick={() => scrollToSection("guarantees")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isDark ? "text-stone-300 hover:text-purple-300" : "text-stone-600 hover:text-purple-800"
              }`}
            >
              Garantías
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isDark ? "text-stone-300 hover:text-purple-300" : "text-stone-600 hover:text-purple-800"
              }`}
            >
              Testimonios
            </button>
          </div>

          {/* Desktop Control Buttons (Theme Toggle + CTA) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDark}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isDark
                  ? "bg-stone-800 text-amber-300 hover:bg-stone-700 shadow-inner"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200 border border-stone-200/50"
              }`}
              title={isDark ? "Activar modo claro" : "Activar modo oscuro"}
              aria-label="Alternar modo de color"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className="hidden lg:block">
              <button
                onClick={onEnrollClick}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-purple-700 hover:bg-purple-850 text-stone-50 font-medium text-sm rounded shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all font-sans cursor-pointer group"
              >
                <ShoppingBag className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform" />
                Inscríbete y Ahorra 65%
              </button>
            </div>
          </div>

          {/* Mobile Actions: Icon Toggle & hamburger button */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={toggleDark}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isDark
                  ? "bg-stone-850 text-amber-300 hover:bg-stone-800"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200 border border-stone-200"
              }`}
              title={isDark ? "Activar modo claro" : "Activar modo oscuro"}
              aria-label="Alternar modo de color"
            >
              {isDark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded transition-all cursor-pointer ${
                isDark ? "text-stone-300 hover:text-stone-100 hover:bg-stone-800" : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden overflow-hidden shadow-inner absolute left-0 right-0 z-40 border-b ${
              isDark ? "bg-stone-900 border-stone-800" : "bg-stone-50 border-stone-200"
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {/* Promo in mobile menu */}
              <div className={`rounded-lg p-3 text-center border ${
                isDark ? "bg-purple-950/40 border-purple-900/60" : "bg-purple-50 border-purple-200"
              }`}>
                <p className={`text-xs font-medium font-mono ${isDark ? "text-purple-300" : "text-purple-900"}`}>
                  🚨 El descuento termina en {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
                </p>
              </div>

              <button
                onClick={() => scrollToSection("curriculum")}
                className={`block w-full text-left px-3 py-2 rounded text-base font-medium transition-colors ${
                  isDark ? "text-stone-250 hover:text-purple-300 hover:bg-stone-800" : "text-stone-700 hover:text-purple-800 hover:bg-stone-100"
                }`}
              >
                Plan de Estudios
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`block w-full text-left px-3 py-2 rounded text-base font-medium transition-colors ${
                  isDark ? "text-purple-300 bg-purple-950/30 hover:text-purple-200 hover:bg-purple-950/50" : "text-purple-900 bg-purple-50 hover:text-purple-950 hover:bg-purple-100"
                }`}
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("bonuses")}
                className={`block w-full text-left px-3 py-2 rounded text-base font-medium transition-colors ${
                  isDark ? "text-stone-250 hover:text-purple-300 hover:bg-stone-800" : "text-stone-700 hover:text-purple-800 hover:bg-stone-100"
                }`}
              >
                Bonos
              </button>
              <button
                onClick={() => scrollToSection("guarantees")}
                className={`block w-full text-left px-3 py-2 rounded text-base font-medium transition-colors ${
                  isDark ? "text-stone-250 hover:text-purple-300 hover:bg-stone-800" : "text-stone-700 hover:text-purple-800 hover:bg-stone-100"
                }`}
              >
                Garantías
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`block w-full text-left px-3 py-2 rounded text-base font-medium transition-colors ${
                  isDark ? "text-stone-250 hover:text-purple-300 hover:bg-stone-800" : "text-stone-700 hover:text-purple-800 hover:bg-stone-100"
                }`}
              >
                Testimonios
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onEnrollClick();
                }}
                className="w-full mt-2 py-3 bg-purple-700 hover:bg-purple-800 text-stone-50 font-semibold rounded-xl text-center shadow transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                ¡Inscríbete Ahora! (65% OFF)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
