import React from "react";
import { ArrowRight, Sparkles, GraduationCap, Briefcase, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onEnrollClick: () => void;
  isDark?: boolean;
}

export default function Hero({ onEnrollClick, isDark = false }: HeroProps) {
  return (
    <motion.section
      className={`relative overflow-hidden transition-all duration-300 py-16 lg:py-28 ${
        isDark
          ? "bg-gradient-to-tr from-stone-950 via-purple-950/15 to-stone-900 border-b border-stone-800/80"
          : "bg-gradient-to-tr from-purple-100/40 via-stone-50 to-fuchsia-100/30"
      }`}
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content & Marketing Pitch Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Organic Premium Pill Header Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold uppercase tracking-wider shadow-sm transition-colors ${
              isDark
                ? "bg-purple-950/50 border-purple-800/40 text-purple-300"
                : "bg-purple-50 border-purple-200 text-purple-800"
            }`}>
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-purple-500" />
              <span>CUPOS ABIERTOS • COMPLETO DESDE CASA</span>
            </div>

            {/* Powerful emotional title */}
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none transition-colors ${
              isDark ? "text-stone-100" : "text-stone-900"
            }`}>
              Aprende el Arte <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-800 dark:from-purple-400 dark:to-fuchsia-400">
                de Trapillo
              </span> <br />
              y Lanza tu Marca de Moda
            </h1>

            {/* High converting copywriting context */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-xl transition-colors ${
              isDark ? "text-stone-300" : "text-stone-600"
            }`}>
              Aprende el arte premium de tejer bolsos de lujo utilizando
              trapillo de alta calidad. ¡No se requiere experiencia previa en
              crochet! Domina los secretos de los puntos y obtén una guía
              completa para construir un negocio de moda rentable desde
              casa.
            </p>

            {/* Main benefits tags grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 max-w-xl">
              <div className={`flex items-start gap-3 p-3.5 rounded-xl shadow-sm transition-all duration-300 border ${
                isDark
                  ? "bg-stone-900/90 border-stone-800 hover:shadow-lg hover:border-stone-700/80"
                  : "bg-white/90 backdrop-blur-sm border-purple-100 hover:shadow-md hover:border-purple-200"
              }`}>
                <div className={`p-2 rounded shadow-sm mt-0.5 border ${
                  isDark
                    ? "bg-purple-950/65 text-purple-300 border-purple-900/40"
                    : "bg-purple-50 text-purple-805 text-purple-800 border-purple-100"
                }`}>
                  <GraduationCap className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${isDark ? "text-stone-100" : "text-stone-900"}`}>Paso a paso para principiantes</h3>
                  <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>Te enseñamos cómo sostener el ganchillo, contar los puntos y corregir errores sin complicaciones.</p>
                </div>
              </div>

              <div className={`flex items-start gap-3 p-3.5 rounded-xl shadow-sm transition-all duration-300 border ${
                isDark
                  ? "bg-stone-900/90 border-stone-800 hover:shadow-lg hover:border-stone-700/80"
                  : "bg-white/90 backdrop-blur-sm border-purple-100 hover:shadow-md hover:border-purple-200"
              }`}>
                <div className={`p-2 rounded shadow-sm mt-0.5 border ${
                  isDark
                    ? "bg-purple-950/65 text-purple-300 border-purple-900/40"
                    : "bg-purple-50 text-purple-805 text-purple-800 border-purple-100"
                }`}>
                  <Briefcase className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${isDark ? "text-stone-100" : "text-stone-900"}`}>Plan de Micro-Negocios</h3>
                  <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>Aprende sobre marca personal, precios premium, estrategias de redes sociales y fórmulas de costos.</p>
                </div>
              </div>
            </div>

            {/* High response Lead Action Element CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onEnrollClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all group cursor-pointer duration-200 w-full sm:w-auto"
              >
                Inscribirse en la Masterclass 
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              {/* Social Proof & Stars display rating */}
              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-amber-450 text-amber-450 text-amber-500" />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" className="w-6 h-6 rounded-full border border-white" referrerPolicy="no-referrer" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" className="w-6 h-6 rounded-full border border-white" referrerPolicy="no-referrer" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" className="w-6 h-6 rounded-full border border-white" referrerPolicy="no-referrer" />
                  </div>
                  <span className={`text-xs font-medium ${isDark ? "text-stone-400" : "text-stone-500"}`}>Amado por <strong className={isDark ? "text-white" : "text-stone-900"}>1,400+ artesanas</strong></span>
                </div>
              </div>
            </div>

            {/* Secure symbols badges */}
            <p className={`text-[11px] font-mono select-none text-center sm:text-left w-full ${isDark ? "text-stone-500" : "text-stone-400"}`}>
              ★ 7 días de garantía internacional • Certificado Oficial • Acceso inmediato de por vida
            </p>

          </div>

          {/* Right Side Visual Image Column */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[450px] lg:h-[500px]">
            {/* Ornamental Frame back drop */}
            <div className={`absolute inset-0 rounded-2xl -rotate-2 transform scale-102 border-2 border-dashed ${
              isDark
                ? "bg-gradient-to-tr from-purple-950/10 to-fuchsia-950/5 border-stone-800"
                : "bg-gradient-to-tr from-purple-700/10 to-fuchsia-900/5 border-purple-950/20"
            }`} />
            
            {/* Real generated hero image */}
            <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 transform rotate-1 hover:rotate-0 hover:scale-101 transition-all duration-500 ${
              isDark ? "border-stone-900" : "border-white"
            }`}>
              <img
                src="/src/assets/images/trapillo_hero_1781988462809.jpg"
                alt="Elite Handmade Trapillo Crochet Bags Catalog Display"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlaid Float Accent badges */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-4 left-4 rounded-lg p-2.5 flex items-center gap-2 shadow-lg max-w-[170px] select-none border backdrop-blur-sm ${
                  isDark
                    ? "bg-stone-900/95 border-stone-800 text-stone-100"
                    : "bg-white/95 border-purple-100 text-stone-850"
                }`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  isDark ? "bg-purple-950/70 text-purple-300" : "bg-purple-100 text-purple-800"
                }`}>
                  <Sparkles className="w-4 h-4 font-bold" />
                </span>
                <div>
                  <p className={`text-[10px] uppercase font-bold tracking-widest leading-none ${isDark ? "text-purple-400" : "text-purple-850"}`}>Nivel de Estilo</p>
                  <p className={`text-xs font-serif font-bold mt-0.5 ${isDark ? "text-stone-100" : "text-stone-900"}`}>Boho de Alta Gama</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute bottom-4 right-4 rounded-lg p-3 flex items-center gap-2.5 shadow-xl max-w-[200px] select-none border ${
                  isDark
                    ? "bg-stone-900/95 border-stone-800 text-stone-100"
                    : "bg-purple-900/95 text-stone-50 border-purple-700"
                }`}
              >
                <div>
                  <p className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isDark ? "text-purple-400" : "text-purple-350 text-purple-300"}`}>Especial del Curso</p>
                  <p className={`text-sm font-semibold font-serif leading-tight mt-0.5 ${isDark ? "text-stone-100" : "text-stone-50"}`}>Directorio completo de proveedores incluido</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
