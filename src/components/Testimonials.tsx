import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import { Testimonial } from "../types";
import { motion } from "motion/react";
import { TESTIMONIAL_AVATARS } from "../constants/images";

interface TestimonialsProps {
  isDark?: boolean;
}

export default function Testimonials({ isDark = false }: TestimonialsProps) {
  const reviews: Testimonial[] = [
    {
      id: 1,
      name: "Victoria Sánchez",
      role: "Fundadora de Boutique • @sanchez_crafts",
      location: "San José, CA",
      rating: 5,
      text: "No tenía absolutamente ninguna experiencia en crochet antes de esto. Los videos de inicio hicieron que tejer con trapillo grueso fuera súper sencillo. ¡Tres meses después ya he vendido y enviado 18 bolsos clutch personalizados a clientes por Instagram! Mis amigas todavía no pueden creer que los teja yo misma.",
      image: TESTIMONIAL_AVATARS.victoria
    },
    {
      id: 2,
      name: "Elena Rostova",
      role: "Madre Emprendedora",
      location: "Austin, TX",
      rating: 5,
      text: "El Módulo de Negocios por sí solo vale diez veces el precio del curso. Te da una plantilla de cálculo de precios a prueba de balas para calcular tus costos reales. Ahora compro trapillo directamente de distribuidores premium y gano $1,200 USD al mes trabajando desde mi casa en los ratos libres.",
      image: TESTIMONIAL_AVATARS.elena
    },
    {
      id: 3,
      name: "Mónica Geller",
      role: "Tejedora de Nivel Intermedio",
      location: "Miami, FL",
      rating: 5,
      text: "Saber tejer básico es una cosa, ¡pero la tensión del trapillo grueso es otra muy diferente! El truco para las 'Uniones de Círculo Invisibles' y la masterclass sobre cómo forrar a mano con lino fue un cambio total. Mis bolsos ahora lucen totalmente profesionales y de boutique fina.",
      image: TESTIMONIAL_AVATARS.monica
    }
  ];

  return (
    <motion.section
      className={`py-16 lg:py-24 border-t relative overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-b from-stone-900 via-purple-950/10 to-stone-950 border-stone-850/80"
          : "bg-gradient-to-b from-stone-50 via-purple-50/10 to-stone-100 border-stone-200/50"
      }`}
      id="testimonials"
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
              : "text-purple-800 bg-purple-100 border-purple-200 shadow-purple-500/5"
          }`}>
            TESTIMONIOS DE ESTUDIANTES
          </span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
            isDark ? "text-stone-100" : "text-stone-900"
          }`}>
            Historias de Éxito de Nuestras Graduadas de la Masterclass
          </h2>
          <p className={`text-sm sm:text-base ${isDark ? "text-stone-300" : "text-stone-605 text-stone-600"}`}>
            Desde principiantes de crochet absoluto hasta prósperas propietarias de emprendamientos creativos en casa, nuestras alumnas muestran con orgullo sus resultados reales.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 15,
                delay: idx * 0.15
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: isDark ? "0 20px 25px -5px rgba(0,0,0,0.5)" : "0 20px 25px -5px rgba(107,33,168,0.06)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group transition-colors duration-300 ${
                isDark
                  ? "bg-stone-900 border-stone-850 hover:border-purple-800/60"
                  : "bg-white border-stone-200 hover:border-purple-300"
              }`}
            >
              {/* Floating aesthetic quotation mark */}
              <div className={`absolute top-6 right-6 transition-all duration-300 ${
                isDark ? "text-stone-800/35 group-hover:text-purple-950/35" : "text-stone-101 text-stone-100 group-hover:text-purple-100/50"
              }`}>
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Visual Stars */}
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${isDark ? "text-purple-400 fill-purple-400" : "text-purple-600 fill-purple-600"}`} />
                  ))}
                </div>

                {/* Main testimonial text */}
                <p className={`text-sm leading-relaxed font-serif ${isDark ? "text-stone-300" : "text-stone-700"}`}>
                  “{review.text}”
                </p>
              </div>

              {/* Student identity footer */}
              <div className={`flex items-center gap-4 mt-8 pt-6 border-t ${
                isDark ? "border-stone-800" : "border-stone-150"
              }`}>
                <img
                  src={review.image}
                  alt={review.name}
                  className={`w-12 h-12 rounded-full border object-cover group-hover:scale-105 transition-transform ${
                    isDark ? "border-stone-800" : "border-stone-200"
                  }`}
                />
                <div>
                  <h4 className={`font-bold text-sm leading-tight ${isDark ? "text-stone-100" : "text-stone-900"}`}>
                    {review.name}
                  </h4>
                  <p className={`text-xs font-sans mt-0.5 font-medium ${isDark ? "text-purple-450 text-purple-400" : "text-purple-800"}`}>
                    {review.role}
                  </p>
                  <p className={`text-[10px] font-mono tracking-widest uppercase mt-0.5 ${isDark ? "text-stone-500" : "text-stone-400"}`}>
                    {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Before & After Accent Panel */}
        <div className={`mt-16 border rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto transition-colors ${
          isDark ? "bg-stone-900 border-stone-800" : "bg-white border-stone-200"
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-2">
              <span className={`inline-flex items-center gap-1 font-mono text-xs font-bold px-2 py-0.5 rounded ${
                isDark ? "bg-purple-950 text-purple-300 border border-purple-900/60" : "bg-purple-100/85 text-purple-950"
              }`}>
                <Sparkles className={`w-3.5 h-3.5 ${isDark ? "text-purple-400" : "text-purple-700"}`} />
                <span>CASO DE TRANSFORMACIÓN</span>
              </span>
              <h4 className={`font-serif font-bold text-lg ${isDark ? "text-stone-100" : "text-stone-900"}`}>Salto de Calidad Artesanal</h4>
              <p className={`text-xs ${isDark ? "text-stone-400" : "text-stone-500"}`}>Cómo Mónica perfeccionó sus puntos en solo 10 días gracias a nuestro soporte y videos de práctica.</p>
            </div>
            
            <div className={`border rounded-lg p-4 text-center transition-colors ${
              isDark ? "bg-stone-950/50 border-stone-800 text-stone-200" : "bg-stone-50 border-stone-200"
            }`}>
              <span className="text-[10px] bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded font-mono block w-fit mx-auto uppercase mb-1">Antes del Curso</span>
              <p className={`text-sm font-semibold font-serif ${isDark ? "text-stone-200" : "text-stone-850 text-stone-800"}`}>“Trapillo reciclado sin probar”</p>
              <p className={`text-xs mt-2 ${isDark ? "text-stone-400" : "text-stone-500"}`}>Estructura floja, uniones toscas, asas inestables y tensión de costura irregular.</p>
            </div>

            <div className={`border rounded-lg p-4 text-center transition-colors ${
              isDark ? "bg-green-950/20 border-green-900/40 text-stone-205 text-stone-200" : "bg-green-50 border-green-200"
            }`}>
              <span className="text-[10px] bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded font-mono block w-fit mx-auto uppercase mb-1">Después de 10 Días</span>
              <p className={`text-sm font-bold font-serif ${isDark ? "text-green-400" : "text-stone-905 text-green-900"}`}>“Trapillo Continuo Premium”</p>
              <p className={`text-xs mt-2 ${isDark ? "text-green-500 text-green-700" : "text-green-600 text-green-700"}`}>Puntos Jersey perfectamente rígidos, uniones invisibles y un forro interior impecable con cremallera.</p>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
