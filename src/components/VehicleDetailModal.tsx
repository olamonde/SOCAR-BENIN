import React, { useState } from "react";
import {
  X,
  Zap,
  Fuel,
  Shield,
  Gauge,
  Sliders,
  Maximize2,
  Calendar,
  MessageSquare,
  FileText,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Vehicle } from "@/src/data/vehicles";
import { DEALERSHIP_INFO } from "@/src/data/dealership";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onRequestQuote: (vehicle: Vehicle) => void;
  onBookTestDrive: (vehicle: Vehicle) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onRequestQuote,
  onBookTestDrive,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "equipment" | "safety">("overview");

  if (!vehicle) return null;

  const whatsappMessage = encodeURIComponent(
    `Bonjour SOCAR Bénin, je souhaite des informations détaillées et un devis officiel pour le véhicule ${vehicle.name} (${vehicle.brand} - ${vehicle.motorType}). Pouvez-vous me contacter ? Merci.`
  );
  const whatsappUrl = `https://wa.me/${DEALERSHIP_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div className="bg-[#121216] border border-zinc-800 rounded-xl w-full max-w-5xl overflow-hidden shadow-2xl relative my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Visual Showcase */}
        <div className="relative aspect-[16/8] sm:aspect-[21/9] bg-zinc-950 overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/40 to-transparent" />

          <div className="absolute bottom-4 left-4 sm:left-8 right-4 sm:right-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
              <span className="text-[#e11d48]">{vehicle.brand}</span>
              <span aria-hidden="true">·</span>
              <span>{vehicle.bodyType}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">{vehicle.motorType}</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              {vehicle.name}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl hidden sm:block mt-1">
              {vehicle.tagline}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 border-b border-zinc-800 px-4 sm:px-8 bg-[#15151b] overflow-x-auto">
          {[
            { id: "overview", label: "Vue d'ensemble" },
            { id: "specs", label: "Fiche technique" },
            { id: "equipment", label: "Équipements & Confort" },
            { id: "safety", label: "Sécurité & Assistance" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "border-[#e11d48] text-white"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-8 max-h-[55vh] overflow-y-auto">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Présentation du modèle
                </h4>
                <p className="text-sm text-zinc-200 leading-relaxed">
                  {vehicle.fullDescription}
                </p>
              </div>

              {/* Key Specs Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#181820] border border-zinc-800/80 p-3.5 rounded-lg">
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mb-1">
                    <Gauge className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Puissance</span>
                  </div>
                  <div className="font-mono font-bold text-sm text-white">
                    {vehicle.specs.power}
                  </div>
                </div>

                <div className="bg-[#181820] border border-zinc-800/80 p-3.5 rounded-lg">
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mb-1">
                    {vehicle.motorType === "Électrique" ? (
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Fuel className="w-3.5 h-3.5 text-amber-400" />
                    )}
                    <span>{vehicle.motorType === "Électrique" ? "Autonomie" : "Consommation"}</span>
                  </div>
                  <div className="font-mono font-bold text-sm text-emerald-400">
                    {vehicle.specs.rangeOrConsumption}
                  </div>
                </div>

                <div className="bg-[#181820] border border-zinc-800/80 p-3.5 rounded-lg">
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mb-1">
                    <Sliders className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Transmission</span>
                  </div>
                  <div className="font-mono font-bold text-sm text-white truncate">
                    {vehicle.specs.transmission}
                  </div>
                </div>

                <div className="bg-[#181820] border border-zinc-800/80 p-3.5 rounded-lg">
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mb-1">
                    <Shield className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Garantie SOCAR</span>
                  </div>
                  <div className="font-mono font-bold text-xs text-white">
                    {vehicle.warranty}
                  </div>
                </div>
              </div>

              {/* Warranty Banner */}
              <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-zinc-300">
                    Véhicule tropicalisé aux normes béninoises · Pièces certifiées disponibles en stock à Cotonou
                  </span>
                </div>
                <span className="text-zinc-400 font-mono text-[11px]">
                  Réseau officiel SOCAR
                </span>
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Motor & Performance */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 border-b border-zinc-800 pb-2">
                  Motorisation & Dynamique
                </h4>
                <dl className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Type de motorisation :</dt>
                    <dd className="font-mono font-medium text-white">{vehicle.motorType}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Puissance max :</dt>
                    <dd className="font-mono font-medium text-white">{vehicle.specs.power}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Transmission & Boîte :</dt>
                    <dd className="font-mono font-medium text-white">{vehicle.specs.transmission}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Transmission aux roues :</dt>
                    <dd className="font-mono font-medium text-white">{vehicle.specs.drivetrain}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Batterie / Cylindrée :</dt>
                    <dd className="font-mono font-medium text-white">{vehicle.specs.batteryOrDisplacement}</dd>
                  </div>
                  {vehicle.specs.acceleration0100 && (
                    <div className="flex justify-between py-1 border-b border-zinc-800/50">
                      <dt className="text-zinc-400">0 à 100 km/h :</dt>
                      <dd className="font-mono font-medium text-white">{vehicle.specs.acceleration0100}</dd>
                    </div>
                  )}
                  {vehicle.specs.topSpeed && (
                    <div className="flex justify-between py-1 border-b border-zinc-800/50">
                      <dt className="text-zinc-400">Vitesse maximale :</dt>
                      <dd className="font-mono font-medium text-white">{vehicle.specs.topSpeed}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Dimensions */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 border-b border-zinc-800 pb-2">
                  Gabarit & Dimensions
                </h4>
                <dl className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Longueur hors-tout :</dt>
                    <dd className="font-mono font-medium text-white">{vehicle.dimensions.length}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Largeur (hors rétros) :</dt>
                    <dd className="font-mono font-medium text-white">{vehicle.dimensions.width}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Hauteur :</dt>
                    <dd className="font-mono font-medium text-white">{vehicle.dimensions.height}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Empattement :</dt>
                    <dd className="font-mono font-medium text-white">{vehicle.dimensions.wheelbase}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Garde au sol :</dt>
                    <dd className="font-mono font-medium text-emerald-400">{vehicle.dimensions.groundClearance}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/50">
                    <dt className="text-zinc-400">Volume de chargement :</dt>
                    <dd className="font-mono font-medium text-white truncate max-w-[200px] text-right">
                      {vehicle.dimensions.trunkCapacity}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          {activeTab === "equipment" && (
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Équipements & Technologies de Série
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.equipmentHighlights.map((eq, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 bg-[#181820] border border-zinc-800/80 rounded-lg text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#e11d48] shrink-0 mt-0.5" />
                    <span className="text-zinc-200">{eq}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "safety" && (
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Sécurité active, passive & aides à la conduite
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.safetyFeatures.map((sf, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 bg-[#181820] border border-zinc-800/80 rounded-lg text-xs"
                  >
                    <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-200">{sf}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Clear Action Zone at bottom of modal */}
        <div className="p-4 sm:p-6 bg-[#16161d] border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-zinc-400">
            <span>Intéressé par le </span>
            <strong className="text-white">{vehicle.name}</strong> ?
            <span className="block text-[11px] text-zinc-500">
              Nos conseillers vous répondent sous 2h ouvrées à Cotonou
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                onRequestQuote(vehicle);
                onClose();
              }}
              className="py-2.5 px-4 text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded-md transition-colors cursor-pointer flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Demander un devis</span>
            </button>

            <button
              onClick={() => {
                onBookTestDrive(vehicle);
                onClose();
              }}
              className="py-2.5 px-4 text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Réserver un essai</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 text-xs font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/60 rounded-md transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
