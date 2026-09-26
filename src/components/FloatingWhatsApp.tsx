import React, { useState } from "react";
import { MessageSquare, X, Send, ArrowRight } from "lucide-react";
import { DEALERSHIP_INFO } from "@/src/data/dealership";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: "Conseil & Véhicules Neufs",
      desc: "Demander la disponibilité ou un devis",
      text: "Bonjour SOCAR Bénin, je souhaite des renseignements sur la gamme de véhicules neufs disponibles.",
    },
    {
      title: "Rendez-vous SAV & Entretien",
      desc: "Révision, diagnostic ou réparation",
      text: "Bonjour SOCAR Bénin, je souhaite prendre un rendez-vous à l'atelier SAV pour mon véhicule.",
    },
    {
      title: "Pièces de Rechange d'Origine",
      desc: "Vérifier la disponibilité d'une référence",
      text: "Bonjour SOCAR Bénin, je recherche une pièce de rechange d'origine certifiée pour mon véhicule.",
    },
    {
      title: "Location LOCAR",
      desc: "Tarifs et réservation courte/longue durée",
      text: "Bonjour SOCAR Bénin, je souhaite un devis pour la location d'un véhicule chez LOCAR.",
    },
  ];

  const handleOpenPrompt = (text: string) => {
    const url = `https://wa.me/${DEALERSHIP_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#121216] border border-zinc-700/80 rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          <div className="p-4 bg-emerald-950/70 border-b border-emerald-800/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">
                  SOCAR BÉNIN · WhatsApp Direct
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Conseillers en ligne à Cotonou</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-zinc-400 hover:text-white rounded transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-2 text-xs">
            <p className="text-zinc-300 text-[11px] mb-3">
              Choisissez votre motif d&apos;échange pour démarrer instantanément une conversation WhatsApp :
            </p>

            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleOpenPrompt(p.text)}
                className="w-full text-left p-2.5 bg-[#181820] hover:bg-[#20202c] border border-zinc-800/80 hover:border-emerald-700/50 rounded-lg transition-all group cursor-pointer flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {p.title}
                  </div>
                  <div className="text-[11px] text-zinc-400">{p.desc}</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>
            ))}
          </div>

          <div className="p-3 bg-[#15151b] border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
            <span>Numéro vérifié :</span>
            <span className="font-mono text-zinc-200">{DEALERSHIP_INFO.whatsappDisplay}</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-200 cursor-pointer group"
        aria-label="Contacter SOCAR Bénin sur WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          WhatsApp SOCAR
        </span>
        <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
      </button>
    </div>
  );
};
