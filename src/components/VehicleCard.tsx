import React from "react";
import { ArrowRight, Check, MessageSquare, Plus, Zap, Fuel, Gauge, SlidersHorizontal } from "lucide-react";
import { Vehicle } from "@/src/data/vehicles";
import { DEALERSHIP_INFO } from "@/src/data/dealership";

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle: (vehicleId: string) => void;
  onRequestQuote: (vehicle: Vehicle) => void;
  isCompared?: boolean;
  onToggleCompare?: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onSelectVehicle,
  onRequestQuote,
  isCompared = false,
  onToggleCompare,
}) => {
  // WhatsApp direct link with pre-filled vehicle inquiry
  const whatsappUrl = `https://wa.me/${DEALERSHIP_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Bonjour SOCAR Bénin, je suis intéressé par le véhicule ${vehicle.name} (${vehicle.brand} - ${vehicle.motorType}). Pouvez-vous me transmettre la disponibilité et les modalités d'acquisition ? Merci.`
  )}`;

  return (
    <article className="group bg-[#121216] border border-zinc-800/80 hover:border-zinc-700/80 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-black/40">
      {/* Lead with imagery */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} chez SOCAR Bénin`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-80" />

        {/* Quiet brand & body indicator */}
        <div className="absolute top-3 left-3 text-[11px] font-semibold text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
          {vehicle.brand}
        </div>

        {/* Compare button overlay */}
        {onToggleCompare && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(vehicle);
            }}
            className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 backdrop-blur-md cursor-pointer ${
              isCompared
                ? "bg-[#e11d48] text-white font-medium"
                : "bg-black/60 hover:bg-black/80 text-zinc-300"
            }`}
            title="Ajouter au comparateur"
          >
            {isCompared ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Sélectionné</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Comparer</span>
              </>
            )}
          </button>
        )}

        {/* Key highlight kicker */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          <span className="font-mono text-emerald-400 font-semibold text-[11px] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
            {vehicle.keyHighlight}
          </span>
          <span className="text-zinc-400 text-[11px] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
            {vehicle.motorType}
          </span>
        </div>
      </div>

      {/* Content block */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header metadata */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5">
            <span>{vehicle.bodyType}</span>
            <span aria-hidden="true">·</span>
            <span>{vehicle.specs.seats} places</span>
            <span aria-hidden="true">·</span>
            <span>{vehicle.specs.drivetrain}</span>
          </div>

          <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2 group-hover:text-zinc-100 transition-colors">
            {vehicle.name}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
            {vehicle.shortDescription}
          </p>

          {/* Quick Technical Specs Grid */}
          <div className="grid grid-cols-2 gap-2 pt-3 pb-4 border-t border-zinc-800/80 text-xs">
            <div className="flex items-center gap-2 text-zinc-300">
              <Gauge className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span className="font-mono truncate">{vehicle.specs.power}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              {vehicle.motorType === "Électrique" ? (
                <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              ) : (
                <Fuel className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              )}
              <span className="font-mono truncate">{vehicle.specs.rangeOrConsumption}</span>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelectVehicle(vehicle.id)}
            className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Détails & Specs</span>
            <ArrowRight className="w-3 h-3 text-zinc-400" />
          </button>

          <button
            onClick={() => onRequestQuote(vehicle)}
            className="py-2 px-3 text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded transition-colors cursor-pointer"
            title="Demander un devis officiel"
          >
            Devis
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/40 rounded transition-colors"
            title="Contacter sur WhatsApp"
            aria-label={`Contacter sur WhatsApp pour ${vehicle.name}`}
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
};
