import React from "react";
import { X, Trash2, Check, ArrowRight } from "lucide-react";
import { Vehicle } from "@/src/data/vehicles";

interface VehicleComparatorModalProps {
  vehicles: Vehicle[];
  onClose: () => void;
  onRemoveVehicle: (vehicleId: string) => void;
  onSelectVehicle: (vehicleId: string) => void;
  onRequestQuote: (vehicle: Vehicle) => void;
}

export const VehicleComparatorModal: React.FC<VehicleComparatorModalProps> = ({
  vehicles,
  onClose,
  onRemoveVehicle,
  onSelectVehicle,
  onRequestQuote,
}) => {
  if (vehicles.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div className="bg-[#121216] border border-zinc-800 rounded-xl w-full max-w-5xl overflow-hidden shadow-2xl relative my-auto">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#16161d] border-b border-zinc-800 flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-xl text-white">
              Comparateur de Véhicules SOCAR
            </h2>
            <p className="text-xs text-zinc-400">
              Comparez les spécifications techniques et motorisations côte à côte
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-800/80 rounded-full transition-colors cursor-pointer"
            aria-label="Fermer le comparateur"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table */}
        <div className="p-4 sm:p-6 overflow-x-auto max-h-[70vh]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-4 px-3 text-zinc-400 font-semibold w-1/4">
                  Critères
                </th>
                {vehicles.map((v) => (
                  <th key={v.id} className="py-4 px-3 w-1/4 align-top">
                    <div className="flex flex-col">
                      <div className="relative aspect-video rounded-md overflow-hidden bg-zinc-900 mb-2">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => onRemoveVehicle(v.id)}
                          className="absolute top-1 right-1 p-1 bg-black/70 hover:bg-red-900/80 text-zinc-300 hover:text-white rounded transition-colors"
                          title="Retirer du comparateur"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] font-semibold text-[#e11d48]">
                        {v.brand}
                      </span>
                      <h3 className="font-display font-bold text-sm text-white">
                        {v.name}
                      </h3>
                      <button
                        onClick={() => {
                          onRequestQuote(v);
                          onClose();
                        }}
                        className="mt-2 py-1.5 px-3 text-[11px] font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded text-center transition-colors"
                      >
                        Demander un devis
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-mono">
              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Type de carrosserie
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-zinc-200">
                    {v.bodyType}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Motorisation
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-emerald-400 font-semibold">
                    {v.motorType}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Puissance
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-zinc-100">
                    {v.specs.power}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Autonomie / Consommation
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-zinc-100">
                    {v.specs.rangeOrConsumption}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Transmission
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-zinc-300">
                    {v.specs.transmission}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Transmission roues
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-zinc-300">
                    {v.specs.drivetrain}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Places assises
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-zinc-200">
                    {v.specs.seats} places
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Garde au sol
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-zinc-200">
                    {v.dimensions.groundClearance}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Capacité de coffre
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-zinc-300 text-[11px]">
                    {v.dimensions.trunkCapacity}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 text-zinc-400 font-sans font-medium">
                  Garantie SOCAR
                </td>
                {vehicles.map((v) => (
                  <td key={v.id} className="py-3 px-3 text-emerald-400 text-[11px]">
                    {v.warranty}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
