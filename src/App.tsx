import React, { useState, useMemo, useEffect } from "react";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { VehicleFilter } from "@/src/components/VehicleFilter";
import { VehicleCard } from "@/src/components/VehicleCard";
import { VehicleDetailModal } from "@/src/components/VehicleDetailModal";
import { VehicleComparatorModal } from "@/src/components/VehicleComparatorModal";
import { BrandSection } from "@/src/components/BrandSection";
import { ServicesSection } from "@/src/components/ServicesSection";
import { AboutSection } from "@/src/components/AboutSection";
import { NewsSection } from "@/src/components/NewsSection";
import { NewsDetailModal } from "@/src/components/NewsDetailModal";
import { ContactSection } from "@/src/components/ContactSection";
import { FloatingWhatsApp } from "@/src/components/FloatingWhatsApp";
import { ActionModal, ActionModalType } from "@/src/components/ActionModal";
import { Footer } from "@/src/components/Footer";
import { VEHICLES, Vehicle } from "@/src/data/vehicles";
import { NewsArticle } from "@/src/data/news";
import { SlidersHorizontal, ArrowRight, X } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Filtering states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("ALL");
  const [selectedBodyType, setSelectedBodyType] = useState("ALL");
  const [selectedMotorType, setSelectedMotorType] = useState("ALL");

  // Modals
  const [selectedVehicleDetail, setSelectedVehicleDetail] = useState<Vehicle | null>(null);
  const [selectedNewsArticle, setSelectedNewsArticle] = useState<NewsArticle | null>(null);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [actionModalType, setActionModalType] = useState<ActionModalType>("devis");
  const [actionModalVehicle, setActionModalVehicle] = useState<Vehicle | null>(null);

  // Vehicle comparator (up to 3)
  const [comparedVehicles, setComparedVehicles] = useState<Vehicle[]>([]);
  const [isComparatorOpen, setIsComparatorOpen] = useState(false);

  // Compute filtered vehicles
  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      // Search text match
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = vehicle.name.toLowerCase().includes(query);
        const matchesBrand = vehicle.brand.toLowerCase().includes(query);
        const matchesDesc = vehicle.shortDescription.toLowerCase().includes(query);
        const matchesHighlight = vehicle.keyHighlight.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesHighlight) {
          return false;
        }
      }

      // Brand filter
      if (selectedBrand !== "ALL" && vehicle.brand !== selectedBrand) {
        return false;
      }

      // Body type filter
      if (selectedBodyType !== "ALL" && vehicle.bodyType !== selectedBodyType) {
        return false;
      }

      // Motor type filter
      if (selectedMotorType !== "ALL" && vehicle.motorType !== selectedMotorType) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedBrand, selectedBodyType, selectedMotorType]);

  // Navigate to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "accueil") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Open booking modal
  const handleOpenActionModal = (type: ActionModalType = "devis", vehicle: Vehicle | null = null) => {
    setActionModalType(type);
    setActionModalVehicle(vehicle);
    setActionModalOpen(true);
  };

  // Toggle vehicle for comparator
  const handleToggleCompare = (vehicle: Vehicle) => {
    if (comparedVehicles.some((v) => v.id === vehicle.id)) {
      setComparedVehicles((prev) => prev.filter((v) => v.id !== vehicle.id));
    } else {
      if (comparedVehicles.length >= 3) {
        alert("Vous pouvez comparer au maximum 3 véhicules simultanément.");
        return;
      }
      setComparedVehicles((prev) => [...prev, vehicle]);
    }
  };

  // Select brand filter from Brands section or footer
  const handleSelectBrandFilter = (brandName: string) => {
    setSelectedBrand(brandName);
    handleNavigate("vehicules");
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedBrand("ALL");
    setSelectedBodyType("ALL");
    setSelectedMotorType("ALL");
  };

  // Marquee vehicle is Deepal S07
  const heroVehicle = VEHICLES.find((v) => v.id === "deepal-s07") || VEHICLES[0];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f4f4f5] flex flex-col font-sans selection:bg-[#e11d48] selection:text-white">
      {/* Top Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBookingModal={(type) => handleOpenActionModal(type || "devis")}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="accueil">
          <Hero
            heroVehicle={heroVehicle}
            onExploreVehicles={() => handleNavigate("vehicules")}
            onOpenBookingModal={(type) => handleOpenActionModal(type || "devis")}
            onSelectVehicle={(vehicleId) => {
              const v = VEHICLES.find((item) => item.id === vehicleId);
              if (v) setSelectedVehicleDetail(v);
            }}
          />
        </section>

        {/* Vehicles Catalog Section */}
        <section id="vehicules" className="py-24 bg-[#0a0a0b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs uppercase tracking-wider text-[#e11d48] font-bold mb-2">
                Showroom Virtuel & Catalogue Officiel
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight text-balance">
                Découvrez nos véhicules neufs disponibles.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mt-2 leading-relaxed">
                Des SUVs 100% électriques aux pickups tout-terrain à haute charge utile, explorez les gammes officielles Changan, Deepal et Suzuki garanties par SOCAR Bénin.
              </p>
            </div>

            {/* Filter Module */}
            <VehicleFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedBrand={selectedBrand}
              onBrandChange={setSelectedBrand}
              selectedBodyType={selectedBodyType}
              onBodyTypeChange={setSelectedBodyType}
              selectedMotorType={selectedMotorType}
              onMotorTypeChange={setSelectedMotorType}
              onResetFilters={handleResetFilters}
              totalCount={VEHICLES.length}
              filteredCount={filteredVehicles.length}
            />

            {/* Vehicle Grid */}
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    onSelectVehicle={(id) => {
                      const v = VEHICLES.find((item) => item.id === id);
                      if (v) setSelectedVehicleDetail(v);
                    }}
                    onRequestQuote={(v) => handleOpenActionModal("devis", v)}
                    isCompared={comparedVehicles.some((item) => item.id === vehicle.id)}
                    onToggleCompare={handleToggleCompare}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-[#121216] border border-zinc-800 rounded-lg p-12 text-center max-w-xl mx-auto">
                <SlidersHorizontal className="w-10 h-10 text-zinc-500 mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Aucun véhicule ne correspond à vos critères
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Modifiez votre recherche ou réinitialisez les filtres pour consulter l&apos;ensemble de la gamme SOCAR Bénin.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="py-2.5 px-5 text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded transition-colors cursor-pointer"
                >
                  Afficher tous les véhicules ({VEHICLES.length})
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Brand Showcase Section */}
        <BrandSection onSelectBrandFilter={handleSelectBrandFilter} />

        {/* Services Section */}
        <ServicesSection
          onOpenBookingModal={(type) => handleOpenActionModal(type || "sav")}
        />

        {/* About Section */}
        <AboutSection />

        {/* News Section */}
        <NewsSection
          onSelectArticle={(article) => setSelectedNewsArticle(article)}
        />

        {/* Contact & Showrooms Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectVehicle={(id) => {
          const v = VEHICLES.find((item) => item.id === id);
          if (v) setSelectedVehicleDetail(v);
        }}
        onSelectBrandFilter={handleSelectBrandFilter}
      />

      {/* Floating Comparator Bar when vehicles are selected */}
      {comparedVehicles.length > 0 && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 bg-[#121216]/95 border border-zinc-700/80 backdrop-blur-md rounded-full px-5 py-3 shadow-2xl flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-pulse" />
            <span className="font-medium text-white">
              <strong className="font-mono">{comparedVehicles.length}</strong> véhicule(s) dans le comparateur
            </span>
          </div>

          <button
            onClick={() => setIsComparatorOpen(true)}
            className="py-1.5 px-4 bg-[#e11d48] hover:bg-[#be123c] text-white font-semibold rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Comparer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setComparedVehicles([])}
            className="p-1 text-zinc-400 hover:text-white rounded-full transition-colors"
            title="Vider le comparateur"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Assistance */}
      <FloatingWhatsApp />

      {/* Vehicle Detail Modal */}
      <VehicleDetailModal
        vehicle={selectedVehicleDetail}
        onClose={() => setSelectedVehicleDetail(null)}
        onRequestQuote={(v) => handleOpenActionModal("devis", v)}
        onBookTestDrive={(v) => handleOpenActionModal("essai", v)}
      />

      {/* Vehicle Comparator Modal */}
      {isComparatorOpen && (
        <VehicleComparatorModal
          vehicles={comparedVehicles}
          onClose={() => setIsComparatorOpen(false)}
          onRemoveVehicle={(id) =>
            setComparedVehicles((prev) => prev.filter((v) => v.id !== id))
          }
          onSelectVehicle={(id) => {
            setIsComparatorOpen(false);
            const v = VEHICLES.find((item) => item.id === id);
            if (v) setSelectedVehicleDetail(v);
          }}
          onRequestQuote={(v) => handleOpenActionModal("devis", v)}
        />
      )}

      {/* Action / Booking / Quote Modal */}
      <ActionModal
        isOpen={actionModalOpen}
        onClose={() => setActionModalOpen(false)}
        initialType={actionModalType}
        initialVehicle={actionModalVehicle}
      />

      {/* News Article Detail Modal */}
      <NewsDetailModal
        article={selectedNewsArticle}
        onClose={() => setSelectedNewsArticle(null)}
      />
    </div>
  );
}
