import React, { useState } from "react";
import { Mail, Instagram, Facebook, Shield, FileText, Send, Sparkles, Check } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  isDark?: boolean;
}

export default function Footer({ isDark = false }: FooterProps) {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [currentModal, setCurrentModal] = useState<"privacy" | "terms" | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <footer className={`pt-16 pb-12 relative transition-all duration-300 ${
      isDark ? "bg-stone-950 text-stone-300 border-t border-stone-900" : "bg-stone-900 text-stone-200 border-t border-amber-950/40"
    }`} id="footer">
      
      {/* Dynamic top divider bar */}
      <div className={`absolute top-0 left-0 w-full h-1 ${
        isDark 
          ? "bg-gradient-to-r from-purple-800 via-purple-350 via-purple-300 to-purple-800" 
          : "bg-gradient-to-r from-amber-700 via-amber-200 to-amber-700"
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Organic brand logo & pitch */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold transition-all ${
                isDark ? "bg-purple-900 shadow-[0_0_8px_rgba(168,85,247,0.4)]" : "bg-amber-750"
              }`}>
                <span className="font-serif text-base tracking-wider">T</span>
              </div>
              <div>
                <span className="block font-serif font-bold text-white tracking-tight leading-none text-base">
                  Academia del Trapillo
                </span>
                <span className={`block text-[9px] tracking-wider font-mono uppercase mt-0.5 transition-colors ${
                  isDark ? "text-purple-400" : "text-amber-500"
                }`}>
                  Artesanía y Negocio de Bolsos
                </span>
              </div>
            </div>
            
            <p className={`text-xs sm:text-sm leading-relaxed max-w-sm ${isDark ? "text-stone-400" : "text-stone-300"}`}>
              Empoderamos a tejedoras de todo el mundo para dominar el arte del crochet de alta gama. Aprende a transformar trapillo continuo en bolsos estructurados de primer nivel y lanza tu propia tienda de diseño desde casa.
            </p>

            <div className={`space-y-1.5 text-xs font-mono mb-4 ${isDark ? "text-stone-500" : "text-stone-400"}`}>
              <p className="flex items-center gap-2">
                <Mail className={`w-4 h-4 flex-shrink-0 ${isDark ? "text-purple-400" : "text-amber-500"}`} />
                <span className={isDark ? "text-stone-350" : "text-stone-200"}>support@trapillomasterclass.com</span>
              </p>
              <p>📍 Sede de la Academia, 44 Studio Row, Austin TX 78701</p>
            </div>

            {/* Social media connections with 3D physical interactions */}
            <div className="pt-4 space-y-2">
              <span className="text-stone-500 text-[10px] uppercase font-mono tracking-widest block mb-2 font-bold">
                ¡Síguenos en nuestras Redes Oficiales!:
              </span>
              <div className="flex flex-wrap gap-4 items-center">
                
                {/* 3D Instagram Button */}
                <motion.a
                  href="https://www.instagram.com/academy_trapillo?igsh=eTJqeXczMDJuenF0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group flex items-center justify-center w-12 h-12 rounded-xl border text-stone-300 font-bold transition-all ${
                    isDark 
                      ? "bg-stone-900 border-stone-800 shadow-[0_4px_0_#444] hover:shadow-[0_8px_20px_rgba(219,39,119,0.3)]" 
                      : "bg-white border-stone-200 shadow-[0_4px_0_#ddd] hover:shadow-[0_8px_16px_rgba(219,39,119,0.25)]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ 
                    y: -5,
                    shadowOffset: 8,
                    rotateX: 8,
                    rotateY: -8,
                    borderColor: "#db2777"
                  }}
                  whileTap={{ 
                    y: 1,
                    boxShadow: "0 1px 0 #444" 
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Instagram className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:text-white" />
                </motion.a>

                {/* 3D TikTok Button */}
                <motion.a
                  href="https://www.tiktok.com/@manualidades_aprende?_r=1&_t=ZS-97QQFmQdQEW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group flex items-center justify-center w-12 h-12 rounded-xl border text-stone-300 font-bold transition-all ${
                    isDark 
                      ? "bg-stone-900 border-stone-800 shadow-[0_4px_0_#444] hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]" 
                      : "bg-white border-stone-200 shadow-[0_4px_0_#ddd] hover:shadow-[0_8px_16px_rgba(0,242,254,0.2)]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ 
                    y: -5,
                    rotateX: 8,
                    rotateY: 8,
                    borderColor: "#01f2fe"
                  }}
                  whileTap={{ 
                    y: 1,
                    boxShadow: "0 1px 0 #444" 
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                >
                  <span className="absolute inset-0 rounded-xl bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-transparent group-hover:shadow-[2px_2px_0px_#00f2fe,-2px_-2px_0px_#fe0979]" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:text-white"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </motion.a>

                {/* 3D Facebook Button */}
                <motion.a
                  href="https://www.facebook.com/share/1EC24aGGBJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group flex items-center justify-center w-12 h-12 rounded-xl border text-stone-300 font-bold transition-all ${
                    isDark 
                      ? "bg-stone-900 border-stone-800 shadow-[0_4px_0_#444] hover:shadow-[0_8px_20px_rgba(24,119,242,0.3)]" 
                      : "bg-white border-stone-200 shadow-[0_4px_0_#ddd] hover:shadow-[0_8px_16px_rgba(24,119,242,0.25)]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ 
                    y: -5,
                    rotateX: -8,
                    rotateY: -8,
                    borderColor: "#1877f2"
                  }}
                  whileTap={{ 
                    y: 1,
                    boxShadow: "0 1px 0 #444" 
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                >
                  <span className="absolute inset-0 rounded-xl bg-[#1877F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Facebook className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:text-white" />
                </motion.a>

              </div>
            </div>
          </div>

          {/* Column 2: Quick scroll shortcuts */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className={`font-serif font-bold text-sm uppercase tracking-wider transition-colors ${
              isDark ? "text-purple-400" : "text-amber-500"
            }`}>
              Navegación de la Academia
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {[
                { name: "Lecciones", id: "curriculum" },
                { name: "Nuestros Proyectos", id: "projects" },
                { name: "Módulos de Bonos", id: "bonuses" },
                { name: "Garantía", id: "guarantees" },
                { name: "Testimonios", id: "testimonials" },
                { name: "Preguntas Frecuentes", id: "faq" }
              ].map((link, i) => (
                <button
                  key={i}
                  onClick={() => {
                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`transition-colors text-left font-sans cursor-pointer py-1 ${
                    isDark ? "text-stone-450 text-stone-400 hover:text-purple-300" : "text-stone-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Legal disclosures & copyrights */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono gap-4 transition-colors ${
          isDark ? "border-stone-850 text-stone-500" : "border-stone-800 text-stone-500"
        }`}>
          <p>© 2026 Masterclass de Bolsos en Trapillo. Todos los derechos reservados. Diseñado para emprendimientos en casa.</p>
          <div className="flex gap-4">
            <button onClick={() => setCurrentModal("privacy")} className={`underline cursor-pointer transition-colors ${isDark ? "hover:text-purple-300 text-stone-450 text-stone-400" : "hover:text-stone-300 text-stone-400"}`}>Política de Privacidad</button>
            <span>•</span>
            <button onClick={() => setCurrentModal("terms")} className={`underline cursor-pointer transition-colors ${isDark ? "hover:text-purple-300 text-stone-450 text-stone-400" : "hover:text-stone-300 text-stone-400"}`}>Términos del Servicio</button>
          </div>
        </div>

      </div>

      {/* Interactive Modal for Legal Notices */}
      {currentModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`border rounded-xl p-6 sm:p-8 max-w-xl w-full max-h-[85vh] overflow-y-auto space-y-4 opacity-100 transition-colors ${
            isDark ? "bg-stone-900 border-stone-800" : "bg-stone-900 border-stone-800"
          }`}>
            <div className="flex justify-between items-center border-b border-stone-850 border-stone-800 pb-3">
              <h3 className="font-serif font-bold text-white text-lg flex items-center gap-2">
                {currentModal === "privacy" ? (
                  <Shield className={`w-5 h-5 ${isDark ? "text-purple-400" : "text-amber-500"}`} />
                ) : (
                  <FileText className={`w-5 h-5 ${isDark ? "text-purple-400" : "text-amber-500"}`} />
                )}
                <span>{currentModal === "privacy" ? "Política de Privacidad" : "Términos y Condiciones"}</span>
              </h3>
              <button
                onClick={() => setCurrentModal(null)}
                className="text-stone-400 hover:text-stone-50 p-1 rounded hover:bg-stone-800 transition-colors cursor-pointer text-xs uppercase font-mono"
              >
                Cerrar (✖)
              </button>
            </div>

            <div className="text-xs text-stone-300 leading-relaxed space-y-3 font-sans">
              {currentModal === "privacy" ? (
                <>
                  <p><strong>1. Información que recopilamos:</strong> Recopilamos tu nombre y correo cuando te registras, ingresas datos de contacto o te unes a nuestro boletín. No almacenamos datos de tarjetas bancarias; los pagos se procesan de forma externa y segura a través de pasarelas que cumplen con los estándares PCI (Stripe y PayPal).</p>
                  <p><strong>2. Contacto:</strong> Para cualquier consulta, puedes comunicarte de forma directa mediante support@trapillomasterclass.com. Respetamos tu privacidad y nunca compartiremos tu información personal con anunciantes de terceros.</p>
                  <p><strong>3. Cookies:</strong> Utilizamos cookies con la finalidad de almacenar el contador promocional, asegurar el funcionamiento del proceso de registro y recordar tus selecciones en la calculadora de ganancias.</p>
                </>
              ) : (
                <>
                  <p><strong>1. Propiedad Intelectual y Patrones:</strong> Todos los videotutoriales, manuales, patrones en PDF y listas de proveedores contenidos en esta Masterclass son propiedad licenciada de la Academia. Su distribución pública queda estrictamente prohibida.</p>
                  <p><strong>2. Declaraciones de Ingresos:</strong> Los cálculos mostrados en la calculadora de ganancias son aproximaciones basadas en la experiencia típica de alumnas avanzadas, mas no constituyen una garantía. Los resultados reales dependen del esmero, calidad de fotografía, precios locales de artesanía y tiempo dedicado de la alumna.</p>
                  <p><strong>3. Devoluciones:</strong> Nuestra garantía incondicional de 30 días te faculta a solicitar un reembolso completo en los primeros 30 días desde la compra. Consigue asistencia directa enviando un mensaje a billing@trapillomasterclass.com.</p>
                </>
              )}
            </div>
            
            <div className="text-right pt-2 border-t border-stone-800">
              <button
                onClick={() => setCurrentModal(null)}
                className={`px-4 py-2 font-semibold text-xs rounded transition-colors cursor-pointer text-stone-50 ${
                  isDark ? "bg-purple-800 hover:bg-purple-900" : "bg-amber-705 bg-amber-700 hover:bg-amber-800"
                }`}
              >
                Comprendido y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
