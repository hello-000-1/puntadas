import React from "react";
import { Sparkles, ShoppingBag, Circle, Layers, Compass, Scissors, Award, Gem, Star } from "lucide-react";
import { motion } from "motion/react";

interface ProjectsProps {
  isDark?: boolean;
}

export default function Projects({ isDark: isDarkTheme = false }: ProjectsProps) {
  const projects = [
    {
      num: "01 & 02",
      title: "Carteras lineales",
      description: "Aprende a dominar las líneas de tejido precisas y el montaje estructurado.",
      tags: ["Materiales y herramientas", "Tejido lineal para carteras", "Tejido con punto espiga + accesorios"],
      icon: Layers,
      color: "bg-stone-50"
    },
    {
      num: "03",
      title: "Bolso redondo",
      description: "Domina el conteo perfecto y las suturas invisibles en estructuras circulares.",
      tags: ["Punto bajo centrado"],
      icon: Circle,
      color: "bg-purple-50/40"
    },
    {
      num: "04",
      title: "Bolso con detalles",
      description: "Desarrolla habilidades de decoración y herrajes que multiplican su valor percibido.",
      tags: ["Bolso con accesorios y detalles", "Punto bajo centrado"],
      icon: Sparkles,
      color: "bg-fuchsia-50/40"
    },
    {
      num: "05 & 06",
      title: "Bolsos con detalles",
      description: "Experimenta con siluetas asimétricas manipulando tensiones y disminuciones.",
      tags: ["Aumentos y disminuciones", "Punto bajo"],
      icon: Scissors,
      color: "bg-purple-50/20 select-none"
    },
    {
      num: "07",
      title: "Morral en base de cuero",
      description: "Aprende la fusión perfecta entre la alta costura en crochet y soportes de cuero premium.",
      tags: ["Materiales y punto piña"],
      icon: Compass,
      color: "bg-purple-50/50"
    },
    {
      num: "08",
      title: "Bolso premium",
      description: "Diseña piezas de colección que atraen a clientes de alta gama.",
      tags: ["Bolso premium con accesorios", "Materiales y herramientas necesarias"],
      icon: Gem,
      color: "bg-stone-100"
    },
    {
      num: "09",
      title: "Cartera profesional",
      description: "Elabora carteras con estructura rígida impecable listas para el mercado internacional.",
      tags: ["Accesorios y cadenas", "Punto espiga con aumentos"],
      icon: ShoppingBag,
      color: "bg-purple-100/20"
    },
    {
      num: "10",
      title: "Cartera con accesorios",
      description: "El pináculo de la técnica que integra cadenas, herrajes de gala y forros internos.",
      tags: ["Cartera profesional con accesorios", "Cadenas", "Puntos básicos, aumentos y punto bajo centrado"],
      icon: Star,
      color: "bg-purple-950 text-purple-100 shadow-purple-500/20 border-purple-800"
    }
  ];

  return (
    <motion.section
      className={`py-16 lg:py-24 border-t border-b relative overflow-hidden transition-all duration-300 ${
        isDarkTheme
          ? "bg-gradient-to-b from-stone-900 via-purple-950/10 to-stone-950 border-stone-800/80"
          : "bg-gradient-to-b from-stone-50 via-purple-50/10 to-stone-100 border-stone-200/60"
      }`}
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs tracking-widest font-mono uppercase font-bold rounded-full px-4 py-1.5 inline-block mb-3 border shadow-sm ${
            isDarkTheme
              ? "text-purple-300 bg-purple-950/50 border-purple-800/40 shadow-purple-900/10"
              : "text-purple-800 bg-purple-50 border-purple-200 shadow-purple-500/5"
          }`}>
            NUESTROS PROYECTOS
          </span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight ${
            isDarkTheme ? "text-stone-100" : "text-stone-900"
          }`}>
            Más de 10 proyectos para practicar, crear y vender
          </h2>
          <p className={`text-base sm:text-lg ${isDarkTheme ? "text-stone-300" : "text-stone-600"}`}>
            Cada proyecto está diseñado para que aprendas técnica, estructura y acabados profesionales.
          </p>
        </div>

        {/* Projects Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((proj, idx) => {
            const IconComponent = proj.icon;
            const isCardHighlighted = proj.color.includes("bg-purple-950");
            
            const cardBg = isDarkTheme
              ? isCardHighlighted
                ? "bg-purple-950 border-purple-800 text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                : "bg-stone-900/95 border-stone-800/80 text-stone-100 hover:border-stone-700/80"
              : isCardHighlighted
                ? "bg-purple-950 border-purple-800 text-purple-100 shadow-sm"
                : `${proj.color} border-stone-200 text-stone-850 hover:border-purple-200/50`;

            const iconBg = isCardHighlighted
              ? "bg-purple-900 border-purple-800 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.4)] animate-pulse"
              : isDarkTheme
                ? "bg-stone-805 bg-stone-800 border-stone-700 text-purple-300"
                : "bg-white border-stone-200 text-purple-800";

            return (
              <motion.div
                key={idx}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: isCardHighlighted 
                    ? "0 20px 25px -5px rgba(107,33,168,0.3), 0 0 15px rgba(217,70,239,0.2)" 
                    : isDarkTheme
                      ? "0 20px 25px -5px rgba(0,0,0,0.5)"
                      : "0 20px 25px -5px rgba(107,33,168,0.06)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`rounded-2xl border p-6 flex flex-col justify-between shadow-sm transition-all duration-300 relative overflow-hidden group ${cardBg}`}
              >
                {/* Visual watermarked number token */}
                <span className={`absolute -top-4 -right-2 font-mono font-black text-6xl select-none pointer-events-none transition-all group-hover:scale-110 duration-300 ${
                  isCardHighlighted 
                    ? "text-purple-805 text-purple-800/25" 
                    : isDarkTheme 
                      ? "text-stone-800/30" 
                      : "text-stone-300/30"
                }`}>
                  {proj.num}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${iconBg}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`font-mono text-[10px] font-bold tracking-wider px-2 py-1 rounded uppercase ${
                      isCardHighlighted 
                        ? "bg-purple-900 text-purple-200" 
                        : isDarkTheme
                          ? "bg-stone-800 text-stone-300"
                          : "bg-stone-100 text-stone-605 text-stone-600"
                    }`}>
                      {proj.num.includes("&") ? "Múltiple" : "Único"}
                    </span>
                  </div>

                  <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1 ${
                    isCardHighlighted ? "text-purple-300" : isDarkTheme ? "text-purple-400" : "text-purple-800"
                  }`}>
                    Proyecto {proj.num}
                  </span>
                  <h3 className={`font-serif font-bold text-xl leading-tight mb-2 ${
                    isCardHighlighted ? "text-white" : isDarkTheme ? "text-stone-100" : "text-stone-900"
                  }`}>
                    {proj.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed transition-colors ${
                    isCardHighlighted 
                      ? "text-purple-200/80" 
                      : isDarkTheme
                        ? "text-stone-400"
                        : "text-stone-605 text-stone-600"
                  }`}>
                    {proj.description}
                  </p>
                </div>

                <div className={`pt-4 border-t ${isDarkTheme ? "border-stone-800" : "border-stone-200/30"}`}>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block mb-2 font-bold ${
                    isCardHighlighted ? "text-fuchsia-300" : isDarkTheme ? "text-purple-400" : "text-purple-800"
                  }`}>
                    Qué vas a aprender:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`text-[11px] leading-tight px-2 py-1 rounded font-medium transition-colors duration-300 ${
                          isCardHighlighted 
                            ? "bg-purple-900/50 text-purple-200 border border-purple-800/40 group-hover:bg-purple-900/80" 
                            : isDarkTheme
                              ? "bg-stone-800/60 text-stone-300 border border-stone-800 group-hover:bg-purple-950/40 group-hover:text-purple-200 group-hover:border-purple-900/40"
                              : "bg-stone-100/80 text-stone-700 border border-stone-200 group-hover:bg-purple-50 group-hover:text-purple-900 group-hover:border-purple-100"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action footer block inside projects section */}
        <div className="mt-16 text-center">
          <p className={`font-mono text-xs uppercase tracking-widest leading-none ${isDarkTheme ? "text-stone-500" : "text-stone-450 text-stone-500"}`}>
            ★ Todos los patrones, diagramas, listas de materiales y vídeos paso a paso están incluidos.
          </p>
        </div>

      </div>
    </motion.section>
  );
}
