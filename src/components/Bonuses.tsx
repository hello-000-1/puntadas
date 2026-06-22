import React, { useRef } from "react";
import { BookOpen, Layers, Globe, ClipboardList, PenTool, Calculator, Users, Gift, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className: string;
  variants?: any;
  isDark?: boolean;
  key?: React.Key;
}

function TiltCard({ children, className, variants, isDark = false }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track relative mouse positions normalized to [0, 1]
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);

  // Dynamic coordinates for gloss sheath reflections
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
      variants={variants}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: isDark
          ? "0 25px 45px -10px rgba(0, 0, 0, 0.5)"
          : "0 25px 45px -10px rgba(120,53,15,0.14), 0 4px 12px -2px rgba(120,53,15,0.06)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl border transition-colors duration-300 overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Dynamic light sheer/glass layer */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at calc(${sheenX.get()}% ) calc(${sheenY.get()}% ), rgba(251,191,36,0.3) 0%, transparent 60%)`,
        }}
      />
      
      {/* Content wrapper with translateZ to create genuine spatial separation */}
      <div style={{ transform: "translateZ(20px)" }} className="relative h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}

interface BonusesProps {
  isDark?: boolean;
}

export default function Bonuses({ isDark = false }: BonusesProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  const bonuses = [
    {
      id: 1,
      badge: "BONO 1",
      title: "Cestos Personalizados",
      description: "Aprende a realizar cestos personalizados con patrones.",
      icon: "cestos",
      image: "https://academyclasscursosonline.com/wp-content/uploads/2026/04/2.jpg"
    },
    {
      id: 2,
      badge: "BONO 2",
      title: "Forro Perfecto para Bolsos",
      description: "Aprende a colocar forro a tus bolsos con costura a mano o con máquina.",
      icon: "forros",
      image: "https://academyclasscursosonline.com/wp-content/uploads/2026/04/4.jpg"
    },
    {
      id: 3,
      badge: "BONO 3",
      title: "Directorio de Proveedores por País",
      description: "Te obsequiaré una lista de proveedores para que encuentres tu material en cualquier país en el que te encuentres.",
      icon: "proveedores",
      image: "https://academyclasscursosonline.com/wp-content/uploads/2026/04/7.jpg"
    },
    {
      id: 4,
      badge: "BONO 4",
      title: "Kit Imprimible de Agendas y Etiquetas",
      description: "Super kit de agendas crocheteras y etiquetas para personalizar tu pagaking.",
      icon: "pagaking",
      image: "https://academyclasscursosonline.com/wp-content/uploads/2026/04/5.jpg"
    },
    {
      id: 5,
      badge: "BONO 5",
      title: "Catálogo de 50 Patrones de Autor",
      description: "50 patrones exclusivos para diseñar bolsos y carteras, y diagramas explicativos paso a paso.",
      icon: "patrones",
      image: "https://academyclasscursosonline.com/wp-content/uploads/2026/04/3.jpg"
    },
    {
      id: 6,
      badge: "BONO 6",
      title: "Taller de Costos y Precio Justo",
      description: "Aprende a sacar el precio justo de tus bolsos y carteras en crochet.",
      icon: "precio",
      image: "https://academyclasscursosonline.com/wp-content/uploads/2026/04/1.jpg"
    },
    {
      id: 7,
      badge: "BONO 7",
      title: "Comunidad VIP de Alumnas (Acceso Vitalicio)",
      description: "Comunidad de crocheteras, en donde podrás compartir tus proyectos y resolver dudas con la profesora y tus compañeras.",
      icon: "comunidad",
      image: "https://academyclasscursosonline.com/wp-content/uploads/2026/04/6.jpg"
    }
  ];

  return (
    <motion.section
      className={`py-16 lg:py-24 border-t border-b relative overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-stone-850/80"
          : "bg-gradient-to-b from-stone-50 via-fuchsia-50/5 to-stone-50 border-stone-250/50"
      }`}
      id="bonuses"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ perspective: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs tracking-widest font-mono uppercase font-bold rounded-full px-4 py-1.5 inline-block mb-3 border shadow-sm ${
            isDark
              ? "text-purple-350 bg-purple-950/50 border-purple-800/40 shadow-purple-900/10"
              : "text-purple-800 bg-purple-100/85 border-purple-200 shadow-purple-500/5 animate-pulse"
          }`}>
            REGÁLATE EL COMPLEMENTO PERFECTO
          </span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
            isDark ? "text-stone-100" : "text-stone-900"
          }`}>
            Por tu compra recibirás los siguientes bonos gratis
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-stone-300" : "text-stone-605 text-stone-600"}`}>
            Acelera tu técnica y catapulta tu negocio con estos 7 complementos exclusivos diseñados para garantizar tus resultados desde el primer día.
          </p>
        </div>

        {/* Bonuses Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {bonuses.map((bonus, idx) => {
            return (
              <TiltCard
                key={bonus.id}
                variants={itemVariants}
                isDark={isDark}
                className={
                  isDark
                    ? "bg-stone-900/95 border-stone-800 hover:border-purple-800/60 transition-colors duration-300 shadow-sm"
                    : "bg-white border-stone-200 hover:border-purple-300 transition-colors duration-300 shadow-sm"
                }
              >
                {/* Product Image Wrapper */}
                <div className="relative h-44 w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative background gift tag */}
                  <span className={`absolute top-2 right-3 font-black text-4xl font-mono select-none pointer-events-none group-hover:scale-120 transition-all duration-300 z-10 ${
                    isDark 
                      ? "text-stone-800/35 group-hover:text-purple-900/35" 
                      : "text-stone-100/40 group-hover:text-purple-200/30"
                  }`}>
                    0{idx + 1}
                  </span>
                  {/* Subtle edge overlay shadows */}
                  <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply pointer-events-none" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-4 z-10">
                    {/* Icon Selection */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-sm ${
                        isDark
                          ? "bg-stone-800 border-stone-705 text-purple-300"
                          : "bg-purple-50 text-purple-800 border-purple-200 shadow-purple-500/5"
                      }`}>
                        {bonus.icon === "cestos" && <BookOpen className={`w-6 h-6 ${isDark ? "text-purple-300" : "text-purple-700"}`} />}
                        {bonus.icon === "forros" && <Layers className="w-6 h-6" />}
                        {bonus.icon === "proveedores" && <Globe className="w-6 h-6" />}
                        {bonus.icon === "pagaking" && <ClipboardList className="w-6 h-6" />}
                        {bonus.icon === "patrones" && <PenTool className="w-6 h-6" />}
                        {bonus.icon === "precio" && <Calculator className="w-6 h-6" />}
                        {bonus.icon === "comunidad" && <Users className="w-6 h-6" />}
                      </div>

                      <div className={`flex items-center gap-1 font-mono text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded border shadow-sm ${
                        isDark
                          ? "bg-purple-950 text-purple-300 border-purple-900/60"
                          : "bg-purple-100/80 text-purple-950 border-purple-200/40"
                      }`}>
                        <Gift className={`w-3.5 h-3.5 animate-bounce ${isDark ? "text-purple-400" : "text-purple-700"}`} />
                        <span>{bonus.badge}</span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-left">
                      <span className={`text-xs tracking-wider font-mono font-bold uppercase block mb-1 ${
                        isDark ? "text-purple-400" : "text-purple-800"
                      }`}>
                        {bonus.badge}
                      </span>
                      <h3 className={`font-serif font-bold text-lg leading-snug transition-colors ${
                        isDark 
                          ? "text-stone-100 group-hover:text-purple-350" 
                          : "text-stone-900 group-hover:text-purple-900"
                      }`}>
                        {bonus.title}
                      </h3>
                      <p className={`text-sm mt-2 leading-relaxed transition-colors ${
                        isDark ? "text-stone-300" : "text-stone-605 text-stone-600"
                      }`}>
                        {bonus.description}
                      </p>
                    </div>
                  </div>

                  <div className={`pt-6 mt-6 border-t flex items-center gap-2 z-10 transition-colors ${
                    isDark ? "border-stone-850" : "border-stone-105"
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest font-mono ${
                      isDark ? "text-green-400" : "text-green-700"
                    }`}>
                      100% Gratis hoy
                    </span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </motion.div>
        
        {/* Total Value Summary block */}
        <div className={`mt-14 p-6 sm:p-8 bg-purple-950 text-white rounded-2xl border flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden group ${
          isDark ? "border-purple-900/80 shadow-black/40" : "border-purple-800 shadow-purple-900/10"
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-2xl -z-10 group-hover:bg-fuchsia-500/20 transition-all duration-700" />
          
          <div className="flex items-center gap-4 text-left z-10">
            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center text-purple-300 font-bold border border-purple-850 flex-shrink-0">
              <Sparkles className="w-6 h-6 text-fuchsia-300" />
            </div>
            <div>
              <p className="font-serif font-bold text-lg text-purple-100 leading-tight">
                Paquete Completo de 7 Bonos Exclusivos
              </p>
              <p className="text-xs text-stone-300 mt-1">
                Obtén cada manual, lista, patrones premium, calculadora y soporte comunitario de forma 100% gratuita al registrarte.
              </p>
            </div>
          </div>
          <div className="text-center font-mono flex-shrink-0 z-10">
            <span className="bg-purple-900 border border-purple-700 text-fuchsia-300 text-xs font-bold px-3 py-1.5 rounded uppercase block tracking-widest leading-none">
              Incluido 100% Gratis
            </span>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
