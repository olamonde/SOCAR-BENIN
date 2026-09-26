export interface Brand {
  id: string;
  name: string;
  country: string;
  status: string;
  tagline: string;
  description: string;
  specialty: string;
  modelsCount: string;
  highlightModels: string[];
}

export const BRANDS: Brand[] = [
  {
    id: "changan",
    name: "CHANGAN AUTO",
    country: "Chine (Centres R&D Italie, Japon, UK)",
    status: "Distributeur Officiel Exclusif au Bénin",
    tagline: "L'excellence technologique et le design mondial",
    description: "Fondé en 1862, Changan Automobile est l'un des quatre plus grands groupes automobiles chinois et un géant technologique mondial. Avec ses centres de design basés à Turin et de R&D moteur au Royaume-Uni, Changan propose des véhicules robustes, ultra-équipés et dotés des motorisations BlueCore de dernière génération.",
    specialty: "SUVs modernes, Crossovers sportifs & Pickups tout-terrain",
    modelsCount: "5+ modèles disponibles",
    highlightModels: ["Hunter Pickup", "UNI-T", "CS55 Plus", "CS95"]
  },
  {
    id: "deepal",
    name: "DEEPAL",
    country: "Marque Mobilité Électrique de Changan",
    status: "Distributeur Officiel au Bénin",
    tagline: "Pionnier de la mobilité 100% électrique et intelligente",
    description: "DEEPAL est la marque de prestige 100% électrique et à autonomie prolongée de Changan Auto. Conçue pour une clientèle exigeante en quête de technologie de rupture, DEEPAL allie designs futuristes, cockpits numériques interactifs, autonomies records et recharge ultra-rapide.",
    specialty: "SUVs et Berlines 100% électriques et prolongateur d'autonomie",
    modelsCount: "4 modèles disponibles",
    highlightModels: ["Deepal S07", "Deepal S05", "Deepal G318", "Deepal L07"]
  },
  {
    id: "suzuki",
    name: "SUZUKI",
    country: "Japon",
    status: "Partenaire de Distribution Officiel",
    tagline: "La référence japonaise de la fiabilité et de la sobriété",
    description: "Reconnue mondialement pour son ingénierie japonaise sans compromis, Suzuki conçoit des véhicules d'une robustesse légendaire adaptés au climat et aux routes du Bénin. De la mythique Jimny aux citadines Swift ultra-économiques, Suzuki garantit une tranquillité d'esprit absolue.",
    specialty: "Citadines agiles, Crossovers hybrides & Véritables 4x4",
    modelsCount: "4+ modèles disponibles",
    highlightModels: ["Jimny 4x4", "Grand Vitara Hybride", "Swift", "Fronx"]
  },
  {
    id: "eicher",
    name: "EICHER TRUCKS",
    country: "Inde (Joint-venture Volvo Group)",
    status: "Partenaire Véhicules Industriels",
    tagline: "La puissance au service du transport lourd et des chantiers",
    description: "Issu du partenariat technologique avec le groupe Volvo, Eicher Trucks est le partenaire de prédilection des entreprises de BTP, de transport de marchandises et de logistique au Bénin. Camions bennes, plateaux et tracteurs routiers alliant robustesse extrême et coûts d'exploitation réduits.",
    specialty: "Poids lourds, Camions bennes, Porteurs & Bus",
    modelsCount: "Gamme utilitaire & poids lourds",
    highlightModels: ["Pro 3000 Series", "Pro 6000 Heavy Duty", "Autobus Skyliner"]
  },
  {
    id: "peugeot-mitsubishi-isuzu",
    name: "PEUGEOT · MITSUBISHI · ISUZU",
    country: "France / Japon",
    status: "Marques Historiques & SAV Agréé",
    tagline: "Héritage d'excellence et prise en charge intégrale",
    description: "Importées et distribuées historiquement par le Groupe FADOUL et SOCAR Bénin depuis 1988, ces marques emblématiques bénéficient de l'expertise de nos maîtres techniciens, d'un stock de pièces d'origine garanti et d'un atelier équipé des bancs de diagnostic certifiés.",
    specialty: "Service après-vente, Réparation mécanique & Pièces d'origine",
    modelsCount: "Support SAV & Pièces certifiées",
    highlightModels: ["Peugeot 3008/5008/Landtrek", "Mitsubishi L200/Pajero", "Isuzu D-Max"]
  }
];
