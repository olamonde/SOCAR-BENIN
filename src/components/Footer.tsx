import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { DEALERSHIP_INFO } from "@/src/data/dealership";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectVehicle: (vehicleId: string) => void;
  onSelectBrandFilter: (brandName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectVehicle,
  onSelectBrandFilter,
}) => {
  return (
    <footer className="bg-[#08080a] border-t border-zinc-800 text-zinc-400 text-xs">
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Presentation Column */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate("accueil")}
              className="text-left font-display font-bold text-2xl text-white tracking-tight cursor-pointer"
            >
              SOCAR <span className="text-[#e11d48]">BÉNIN</span>
            </button>

            <p className="text-zinc-400 leading-relaxed max-w-sm">
              {DEALERSHIP_INFO.description}
            </p>

            <div className="flex items-center gap-2 text-zinc-300 font-medium pt-2">
              <ShieldCheck className="w-4 h-4 text-[#e11d48]" />
              <span>{DEALERSHIP_INFO.group} · {DEALERSHIP_INFO.yearsOfExcellence} ans d&apos;expertise</span>
            </div>

            <div className="pt-2 text-[11px] text-zinc-500">
              Société Anonyme régie par le droit OHADA · RCCM Cotonou
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { id: "accueil", label: "Accueil" },
                { id: "vehicules", label: "Véhicules neufs" },
                { id: "marques", label: "Nos marques" },
                { id: "services", label: "Services & SAV" },
                { id: "a-propos", label: "À propos de SOCAR" },
                { id: "actualites", label: "Actualités" },
                { id: "contact", label: "Contact & Showrooms" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicles Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Modèles Phares
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectVehicle("deepal-s07")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  DEEPAL S07 (SUV 100% Électrique)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectVehicle("changan-hunter")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  CHANGAN Hunter (Pickup 4x4)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectVehicle("changan-uni-t")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  CHANGAN UNI-T (Crossover Turbo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectVehicle("deepal-g318")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  DEEPAL G318 (4x4 Tout-Terrain Hybride)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectVehicle("changan-cs55-plus")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  CHANGAN CS55 Plus (SUV Familial)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectVehicle("suzuki-jimny")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  SUZUKI Jimny (Légende 4x4 AllGrip)
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts & Showrooms Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Coordonnées Officielles
            </h4>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e11d48] shrink-0 mt-0.5" />
                <span>Rue 1200 Akpakpa, Ancien Pont, Cotonou</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href={`tel:${DEALERSHIP_INFO.phoneGeneral.replace(/\s+/g, "")}`}
                  className="hover:text-white font-mono"
                >
                  {DEALERSHIP_INFO.phoneGeneral}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${DEALERSHIP_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-mono"
                >
                  WhatsApp: {DEALERSHIP_INFO.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href={`mailto:${DEALERSHIP_INFO.emailGeneral}`}
                  className="hover:text-white"
                >
                  {DEALERSHIP_INFO.emailGeneral}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <div>Lun - Ven : 08h00 - 18h00</div>
                  <div>Sam : 08h30 - 13h00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-zinc-800/80 py-6 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} SOCAR BÉNIN (Société Anonyme). Tous droits réservés. Filiale du Groupe FADOUL.
          </div>

          <div className="flex items-center gap-6">
            <span>Concessionnaire Officiel CHANGAN · DEEPAL · SUZUKI</span>
            <span>·</span>
            <span>République du Bénin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
