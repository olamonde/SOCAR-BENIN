import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BRANDS, Brand } from "@/src/data/brands";

interface BrandSectionProps {
  onSelectBrandFilter: (brandName: string) => void;
}

export const BrandSection: React.FC<BrandSectionProps> = ({
  onSelectBrandFilter,
}) => {
  return (
    <section id="marques" className="py-24 bg-[#0d0d10] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-wider text-[#e11d48] font-bold mb-2">
            Distribution Officielle & Partenariats
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight text-balance mb-4">
            Nos marques partenaires d&apos;exception.
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            SOCAR Bénin est le représentant exclusif et distributeur agréé de constructeurs mondiaux de référence. Chaque véhicule bénéficie du support direct des usines, d&apos;une garantie officielle et de techniciens certifiés.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="bg-[#131318] border border-zinc-800/80 hover:border-zinc-700 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-black/50 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-zinc-400 font-mono">
                    {brand.country}
                  </span>
                  <span className="text-[11px] font-semibold text-[#e11d48]">
                    {brand.modelsCount}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-1 group-hover:text-zinc-100 transition-colors">
                  {brand.name}
                </h3>

                <div className="text-xs text-zinc-400 font-medium mb-3">
                  {brand.status}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {brand.description}
                </p>

                <div className="mb-6 pt-3 border-t border-zinc-800/80">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Modèles phares :
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.highlightModels.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded font-mono"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {brand.id === "changan" || brand.id === "deepal" || brand.id === "suzuki" ? (
                  <button
                    onClick={() => {
                      const brandFilterKey =
                        brand.id === "changan"
                          ? "CHANGAN"
                          : brand.id === "deepal"
                          ? "DEEPAL"
                          : "SUZUKI";
                      onSelectBrandFilter(brandFilterKey);
                    }}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Découvrir les modèles {brand.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="text-center py-2 text-xs text-zinc-400 border border-dashed border-zinc-800 rounded">
                    Atelier SAV & Pièces certifiées d&apos;origine
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
