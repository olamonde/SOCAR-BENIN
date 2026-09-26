import React from "react";
import { Wrench, ShieldCheck, Car, Paintbrush, Zap, Calendar, ArrowRight, Phone } from "lucide-react";
import { SERVICES, DealershipService } from "@/src/data/services";
import { DEALERSHIP_INFO } from "@/src/data/dealership";

interface ServicesSectionProps {
  onOpenBookingModal: (type?: "devis" | "essai" | "sav" | "pieces" | "locar") => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBookingModal,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case "vente-vehicules-neufs":
        return <Car className="w-5 h-5 text-[#e11d48]" />;
      case "atelier-sav-mecanique":
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      case "pieces-rechange-origine":
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case "carrosserie-peinture":
        return <Paintbrush className="w-5 h-5 text-sky-400" />;
      case "locar-location":
        return <Car className="w-5 h-5 text-purple-400" />;
      case "energie-groupes":
        return <Zap className="w-5 h-5 text-yellow-400" />;
      default:
        return <Wrench className="w-5 h-5 text-zinc-400" />;
    }
  };

  const handleAction = (service: DealershipService) => {
    switch (service.ctaAction) {
      case "rdv-sav":
        onOpenBookingModal("sav");
        break;
      case "devis-pieces":
        onOpenBookingModal("pieces");
        break;
      case "locar":
        onOpenBookingModal("locar");
        break;
      case "commercial":
        onOpenBookingModal("devis");
        break;
      default:
        onOpenBookingModal("devis");
        break;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0a0a0b] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-[#e11d48] font-bold mb-2">
              Savoir-Faire & Prestations
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight text-balance">
              L&apos;excellence du service automobile certifié.
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-3 leading-relaxed">
              De l&apos;acquisition à l&apos;entretien périodique en passant par la fourniture de pièces garanties, SOCAR Bénin vous assure une expérience sans compromis.
            </p>
          </div>

          <div className="shrink-0 bg-[#141418] border border-zinc-800 p-4 rounded-lg">
            <div className="text-xs text-zinc-400 mb-1">
              Assistance technique directe SAV :
            </div>
            <a
              href={`tel:${DEALERSHIP_INFO.phoneMobileSav.replace(/\s+/g, "")}`}
              className="font-mono text-sm font-bold text-white hover:text-[#e11d48] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#e11d48]" />
              <span>{DEALERSHIP_INFO.phoneMobileSav}</span>
            </a>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#121216] border border-zinc-800/80 hover:border-zinc-700/80 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-zinc-900 rounded-md border border-zinc-800">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-zinc-400">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2 group-hover:text-zinc-100 transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 mb-6 pt-3 border-t border-zinc-800/80">
                  {service.keyPoints.map((point, idx) => (
                    <li key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                      <span className="text-[#e11d48] font-bold text-sm leading-none">·</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => handleAction(service)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-zinc-800/90 hover:bg-[#e11d48] rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
