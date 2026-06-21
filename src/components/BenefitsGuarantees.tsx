import React, { useRef } from "react";
import { ShieldCheck, Award, Heart, Infinity, CheckCircle2, Lock } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className: string;
  isDark?: boolean;
  key?: React.Key;
}

function TiltCard({ children, className, isDark = false }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track relative mouse position normalized [0, 1]
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);

  // Shifting sheen reflections
  const sheenX = useSpring(useTransform(x, [0, 1], [0, 100]), springConfig);
  const sheenY = useSpring(useTransform(y, [0, 1], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: isDark
          ? "0 25px 40px -10px rgba(0,0,0,0.5)"
          : "0 25px 40px -10px rgba(107,33,168,0.12), 0 4px 10px -2px rgba(107,33,168,0.06)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl border transition-colors duration-300 cursor-pointer overflow-hidden group ${className}`}
    >
      {/* Interactive dynamic purple glass reflection overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at calc(${sheenX.get()}% ) calc(${sheenY.get()}% ), rgba(168,85,247,0.35) 0%, transparent 60%)`,
        }}
      />
      
      {/* 3D Depth Layer */}
      <div style={{ transform: "translateZ(15px)" }} className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
}

interface BenefitsGuaranteesProps {
  isDark?: boolean;
}

export default function BenefitsGuarantees({ isDark = false }: BenefitsGuaranteesProps) {
  const benefits = [
    {
      title: "Acceso de por Vida, Donde sea",
      description: "Sin suscripciones ni fecha de vencimiento. Mira las clases en tu celular, tablet o laptop mientras tejes en tu sala de estar. Acceso gratuito a todos los futuros patrones del curso.",
      icon: <Infinity className={`w-6 h-6 ${isDark ? "text-purple-300" : "text-purple-800"}`} />
    },
    {
      title: "Certificado de Graduada Verificable",
      description: "Completa tus tres proyectos del curso, envía tus fotos y recibe un elegante certificado digital listo para imprimir que aumentará la confianza de tus clientes.",
      icon: <Award className={`w-6 h-6 ${isDark ? "text-purple-300" : "text-purple-800"}`} />
    },
    {
      title: "Soporte de Dudas y Respuestas",
      description: "¿Te quedaste con dudas en una unión de filas? Deja tus preguntas en cualquier clase. Nuestros instructores responden con fotos aclaratorias y consejos en menos de 24 horas.",
      icon: <Heart className={`w-6 h-6 ${isDark ? "text-purple-300" : "text-purple-800"}`} />
    }
  ];

  return (
    <motion.section
      className={`py-16 lg:py-24 relative overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border-b border-stone-850/80"
          : "bg-gradient-to-b from-stone-50 via-purple-50/5 to-white"
      }`}
      id="guarantees"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ perspective: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Benefits Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((b, idx) => (
            <TiltCard 
              key={idx}
              isDark={isDark}
              className={
                isDark
                  ? "bg-stone-900 border-stone-800 p-6 sm:p-8 hover:bg-stone-850/80"
                  : "bg-stone-50 border-stone-200 p-6 sm:p-8 hover:bg-purple-50/20"
              }
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 border ${
                  isDark
                    ? "bg-stone-800 border-stone-700"
                    : "bg-purple-50/80 border-purple-200/50"
                }`}>
                  {b.icon}
                </div>
                <h3 className={`font-serif font-bold text-lg sm:text-xl transition-colors ${
                  isDark ? "text-stone-100 group-hover:text-purple-355 group-hover:text-purple-300" : "text-stone-900 group-hover:text-purple-800"
                }`}>
                  {b.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors ${
                  isDark ? "text-stone-300" : "text-stone-605 text-stone-600"
                }`}>
                  {b.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Guarantee Banner (Asymmetric layout) */}
        <div className={`border rounded-3xl p-8 sm:p-12 shadow-inner relative overflow-hidden transition-colors ${
          isDark ? "bg-stone-900 border-stone-800" : "bg-stone-50 border-stone-250"
        }`}>
          {/* Subtle design grid pattern overlay */}
          <div className={`absolute inset-0 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none transition-opacity ${
            isDark ? "opacity-15 bg-[radial-gradient(#57534e_1px,transparent_1px)]" : "opacity-40"
          }`} />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side: Authentic guarantee badge illustration */}
            <div className="lg:col-span-4 flex justify-center">
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className={`relative w-44 h-44 rounded-full border-4 flex flex-col items-center justify-center p-4 text-center shadow-md select-none transition-colors ${
                  isDark
                    ? "border-purple-600 bg-purple-950/40 text-purple-250 text-purple-200"
                    : "border-purple-800 bg-purple-50 text-purple-950"
                }`}
              >
                {/* Wavy star or decorative circles */}
                <span className={`font-extrabold text-xs tracking-widest font-mono ${isDark ? "text-purple-400" : "text-purple-800"}`}>100% SEGURO</span>
                <span className={`font-serif font-black text-2xl tracking-tight leading-none my-1.5 ${isDark ? "text-white" : "text-purple-950"}`}>7 DÍAS</span>
                <span className={`text-xs font-bold uppercase tracking-wider font-mono ${isDark ? "text-purple-400" : "text-purple-800"}`}>REEMBOLSO</span>
                <span className={`text-[10px] mt-1 ${isDark ? "text-purple-300/80" : "text-purple-600"}`}>SIN PREGUNTAS</span>
                
                {/* Star icon overlay */}
                <span className={`absolute -bottom-1.5 p-1.5 rounded-full border-2 flex items-center justify-center ${
                  isDark ? "bg-purple-900 border-stone-900 text-fuchsia-300" : "bg-purple-950 border-stone-100 text-fuchsia-300"
                }`}>
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </motion.div>
            </div>

            {/* Right side: Guarantee content */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <span className={`text-xs tracking-widest font-mono uppercase font-bold px-2.5 py-1 inline-block border rounded ${
                isDark
                  ? "text-purple-300 bg-purple-950/60 border-purple-900/60"
                  : "text-purple-800 bg-purple-100 border-purple-200"
              }`}>
                PROMESA SIN RIESGOS PARA TI
              </span>
              
              <h3 className={`font-serif text-2xl sm:text-3xl font-bold tracking-tight leading-tight ${
                isDark ? "text-stone-100" : "text-stone-900"
              }`}>
                Mira las clases, teje tu clutch de trapillo. Si no quedas completamente enamorada, recibe el reembolso del 100%.
              </h3>
              
              <p className={`text-sm sm:text-base leading-relaxed transition-colors ${
                isDark ? "text-stone-300" : "text-stone-605 text-stone-600"
              }`}>
                Tienes 7 días a partir de la compra para probar este programa. Si dentro de ese período nuestro programa no cumple y/o supera tus expectativas, vamos a devolver tu dinero sin hacer preguntas.
              </p>

              {/* Secure checkout badges inline */}
              <div className={`pt-4 border-t flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs transition-colors ${
                isDark ? "border-stone-800 text-stone-400" : "border-stone-200/80 text-stone-500"
              }`}>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-stone-400" />
                  <span>Pago seguro totalmente encriptado</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className={`w-4 h-4 ${isDark ? "text-green-400" : "text-green-600"}`} />
                  <span>Se acepta Stripe, Tarjetas de Crédito y PayPal</span>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
}
