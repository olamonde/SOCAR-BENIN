import React from "react";
import { Search, RotateCcw } from "lucide-react";
import { BrandName, BodyType, MotorType } from "@/src/data/vehicles";

interface VehicleFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  selectedBodyType: string;
  onBodyTypeChange: (bodyType: string) => void;
  selectedMotorType: string;
  onMotorTypeChange: (motorType: string) => void;
  onResetFilters: () => void;
  totalCount: number;
  filteredCount: number;
}

export const VehicleFilter: React.FC<VehicleFilterProps> = ({
  searchQuery,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  selectedBodyType,
  onBodyTypeChange,
  selectedMotorType,
  onMotorTypeChange,
  onResetFilters,
  totalCount,
  filteredCount,
}) => {
  const brands: { label: string; value: string }[] = [
    { label: "Toutes marques", value: "ALL" },
    { label: "DEEPAL (100% Électrique)", value: "DEEPAL" },
    { label: "CHANGAN AUTO", value: "CHANGAN" },
    { label: "SUZUKI", value: "SUZUKI" },
  ];

  const bodyTypes: { label: string; value: string }[] = [
    { label: "Tous types", value: "ALL" },
    { label: "SUV", value: "SUV" },
    { label: "Pickup 4x4", value: "Pickup" },
    { label: "Crossover", value: "Crossover" },
    { label: "4x4 Tout-Terrain", value: "4x4 Tout-Terrain" },
    { label: "Citadine", value: "Citadine" },
  ];

  const motorTypes: { label: string; value: string }[] = [
    { label: "Toutes motorisations", value: "ALL" },
    { label: "100% Électrique", value: "Électrique" },
    { label: "Hybride / Prolongateur", value: "Hybride / Prolongateur" },
    { label: "Essence", value: "Essence" },
    { label: "Diesel", value: "Diesel" },
  ];

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedBrand !== "ALL" ||
    selectedBodyType !== "ALL" ||
    selectedMotorType !== "ALL";

  return (
    <div className="bg-[#121216] border border-zinc-800 rounded-lg p-5 mb-8 shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-800/80">
        <div>
          <h2 className="font-display font-bold text-lg text-white">
            Trouvez votre véhicule
          </h2>
          <p className="text-xs text-zinc-400">
            Filtrez les modèles neufs officiels disponibles chez SOCAR Bénin
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-400">
            <strong className="text-white font-mono tabular-nums">{filteredCount}</strong> véhicule(s) sur{" "}
            <span className="font-mono tabular-nums">{totalCount}</span>
          </span>

          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1.5 text-xs text-[#e11d48] hover:text-[#be123c] font-medium transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Réinitialiser</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Controls Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Modèle, mot-clé (ex: Hunter, S07)..."
            className="w-full bg-[#18181f] border border-zinc-700/80 focus:border-[#e11d48] text-white text-xs pl-9 pr-3 py-2.5 rounded-md outline-none transition-colors"
          />
        </div>

        {/* Brand Select */}
        <div>
          <select
            value={selectedBrand}
            onChange={(e) => onBrandChange(e.target.value)}
            className="w-full bg-[#18181f] border border-zinc-700/80 focus:border-[#e11d48] text-white text-xs px-3 py-2.5 rounded-md outline-none transition-colors cursor-pointer"
          >
            {brands.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>

        {/* Body Type Select */}
        <div>
          <select
            value={selectedBodyType}
            onChange={(e) => onBodyTypeChange(e.target.value)}
            className="w-full bg-[#18181f] border border-zinc-700/80 focus:border-[#e11d48] text-white text-xs px-3 py-2.5 rounded-md outline-none transition-colors cursor-pointer"
          >
            {bodyTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* Motor Type Select */}
        <div>
          <select
            value={selectedMotorType}
            onChange={(e) => onMotorTypeChange(e.target.value)}
            className="w-full bg-[#18181f] border border-zinc-700/80 focus:border-[#e11d48] text-white text-xs px-3 py-2.5 rounded-md outline-none transition-colors cursor-pointer"
          >
            {motorTypes.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
