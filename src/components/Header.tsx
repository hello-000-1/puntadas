import React from "react";
import { Sparkles, Clock, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onEnrollClick: () => void;
  timeLeft: { hours: number; minutes: number; seconds: number };
  isDark: boolean;
  toggleDark: () => void;
}

export default function Header({ timeLeft, isDark, toggleDark }: HeaderProps) {
  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm" id="header-root">
      {/* Dynamic Top Promotion Banner with Live Timer */}
      <div className="bg-purple-950 text-fuchsia-50 text-xs sm:text-sm py-2 px-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-medium border-b border-fuchsia-800/20 shadow-sm relative z-[60]">
        <span className="flex items-center gap-1.5 justify-center">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
          <span>¡Oferta de Lanzamiento: <span className="font-bold text-fuchsia-300 text-sm">65% de Descuento</span> + 4 Bonos Premium!</span>
        </span>
        <span className="hidden md:inline-block text-fuchsia-400 font-light font-sans">|</span>
        <span className="flex items-center gap-1.5 justify-center font-mono">
          <Clock className="w-3.5 h-3.5 text-fuchsia-300" />
          <span>La oferta termina en: </span>
          <span className="bg-purple-900 border border-purple-700 rounded px-1.5 py-0.5 text-white font-bold">{formatNumber(timeLeft.hours)}h</span>
          <span className="bg-purple-900 border border-purple-700 rounded px-1.5 py-0.5 text-white font-bold">{formatNumber(timeLeft.minutes)}m</span>
          <span className="bg-purple-900 border border-purple-700 rounded px-1.5 py-0.5 text-white font-bold text-fuchsia-300">{formatNumber(timeLeft.seconds)}s</span>
        </span>
      </div>

      {/* Simplified Header Logo Bar */}
      <div className={`border-b transition-colors duration-300 py-3 sm:py-4 ${
        isDark ? "bg-stone-900/90 backdrop-blur-md border-stone-800" : "bg-white/90 backdrop-blur-md border-stone-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold shadow-md shadow-purple-900/10 group-hover:bg-purple-800 transition-all">
              <span className="font-serif text-lg tracking-wider">T</span>
            </div>
            <div>
              <span className={`block font-serif font-extrabold tracking-tight leading-none text-lg sm:text-xl transition-colors ${
                isDark ? "text-stone-100 group-hover:text-purple-400" : "text-stone-900 group-hover:text-purple-900"
              }`}>
                Puntadas - Creativas
              </span>
              <span className={`block text-[10px] tracking-widest font-mono uppercase font-bold mt-0.5 ${
                isDark ? "text-purple-300" : "text-purple-700"
              }`}>
                Crochet y Negocio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDark}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isDark
                  ? "bg-stone-805 bg-stone-800 text-amber-300 hover:bg-stone-700 shadow-inner"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200 border border-stone-200/50"
              }`}
              title={isDark ? "Activar modo claro" : "Activar modo oscuro"}
              aria-label="Alternar modo de color"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
