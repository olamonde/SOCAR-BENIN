import React from "react";
import { CheckCircle2, MapPin, Award, History, Building2, Users } from "lucide-react";
import facilityImage from "@/src/assets/images/facility_socar_showroom_1790457694072.jpg";
import { DEALERSHIP_INFO } from "@/src/data/dealership";

export const AboutSection: React.FC = () => {
  return (
    <section id="a-propos" className="py-24 bg-[#0d0d10] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid: Presentation Text & High-End Showroom Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-wider text-[#e11d48] font-bold mb-2">
              Institution & Héritage
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight text-balance mb-6">
              Plus de 50 ans au service de l&apos;automobile béninoise.
            </h2>

            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed mb-8">
              <p>
                Fondée en <strong className="text-white">1973</strong>, la <strong className="text-white">Société Commerciale d&apos;Affrètement et de Représentation (SOCAR S.A.)</strong> est l&apos;un des piliers historiques du secteur automobile et de la distribution d&apos;équipements au Bénin.
              </p>
              <p>
                Filiale du <strong className="text-white">Groupe FADOUL</strong>, acteur industriel et commercial majeur en Afrique de l&apos;Ouest depuis 1988, SOCAR Bénin s&apos;est imposée comme le partenaire de confiance des particuliers, des grandes entreprises et des institutions publiques.
              </p>
              <p>
                Aujourd&apos;hui distributeur officiel exclusif de <strong className="text-white">CHANGAN AUTO</strong> et pionnier de l&apos;électromobilité avec <strong className="text-white">DEEPAL</strong>, SOCAR Bénin combine tradition de fiabilité et technologies d&apos;avant-garde.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 bg-[#141419] border border-zinc-800/80 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-white mb-0.5">
                    Pièces 100% Certifiées d&apos;Origine
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Traçabilité absolue et garantie constructeur sur chaque composant.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#141419] border border-zinc-800/80 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-white mb-0.5">
                    Atelier & Ingénierie Homologués
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Équipements électroniques officiels et techniciens qualifiés.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#141419] border border-zinc-800/80 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-white mb-0.5">
                    Véhicules Tropicalisés
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Refroidissement et filtration renforcés pour nos conditions de roulage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#141419] border border-zinc-800/80 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-white mb-0.5">
                    Réseau Showrooms & SAV
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Présence stratégique à Cotonou Akpakpa, Centre-ville et Bohicon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <img
                src={facilityImage}
                alt="Showroom SOCAR Bénin à Cotonou"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-xs text-zinc-200">
                <div className="font-display font-bold text-white text-base mb-1">
                  Showroom & Ateliers Techniques SOCAR
                </div>
                <p className="text-zinc-300 text-[11px]">
                  Rue 1200 Akpakpa, Cotonou · Plus de 5 000 m² dédiés à la vente, à l&apos;entretien mécanique et au stock de pièces d&apos;origine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Showrooms locations overview */}
        <div className="pt-12 border-t border-zinc-800">
          <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-6">
            Nos Implantations & Points de Service au Bénin
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEALERSHIP_INFO.showrooms.map((showroom) => (
              <div
                key={showroom.id}
                className="bg-[#121216] border border-zinc-800 p-5 rounded-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#e11d48] font-bold mb-2">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{showroom.city}</span>
                    {showroom.isHeadquarter && (
                      <span className="text-[10px] text-zinc-400 font-normal">· Siège</span>
                    )}
                  </div>

                  <h4 className="font-display font-bold text-base text-white mb-1">
                    {showroom.name}
                  </h4>

                  <p className="text-xs text-zinc-400 mb-3">
                    {showroom.address}
                  </p>

                  <div className="text-xs font-mono text-zinc-300 mb-3">
                    Tél: {showroom.phone}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400">
                  <span>Horaires : Lun - Ven {showroom.hoursWeekday}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
