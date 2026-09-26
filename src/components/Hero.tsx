import React from "react";
import { ArrowRight, ChevronRight, Zap, ShieldCheck } from "lucide-react";
import heroDeepalS07 from "@/src/assets/images/hero_deepal_s07_1790457647779.jpg";
import { DEALERSHIP_INFO } from "@/src/data/dealership";
import { Vehicle } from "@/src/data/vehicles";

interface HeroProps {
  onExploreVehicles: () => void;
  onOpenBookingModal: (type?: "devis" | "essai" | "sav") => void;
  onSelectVehicle: (vehicleId: string) => void;
  heroVehicle: Vehicle;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreVehicles,
  onOpenBookingModal,
  onSelectVehicle,
  heroVehicle,
}) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end pt-28 pb-12 overflow-hidden bg-[#0a0a0b]">
      {/* Background Hero Image with measured optical scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDeepalS07}
          alt="DEEPAL S07 SUV électrique chez SOCAR Bénin"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] transition-transform duration-1000 scale-100"
        />
        {/* Measured dark gradient scrims for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/90 via-[#0a0a0b]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Unboxed clean metadata kicker (Zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-300 font-medium mb-4">
            <span className="text-[#e11d48] font-bold">SOCAR BÉNIN</span>
            <span aria-hidden="true" className="text-zinc-500">·</span>
            <span>Distributeur Officiel Agréé</span>
            <span aria-hidden="true" className="text-zinc-500">·</span>
            <span>Depuis 1973</span>
          </div>

          {/* Powerful Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] text-balance mb-5">
            L&apos;automobile autrement.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
            Concessionnaire officiel Changan, Deepal et Suzuki à Cotonou. Découvrez notre sélection exclusive de véhicules neufs, hybrides et 100% électriques avec garantie constructeur et service après-vente d&apos;excellence.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onExploreVehicles}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded-md transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-lg shadow-[#e11d48]/20 group"
            >
              <span>Découvrir nos véhicules</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenBookingModal("devis")}
              className="px-6 py-3.5 text-sm font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 rounded-md transition-colors cursor-pointer backdrop-blur-sm"
            >
              Demander un devis officiel
            </button>
          </div>

          {/* Marquee Vehicle Highlight Preview */}
          <div className="bg-[#121216]/90 border border-zinc-800/90 rounded-lg p-4 backdrop-blur-md max-w-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold text-white">{heroVehicle.name}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-zinc-400">{heroVehicle.tagline}</span>
                </div>
                <div className="text-xs text-zinc-300">
                  <span className="font-mono text-zinc-100 font-medium">{heroVehicle.specs.power}</span>
                  <span className="mx-2 text-zinc-600">|</span>
                  <span className="font-mono text-emerald-400 font-medium">{heroVehicle.specs.rangeOrConsumption}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectVehicle(heroVehicle.id)}
                className="shrink-0 text-xs font-semibold text-zinc-200 hover:text-white flex items-center gap-1 group py-1.5 px-3 bg-zinc-800/80 hover:bg-zinc-700/80 rounded transition-colors"
              >
                <span>Fiche technique</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar at bottom of Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {DEALERSHIP_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-zinc-200 mt-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-zinc-500">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
