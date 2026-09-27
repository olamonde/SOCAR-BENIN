import React, { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, ArrowUpRight } from "lucide-react";
import { DEALERSHIP_INFO } from "@/src/data/dealership";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBookingModal: (type?: "devis" | "essai" | "sav") => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "accueil", label: "Accueil" },
    { id: "vehicules", label: "Véhicules" },
    { id: "marques", label: "Marques" },
    { id: "services", label: "Services" },
    { id: "a-propos", label: "À propos" },
    { id: "actualites", label: "Actualités" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0b]/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#0a0a0b]/90 via-[#0a0a0b]/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-6 Links) — Zone 3 (1-2 Actions) */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick("accueil")}
            className="flex items-center text-left group cursor-pointer focus-visible:outline-none"
            aria-label="SOCAR BÉNIN Accueil"
          >
            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-zinc-200 transition-colors">
              SOCAR <span className="text-[#e11d48]">BÉNIN</span>
            </span>
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors cursor-pointer ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e11d48] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${DEALERSHIP_INFO.phoneGeneral.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#e11d48]" />
              <span className="tabular-nums font-mono">
                {DEALERSHIP_INFO.phoneGeneral}
              </span>
            </a>

            <button
              onClick={() => onOpenBookingModal("devis")}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded-md transition-colors cursor-pointer flex items-center gap-2 shadow-sm whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Demander un devis</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBookingModal("devis")}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#e11d48] rounded-md"
            >
              Devis
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e12] border-b border-zinc-800 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2 px-3 rounded-md text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                  activeSection === link.id
                    ? "bg-zinc-800/80 text-white font-semibold text-[#e11d48]"
                    : "text-zinc-300 hover:bg-zinc-800/50 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-zinc-800 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 px-3">
                <span>Showroom Cotonou :</span>
                <a
                  href={`tel:${DEALERSHIP_INFO.phoneGeneral.replace(/\s+/g, "")}`}
                  className="font-mono text-zinc-200"
                >
                  {DEALERSHIP_INFO.phoneGeneral}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    onOpenBookingModal("essai");
                    setMobileMenuOpen(false);
                  }}
                  className="py-2.5 text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-md text-center"
                >
                  Réserver un essai
                </button>
                <button
                  onClick={() => {
                    onOpenBookingModal("sav");
                    setMobileMenuOpen(false);
                  }}
                  className="py-2.5 text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded-md text-center"
                >
                  Rendez-vous SAV
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
