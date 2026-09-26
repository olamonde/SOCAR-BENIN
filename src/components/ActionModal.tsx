import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Calendar, FileText, Wrench, ShieldCheck, Car, AlertCircle } from "lucide-react";
import { VEHICLES, Vehicle } from "@/src/data/vehicles";
import { DEALERSHIP_INFO } from "@/src/data/dealership";

export type ActionModalType = "devis" | "essai" | "sav" | "pieces" | "locar";

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: ActionModalType;
  initialVehicle?: Vehicle | null;
}

export const ActionModal: React.FC<ActionModalProps> = ({
  isOpen,
  onClose,
  initialType = "devis",
  initialVehicle = null,
}) => {
  const [modalType, setModalType] = useState<ActionModalType>(initialType);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(
    initialVehicle?.id || ""
  );
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [showroomLocation, setShowroomLocation] = useState("akpakpa");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialType) setModalType(initialType);
    if (initialVehicle) setSelectedVehicleId(initialVehicle.id);
  }, [initialType, initialVehicle, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMessage("Veuillez renseigner votre nom complet et numéro de téléphone.");
      return;
    }
    setErrorMessage("");
    setIsSubmitted(true);
  };

  const getTitle = () => {
    switch (modalType) {
      case "devis":
        return "Demande de Devis Officiel";
      case "essai":
        return "Réserver un Essai Routier";
      case "sav":
        return "Rendez-vous Atelier & Entretien SAV";
      case "pieces":
        return "Disponibilité Pièces d'Origine";
      case "locar":
        return "Réservation Location Véhicule LOCAR";
    }
  };

  const getIcon = () => {
    switch (modalType) {
      case "devis":
        return <FileText className="w-5 h-5 text-[#e11d48]" />;
      case "essai":
        return <Car className="w-5 h-5 text-emerald-400" />;
      case "sav":
        return <Wrench className="w-5 h-5 text-sky-400" />;
      case "pieces":
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case "locar":
        return <Car className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#121216] border border-zinc-800 rounded-xl w-full max-w-xl overflow-hidden shadow-2xl relative my-auto">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#16161d] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg">
              {getIcon()}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {getTitle()}
              </h3>
              <p className="text-xs text-zinc-400">
                Service officiel SOCAR Bénin · Cotonou & Bohicon
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 rounded-full transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6">
          {isSubmitted ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h4 className="font-display font-bold text-lg text-white mb-1">
                Demande confirmée !
              </h4>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto mb-6">
                Merci {fullName}. Votre demande a bien été enregistrée. Notre conseiller dédié vous recontactera au{" "}
                <span className="font-mono text-white font-medium">{phone}</span> sous 2 heures ouvrées.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="py-2.5 px-6 text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded transition-colors"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Type Switcher */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800">
                {[
                  { id: "devis", label: "Devis" },
                  { id: "essai", label: "Essai" },
                  { id: "sav", label: "SAV" },
                  { id: "pieces", label: "Pièces" },
                  { id: "locar", label: "LOCAR" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setModalType(tab.id as ActionModalType)}
                    className={`py-1.5 px-2 text-[11px] font-semibold rounded transition-colors cursor-pointer text-center ${
                      modalType === tab.id
                        ? "bg-[#e11d48] text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {errorMessage && (
                <div className="p-2.5 bg-red-950/40 border border-red-800/60 rounded text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Vehicle Selection (if applicable) */}
              {(modalType === "devis" || modalType === "essai") && (
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Véhicule sélectionné
                  </label>
                  <select
                    value={selectedVehicleId}
                    onChange={(e) => setSelectedVehicleId(e.target.value)}
                    className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white px-3 py-2 rounded outline-none cursor-pointer"
                  >
                    <option value="">Sélectionner un véhicule...</option>
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.brand} - {v.motorType})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Nom et Prénom <span className="text-[#e11d48]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Votre nom complet"
                    className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white px-3 py-2 rounded outline-none"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Téléphone (Bénin) <span className="text-[#e11d48]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+229 01 XX XX XX XX"
                    className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white px-3 py-2 rounded outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="adresse@email.com"
                    className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white px-3 py-2 rounded outline-none"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Agence souhaitée
                  </label>
                  <select
                    value={showroomLocation}
                    onChange={(e) => setShowroomLocation(e.target.value)}
                    className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white px-3 py-2 rounded outline-none cursor-pointer"
                  >
                    <option value="akpakpa">Akpakpa Direction (Cotonou)</option>
                    <option value="centre-ville">Showroom Énergie / 3 Banques</option>
                    <option value="bohicon">Agence Bohicon</option>
                  </select>
                </div>
              </div>

              {/* Date selection for test drive or SAV */}
              {(modalType === "essai" || modalType === "sav") && (
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white px-3 py-2 rounded outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Commentaires ou spécifications
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Informations supplémentaires ou détails du besoin..."
                  className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white px-3 py-2 rounded outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded transition-colors cursor-pointer"
                >
                  Confirmer et transmettre à SOCAR Bénin
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
