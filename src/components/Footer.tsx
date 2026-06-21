import React, { useState } from "react";
import { Mail, Instagram, Facebook, Youtube, Shield, FileText, Send, Sparkles, Check } from "lucide-react";

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
          <div className="lg:col-span-4 space-y-4">
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

            <div className={`space-y-1.5 text-xs font-mono ${isDark ? "text-stone-500" : "text-stone-400"}`}>
              <p className="flex items-center gap-2">
                <Mail className={`w-4 h-4 flex-shrink-0 ${isDark ? "text-purple-400" : "text-amber-500"}`} />
                <span className={isDark ? "text-stone-350" : "text-stone-200"}>support@trapillomasterclass.com</span>
              </p>
              <p>📍 Sede de la Academia, 44 Studio Row, Austin TX 78701</p>
            </div>
          </div>

          {/* Column 2: Quick scroll shortcuts */}
          <div className="lg:col-span-3 space-y-4">
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

          {/* Column 3: Newsletter Sign-up */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className={`font-serif font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
              isDark ? "text-purple-400" : "text-amber-500"
            }`}>
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Miniguía de Puntos Gratuita (PDF)</span>
            </h4>
            <p className={`text-xs leading-relaxed ${isDark ? "text-stone-400" : "text-stone-300"}`}>
              Suscríbete a nuestro boletín de artesanas para recibir inmediatamente un PDF descargable paso a paso sobre 3 bordes decorativos modernos para tus bolsos.
            </p>

            {subscribed ? (
              <div className={`border rounded-lg p-3.5 flex items-center gap-2.5 text-xs transition-colors ${
                isDark 
                  ? "bg-purple-950/30 border-purple-900/60 text-purple-300" 
                  : "bg-amber-950/40 border-amber-800/40 text-amber-300"
              }`}>
                <Check className={`w-4 h-4 flex-shrink-0 ${isDark ? "text-purple-400" : "text-green-500"}`} />
                <span>¡Revisa tu bandeja! Te hemos enviado tu guía PDF gratuita sobre bordes decorativos.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Ingresa tu correo electrónico..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className={`rounded px-3 py-2 text-xs flex-grow focus:outline-none transition-colors ${
                    isDark 
                      ? "bg-stone-900 border border-stone-800 text-white focus:border-purple-600" 
                      : "bg-stone-850 border border-stone-700/60 text-white focus:border-amber-700"
                  }`}
                />
                <button
                  type="submit"
                  className={`text-stone-50 text-xs font-bold px-4 py-2 rounded transition-all flex items-center gap-1 cursor-pointer hover:scale-102 active:scale-98 ${
                    isDark ? "bg-purple-800 hover:bg-purple-900 shadow-sm" : "bg-amber-700 hover:bg-amber-800"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Unirse</span>
                </button>
              </form>
            )}

            {/* Social media connections */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-stone-500 text-[10px] uppercase font-mono tracking-widest block mr-2">Síguenos:</span>
              <a href="#footer" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isDark ? "bg-stone-900 text-stone-400 hover:text-purple-300 hover:bg-stone-800" : "bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700"
              }`}>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#footer" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isDark ? "bg-stone-900 text-stone-400 hover:text-purple-350 hover:bg-stone-800" : "bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700"
              }`}>
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#footer" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isDark ? "bg-stone-900 text-stone-400 hover:text-purple-350 hover:bg-stone-800" : "bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700"
              }`}>
                <Youtube className="w-4 h-4" />
              </a>
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
