import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Navigation,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { DEALERSHIP_INFO } from "@/src/data/dealership";
import { VEHICLES } from "@/src/data/vehicles";

export const ContactSection: React.FC = () => {
  const [selectedShowroom, setSelectedShowroom] = useState<string>("akpakpa");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "devis",
    vehicleInterest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const activeShowroom =
    DEALERSHIP_INFO.showrooms.find((s) => s.id === selectedShowroom) ||
    DEALERSHIP_INFO.showrooms[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage("Veuillez renseigner au moins votre nom complet et numéro de téléphone.");
      return;
    }
    setErrorMessage("");
    setIsSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/${DEALERSHIP_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour SOCAR Bénin, je souhaite entrer en contact avec un conseiller pour une demande d'informations."
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#0d0d10] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-wider text-[#e11d48] font-bold mb-2">
            Disponibilité & Écoute
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight text-balance">
            Contactez SOCAR Bénin.
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-2 leading-relaxed">
            Nos équipes commerciales et techniques sont à votre entière disposition à Cotonou et Bohicon pour concrétiser votre projet automobile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contacts & Showrooms */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Buttons Bar */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={`tel:${DEALERSHIP_INFO.phoneGeneral.replace(/\s+/g, "")}`}
                className="p-3 bg-[#181820] hover:bg-[#20202a] border border-zinc-800 rounded-lg text-center flex flex-col items-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#e11d48]" />
                <span className="text-[11px] font-semibold text-white">Appeler</span>
              </a>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/50 rounded-lg text-center flex flex-col items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-semibold text-emerald-300">WhatsApp</span>
              </a>

              <a
                href={activeShowroom.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#181820] hover:bg-[#20202a] border border-zinc-800 rounded-lg text-center flex flex-col items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span className="text-[11px] font-semibold text-white">Itinéraire</span>
              </a>
            </div>

            {/* Showroom Selector Tabs */}
            <div className="bg-[#121216] border border-zinc-800 rounded-lg p-5">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                Sélectionnez une agence :
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {DEALERSHIP_INFO.showrooms.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedShowroom(s.id)}
                    className={`py-1.5 px-3 text-xs font-semibold rounded transition-colors cursor-pointer ${
                      selectedShowroom === s.id
                        ? "bg-[#e11d48] text-white"
                        : "bg-zinc-800/80 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {s.city} {s.isHeadquarter ? "(Siège)" : ""}
                  </button>
                ))}
              </div>

              {/* Active Showroom Details */}
              <div className="space-y-4 text-xs">
                <div>
                  <h3 className="font-display font-bold text-base text-white mb-0.5">
                    {activeShowroom.name}
                  </h3>
                  <p className="text-zinc-400">{activeShowroom.tagline}</p>
                </div>

                <div className="flex items-start gap-3 text-zinc-300 pt-2 border-t border-zinc-800/80">
                  <MapPin className="w-4 h-4 text-[#e11d48] shrink-0 mt-0.5" />
                  <div>
                    <div>{activeShowroom.address}</div>
                    <div className="text-zinc-500 font-mono">{activeShowroom.city}, Bénin</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                  <a
                    href={`tel:${activeShowroom.phoneRaw}`}
                    className="font-mono text-zinc-200 hover:text-white"
                  >
                    {activeShowroom.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                  <a
                    href={`mailto:${activeShowroom.email}`}
                    className="text-zinc-300 hover:text-white"
                  >
                    {activeShowroom.email}
                  </a>
                </div>

                <div className="flex items-start gap-3 text-zinc-300">
                  <Clock className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <div>Lundi - Vendredi : {activeShowroom.hoursWeekday}</div>
                    <div className="text-zinc-400">Samedi : {activeShowroom.hoursSaturday}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80">
                  <div className="text-[11px] font-semibold text-zinc-400 mb-2">
                    Prestations sur ce site :
                  </div>
                  <ul className="space-y-1">
                    {activeShowroom.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zinc-400 text-[11px]">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121216] border border-zinc-800 rounded-lg p-6 sm:p-8">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Envoyez-nous un message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Recevez un retour sous 24h ouvrées de la part de nos conseillers SOCAR Bénin.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-950/40 border border-emerald-800/60 p-6 rounded-lg text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    Demande transmise avec succès !
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto mb-4">
                    Merci {formData.fullName}. Notre service commercial prendra contact avec vous au{" "}
                    <strong className="text-white font-mono">{formData.phone}</strong> très prochainement.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        subject: "devis",
                        vehicleInterest: "",
                        message: "",
                      });
                    }}
                    className="py-2 px-4 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-800/60 rounded text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Nom et Prénom <span className="text-[#e11d48]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Ex: Jean Houndé"
                        className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white text-xs px-3.5 py-2.5 rounded outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Numéro de Téléphone <span className="text-[#e11d48]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+229 01 XX XX XX XX"
                        className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white text-xs px-3.5 py-2.5 rounded outline-none transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Email professionnel ou personnel
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="nom@exemple.bj"
                        className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white text-xs px-3.5 py-2.5 rounded outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Objet de votre demande <span className="text-[#e11d48]">*</span>
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white text-xs px-3.5 py-2.5 rounded outline-none transition-colors cursor-pointer"
                      >
                        <option value="devis">Demande de devis véhicule neuf</option>
                        <option value="essai">Demande d&apos;essai sur route</option>
                        <option value="sav">Rendez-vous atelier & SAV</option>
                        <option value="pieces">Disponibilité pièce de rechange</option>
                        <option value="locar">Location de véhicule (LOCAR)</option>
                        <option value="energie">Solutions Énergie / Groupes</option>
                        <option value="autre">Autre renseignement</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Véhicule ou modèle concerné (optionnel)
                    </label>
                    <select
                      value={formData.vehicleInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, vehicleInterest: e.target.value })
                      }
                      className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white text-xs px-3.5 py-2.5 rounded outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Sélectionner un véhicule...</option>
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.name}>
                          {v.name} ({v.brand} - {v.motorType})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Votre message ou précisions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Précisez votre demande, le nombre de véhicules souhaités ou les détails de votre besoin..."
                      className="w-full bg-[#181820] border border-zinc-700 focus:border-[#e11d48] text-white text-xs px-3.5 py-2.5 rounded outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#e11d48]/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Envoyer ma demande à SOCAR Bénin</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
