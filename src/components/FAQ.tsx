import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  isDark?: boolean;
}

export default function FAQ({ isDark = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "¿Este curso tiene certificación?",
      answer: "Una vez concluyas todas las clases te enviaremos a tu correo electrónico una certificación de Hotmart por haber concluido con éxito todos los módulos. Este certificado te lo enviaremos en formato PDF."
    },
    {
      question: "¿Este curso es para principiantes?",
      answer: "Si no tienes conocimientos algunos sobre crochet para realizar bolsos y carteras, este curso es para ti. Iremos desde cero. Aunque enseñamos también técnicas avanzadas, este curso está dirigido a las personas que desean comenzar a incursionar en este tema."
    },
    {
      question: "¿Qué duración tiene el curso?",
      answer: "El curso está grabado en video HD y 4K en la plataforma de Hotmart, donde puedes acceder en el momento que mejor se ajuste a tu agenda para comenzar a ver las clases. El tiempo de duración será el tiempo que te tome ver todos los videos. Los videos los tendrás para siempre y puedes verlos las veces que desees si quieres repasar."
    },
    {
      question: "¿Cómo hago el pago?",
      answer: "Pago disponible con todas las tarjetas. Si tu tarjeta es de débito, deberás seleccionar la opción “tarjeta de crédito”. Pagos a través de Paypal disponible para todos los países."
    },
    {
      question: "¿Puedo pagar en efectivo?",
      answer: "Si deseas hacer pago en efectivo, puedes escribirnos para generarte el ticket de pago en efectivo, el cual aplica para México Oxxo, Chile Sencillito, Perú PagoEfectivo, Argentina RapiPago y Colombia Efecty. Recuerda que tienes hasta 3 días para pagar el ticket."
    },
    {
      question: "¿Tengo garantía?",
      answer: "Estamos tan seguros y convencidos del contenido del programa que tienes 7 días de garantía. Si no quedas satisfecho durante estos días desde que realizaste la compra, puedes solicitar la devolución del 100% de tu dinero directamente en la plataforma de Hotmart."
    }
  ];

  return (
    <motion.section
      className={`py-16 lg:py-24 relative overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border-stone-850/80"
          : "bg-gradient-to-b from-stone-50 via-white to-stone-100 border-stone-200/50"
      }`}
      id="faq"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`text-xs tracking-widest font-mono uppercase font-bold rounded-full px-4 py-1.5 inline-block mb-3 border shadow-sm ${
            isDark
              ? "text-purple-300 bg-purple-950/50 border-purple-800/40 shadow-purple-900/10"
              : "text-purple-800 bg-purple-50 border-purple-200 shadow-purple-500/5"
          }`}>
            PREGUNTAS FRECUENTES
          </span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
            isDark ? "text-stone-100" : "text-stone-900"
          }`}>
            Preguntas frecuentes
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-stone-300" : "text-stone-605 text-stone-600"}`}>
            Resuelve tus dudas antes de entrar
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDark
                      ? "border-purple-800/50 bg-purple-950/10 shadow-sm"
                      : "border-amber-700/40 bg-amber-50/20 shadow-sm"
                    : isDark
                      ? "border-stone-800 hover:border-stone-700 bg-stone-900/40"
                      : "border-stone-200 hover:border-stone-300 bg-stone-55/35"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full flex items-center justify-between text-left p-5 font-serif font-bold transition-colors cursor-pointer text-base sm:text-lg group ${
                    isDark
                      ? "text-stone-100 hover:text-purple-300"
                      : "text-stone-900 hover:text-amber-800"
                  }`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                    isOpen 
                      ? isDark ? "bg-purple-900 text-purple-200" : "bg-amber-100 text-amber-800" 
                      : isDark
                        ? "bg-stone-800 text-stone-300 group-hover:bg-purple-950 group-hover:text-purple-300"
                        : "bg-stone-100 text-stone-500 group-hover:bg-amber-50 group-hover:text-amber-800"
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
                    >
                      <div className={`px-5 pb-5 pt-1 text-sm sm:text-base leading-relaxed border-t transition-colors ${
                        isDark
                          ? "text-stone-300 border-stone-850 bg-stone-900/10"
                          : "text-stone-605 text-stone-600 border-stone-100/60 bg-amber-50/10"
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Extra contact box */}
        <div className={`mt-12 text-center p-6 border rounded-xl transition-colors ${
          isDark
            ? "bg-stone-900 border-stone-800 text-stone-300"
            : "bg-stone-50 border-stone-200/80 text-stone-600"
        }`}>
          <p className="text-sm">
            ¿Tienes alguna otra duda sobre envíos mayoristas o accesos?
          </p>
          <a
            href="mailto:support@trapillomasterclass.com"
            className={`font-bold hover:underline mt-1 inline-block text-sm font-mono transition-colors ${
              isDark ? "text-purple-350 hover:text-purple-300" : "text-amber-800 hover:text-amber-900"
            }`}
          >
            Pregúntanos directamente: support@trapillomasterclass.com
          </a>
        </div>

      </div>
    </motion.section>
  );
}
