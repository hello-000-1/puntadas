import React, { useState } from "react";
import { BookOpen, Calendar, CircleHelp, Plus, Minus, Award, ThumbsUp, Scissors } from "lucide-react";
import { SyllabusModule } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface CourseDescriptionProps {
  isDark?: boolean;
}

export default function CourseDescription({ isDark = false }: CourseDescriptionProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const modules: SyllabusModule[] = [
    {
      id: 1,
      title: "Fundamentos del crochet",
      duration: "Módulo Completo",
      lessonsCount: 8,
      description: "Primero entiendes la base, después creas piezas increíbles",
      lessons: [
        "Presentación al curso de bienvenida: Bienvenida al programa.",
        "Conociendo los materiales: introducción al módulo e hilados.",
        "El ganchillo: herramienta de trabajo.",
        "Práctica inicial: cómo sujetar la aguja y el hilo.",
        "Primeras prácticas: anillo mágico y medio punto.",
        "Puntos: punto bajo extendido y punto enano.",
        "Técnica: aumentos y disminuciones.",
        "Antes de iniciar: leyendo el patrón y cómo interpretar los puntos."
      ]
    }
  ];

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <motion.section
      className={`py-16 lg:py-24 relative overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border-b border-stone-800"
          : "bg-gradient-to-b from-stone-50 via-white to-stone-50/50"
      }`}
      id="curriculum"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs tracking-widest font-mono uppercase font-bold rounded-full px-4 py-1.5 inline-block mb-3 border shadow-sm ${
            isDark
              ? "text-purple-300 bg-purple-950/50 border-purple-800/40 shadow-purple-900/10"
              : "text-purple-800 bg-purple-50 border-purple-200 shadow-purple-500/5"
          }`}>
            PLAN DE ESTUDIOS
          </span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight ${
            isDark ? "text-stone-100" : "text-stone-900"
          }`}>
            Fundamentos del crochet
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-stone-300" : "text-stone-600"}`}>
            Primero entiendes la base, después creas piezas increíbles
          </p>
        </div>

        {/* Info Grid - Visuals Left, Syllabus Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Stats & Flatlay Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Elegant Workspace detail generated image */}
            <div className={`relative rounded-2xl overflow-hidden shadow-xl border group transition-colors ${
              isDark ? "border-stone-800 bg-stone-900" : "border-stone-250 bg-stone-50"
            }`}>
              <img
                src="/src/assets/images/trapillo_detail_1781988475428.jpg"
                alt="Trapillo crochet luxury workspace setup details and materials"
                className="w-full h-auto object-cover max-h-[350px] group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-purple-900/5 hover:bg-transparent transition-colors" />
              <div className={`p-4 border-t transition-colors ${
                isDark ? "bg-stone-900 border-stone-800 text-stone-300" : "bg-stone-50 border-stone-200 text-stone-705 text-stone-700"
              }`}>
                <span className="font-serif italic text-sm block text-center">
                  “El secreto radica en la tensión correcta del material y los soportes estructurales personalizados.”
                </span>
              </div>
            </div>

            {/* Course Summary Bullet Cards */}
            <div className="space-y-4">
              <h3 className={`font-serif font-bold text-lg flex items-center gap-2 ${
                isDark ? "text-stone-100" : "text-stone-900"
              }`}>
                <Scissors className={`w-5 h-5 ${isDark ? "text-purple-400" : "text-purple-700"}`} />
                <span>Tu Inscripción de Hoy Incluye:</span>
              </h3>
              
              <ul className="space-y-3">
                {[
                  "8 lecciones completas paso a paso en Alta Definición con acceso permanente.",
                  "Guías detalladas descargables optimizadas para tus dispositivos.",
                  "Prácticas desde cero para lograr la tensión perfecta del tejido.",
                  "Conocimiento profundo sobre herramientas y la anatomía de los puntos.",
                  "Certificación oficial de finalización al completar todos los módulos."
                ].map((item, index) => (
                  <li key={index} className={`flex items-start gap-2.5 text-sm transition-colors ${
                    isDark ? "text-stone-300" : "text-stone-605 text-stone-600"
                  }`}>
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs mt-0.5 border ${
                      isDark
                        ? "bg-purple-950/60 text-purple-300 border-purple-900/40"
                        : "bg-purple-50 text-purple-800 border-purple-100"
                    }`}>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beginner validation badge */}
            <div className={`p-5 rounded-xl border flex gap-4 transition-colors ${
              isDark ? "bg-stone-900 border-stone-800" : "bg-stone-50 border-stone-250"
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                isDark ? "bg-purple-950/60 text-purple-300 border border-purple-900/40" : "bg-purple-750/10 bg-purple-700/10 text-purple-800"
              }`}>
                <Award className={`w-6 h-6 ${isDark ? "text-purple-400" : "text-purple-700"}`} />
              </div>
              <div>
                <h4 className={`font-semibold text-sm ${isDark ? "text-stone-100" : "text-stone-900"}`}>Certificación Oficial</h4>
                <p className={`text-xs mt-1 leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                  ¡Al concluir todas las lecciones del programa, recibirás tu certificado de finalización verificado en formato PDF listo para descargar y exhibir!
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Syllabus Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className={`font-serif font-bold text-xl mb-4 flex items-center gap-2 ${
              isDark ? "text-stone-100" : "text-stone-900"
            }`}>
              <BookOpen className={`w-5 h-5 ${isDark ? "text-purple-400" : "text-purple-700"}`} />
              <span>Contenido del Programa de Estudios</span>
            </h3>

            {/* Accordion container */}
            <div className={`divide-y border-t border-b transition-colors ${
              isDark ? "divide-stone-800 border-stone-800" : "divide-stone-200 border-stone-200"
            }`}>
              {modules.map((mod, i) => {
                const isOpen = expandedModule === i;
                return (
                  <div key={mod.id} className="py-4">
                    <button
                      onClick={() => toggleModule(i)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <div className="space-y-1 pr-4">
                        <h4 className={`font-serif font-bold text-base sm:text-lg transition-colors ${
                          isOpen
                            ? isDark ? "text-purple-400" : "text-purple-800"
                            : isDark ? "text-stone-100 group-hover:text-purple-300" : "text-stone-900 group-hover:text-purple-850 hover:text-purple-805"
                        }`}>
                          {mod.title}
                        </h4>
                        <div className={`flex gap-4 text-xs font-mono font-medium ${
                          isDark ? "text-stone-450 text-stone-400" : "text-stone-500"
                        }`}>
                          <span>⏱ {mod.duration}</span>
                          <span>•</span>
                          <span>{mod.lessonsCount} Lecciones</span>
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                        isOpen
                          ? isDark ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-800"
                          : isDark
                            ? "bg-stone-800 text-stone-300 group-hover:bg-purple-950 group-hover:text-purple-300"
                            : "bg-stone-100 text-stone-600 group-hover:bg-purple-100 group-hover:text-purple-800"
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pl-1 pr-2 space-y-4 pb-2">
                            <p className={`text-sm leading-relaxed italic p-3 rounded border-l-2 transition-colors ${
                              isDark
                                ? "bg-purple-950/20 text-stone-300 border-purple-500"
                                : "bg-purple-50/50 text-stone-600 border-purple-700"
                            }`}>
                              {mod.description}
                            </p>
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs ${
                              isDark ? "text-stone-300" : "text-stone-700"
                            }`}>
                              {mod.lessons.map((lesson, idx) => (
                                <div key={idx} className="flex items-center gap-2 py-1">
                                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                    isDark ? "bg-purple-400" : "bg-purple-700"
                                  }`} />
                                  <span className="whitespace-normal leading-tight" title={lesson}>{lesson}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            
            {/* Quick stats panel */}
            <div className={`grid grid-cols-3 gap-4 text-center py-4 rounded-xl border transition-colors ${
              isDark
                ? "bg-purple-950/20 border-purple-900/40 text-stone-150 text-stone-100"
                : "bg-purple-50/60 border-purple-200/50 text-purple-900"
            }`}>
              <div>
                <span className={`block font-serif text-2xl sm:text-3xl font-extrabold leading-none ${isDark ? "text-purple-300" : "text-purple-850"}`}>8</span>
                <span className={`text-[10px] sm:text-xs font-mono tracking-wider font-semibold uppercase mt-1 block ${isDark ? "text-stone-400" : "text-stone-500"}`}>Lecciones Clave</span>
              </div>
              <div>
                <span className={`block font-serif text-2xl sm:text-3xl font-extrabold leading-none font-bold ${isDark ? "text-purple-300" : "text-purple-850"}`}>Desde 0</span>
                <span className={`text-[10px] sm:text-xs font-mono tracking-wider font-semibold uppercase mt-1 block ${isDark ? "text-stone-400" : "text-stone-500"}`}>Nivel</span>
              </div>
              <div>
                <span className={`block font-serif text-2xl sm:text-3xl font-extrabold leading-none ${isDark ? "text-purple-300" : "text-purple-850"}`}>100%</span>
                <span className={`text-[10px] sm:text-xs font-mono tracking-wider font-semibold uppercase mt-1 block ${isDark ? "text-stone-400" : "text-stone-500"}`}>Principiantes</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
