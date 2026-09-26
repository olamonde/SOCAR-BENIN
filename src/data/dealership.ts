export interface Showroom {
  id: string;
  name: string;
  tagline: string;
  address: string;
  city: string;
  phone: string;
  phoneRaw: string;
  email: string;
  hoursWeekday: string;
  hoursSaturday: string;
  isHeadquarter?: boolean;
  features: string[];
  googleMapsUrl: string;
}

export const DEALERSHIP_INFO = {
  name: "SOCAR BÉNIN",
  fullName: "Société Commerciale d'Affrètement et de Représentation (SOCAR S.A.)",
  group: "Filiale du Groupe FADOUL",
  foundationYear: 1973,
  yearsOfExcellence: 52,
  description: "Leader historique de la distribution automobile, des pièces de rechange certifiées et du service après-vente d'excellence en République du Bénin depuis 1973.",
  slogan: "L'automobile autrement au Bénin",
  
  // Official Contacts
  phoneGeneral: "+229 21 33 11 81",
  phoneGeneralSecondary: "+229 21 33 11 82",
  phoneMobileCommercial: "+229 01 63 63 00 23",
  phoneMobileSav: "+229 01 63 63 00 54",
  phoneCommercial2: "+229 01 63 63 00 13",
  phoneCommercial3: "+229 01 63 63 00 24",
  
  // Official WhatsApp business number
  whatsappNumber: "2290163630023",
  whatsappDisplay: "+229 01 63 63 00 23",
  
  // Official Email
  emailGeneral: "socar.benin@intnet.bj",
  emailSav: "sav@socar-benin.com",
  
  // Showrooms
  showrooms: [
    {
      id: "akpakpa",
      name: "Direction Générale & Showroom Principal",
      tagline: "Showroom véhicules neufs, SAV officiel & Magasin de pièces",
      address: "Rue 1200 Akpakpa, Ancien Pont, 01 BP 6",
      city: "Cotonou",
      phone: "+229 21 33 11 81 / +229 01 63 63 00 23",
      phoneRaw: "+22921331181",
      email: "socar.benin@intnet.bj",
      hoursWeekday: "08h00 - 18h00",
      hoursSaturday: "08h30 - 13h00",
      isHeadquarter: true,
      features: [
        "Showroom officiel Changan & Deepal",
        "Atelier mécanique haute technicité",
        "Banc de diagnostic électronique multi-marques",
        "Magasin central de pièces de rechange d'origine",
        "Atelier carrosserie & peinture au four",
        "Département de location LOCAR"
      ],
      googleMapsUrl: "https://maps.google.com/?q=SOCAR+Benin+Akpakpa+Cotonou"
    },
    {
      id: "centre-ville",
      name: "Showroom Énergie & Centre-Ville",
      tagline: "Espace commercial VIP & Mobilité électrique",
      address: "Face Ministère de l'Énergie, Carrefour 3 Banques",
      city: "Cotonou",
      phone: "+229 01 63 63 00 13",
      phoneRaw: "+2290163630013",
      email: "commercial@socar-benin.com",
      hoursWeekday: "08h30 - 18h30",
      hoursSaturday: "09h00 - 13h30",
      features: [
        "Espace d'exposition DEEPAL 100% électrique",
        "Conseillers commerciaux dédiés aux flottes",
        "Bornes de recharge rapide en démonstration",
        "Salon VIP de configuration personnalisée"
      ],
      googleMapsUrl: "https://maps.google.com/?q=Ministere+de+l+Energie+Cotonou"
    },
    {
      id: "bohicon",
      name: "Agence & Showroom Bohicon",
      tagline: "Présence régionale au cœur du Bénin",
      address: "Carrefour Dako, Route Nationale",
      city: "Bohicon",
      phone: "+229 01 63 63 00 25",
      phoneRaw: "+2290163630025",
      email: "bohicon@socar-benin.com",
      hoursWeekday: "08h00 - 17h30",
      hoursSaturday: "08h30 - 12h30",
      features: [
        "Exposition véhicules neufs & utilitaires",
        "Service d'entretien rapide",
        "Disponibilité pièces de première nécessité"
      ],
      googleMapsUrl: "https://maps.google.com/?q=Bohicon+Carrefour+Dako+Benin"
    }
  ],
  
  stats: [
    { label: "Années d'expérience", value: "50+", detail: "Présent au Bénin depuis 1973" },
    { label: "Marques officielles", value: "6+", detail: "Changan, Deepal, Suzuki, etc." },
    { label: "Pièces d'origine", value: "100%", detail: "Certifiées constructeurs avec garantie" },
    { label: "Sites au Bénin", value: "3", detail: "Showrooms & ateliers à Cotonou et Bohicon" }
  ]
};
