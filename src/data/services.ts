export interface DealershipService {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  keyPoints: string[];
  ctaLabel: string;
  ctaAction: "rdv-sav" | "devis-pieces" | "locar" | "commercial" | "contact";
}

export const SERVICES: DealershipService[] = [
  {
    id: "vente-vehicules-neufs",
    name: "Vente de Véhicules Neufs & Flottes",
    category: "Commercial",
    shortDesc: "Accompagnement personnalisé pour particuliers, professions libérales et gestionnaires de flottes d'entreprises.",
    fullDesc: "SOCAR Bénin met à votre disposition les gammes officielles Changan, Deepal et Suzuki tropicalisées pour répondre avec rigueur au climat et aux routes du Bénin. Nos conseillers d'affaires élaborent des solutions d'acquisition sur-mesure : achat comptant, facilités de paiement ou partenariats de financement bancaire et leasing avec les institutions de la place.",
    keyPoints: [
      "Véhicules 100% neufs avec garantie constructeur jusqu'à 5 ans",
      "Tropicalisation officielle (climatisation grand froid, filtres renforcés)",
      "Gestionnaire de compte dédié pour les flottes d'entreprises et ONG",
      "Formalités d'immatriculation et livraison clé en main"
    ],
    ctaLabel: "Demander une offre commerciale",
    ctaAction: "commercial"
  },
  {
    id: "atelier-sav-mecanique",
    name: "Service Après-Vente & Atelier Haute Technicité",
    category: "Technique",
    shortDesc: "Atelier certifié constructeurs équipé d'outils de diagnostic de pointe et techniciens qualifiés.",
    fullDesc: "L'atelier central de SOCAR Bénin à Akpakpa respecte les normes internationales les plus exigeantes. Dotés des valises de diagnostic électronique officiel Changan, Deepal et Suzuki, nos techniciens habilités réalisent l'entretien régulier, les réparations lourdes (moteur, boîte de vitesses, trains roulants) ainsi que la maintenance spécifique des motorisations électriques haute tension.",
    keyPoints: [
      "Techniciens certifiés formés en continu par les constructeurs",
      "Valises de diagnostic officielles multi-systèmes électroniques",
      "Banc de géométrie 3D laser et banc d'essai de freinage",
      "Maintenance certifiée des batteries et systèmes haute tension DEEPAL"
    ],
    ctaLabel: "Prendre rendez-vous atelier",
    ctaAction: "rdv-sav"
  },
  {
    id: "pieces-rechange-origine",
    name: "Magasin de Pièces de Rechange d'Origine",
    category: "Pièces & Consommables",
    shortDesc: "Plus de 20 000 références de pièces d'origine certifiées constructeur garantissant longévité et sécurité.",
    fullDesc: "Ne faites aucun compromis sur la longévité de votre véhicule. SOCAR Bénin dispose d'un stock permanent de pièces détachées 100% d'origine certifiées pour Changan, Deepal, Suzuki, mais aussi Peugeot, Mitsubishi et Isuzu. Chaque pièce bénéficie de la garantie constructeur officielle pour une sécurité maximale.",
    keyPoints: [
      "Pièces certifiées d'origine avec garantie officielle",
      "Stock centralisé de plus de 20 000 références à Cotonou",
      "Lubrifiants et fluides haut de gamme homologués (Liqui Moly)",
      "Service de commande express pour pièces spécifiques"
    ],
    ctaLabel: "Demander la disponibilité d'une pièce",
    ctaAction: "devis-pieces"
  },
  {
    id: "carrosserie-peinture",
    name: "Atelier Carrosserie & Peinture au Four",
    category: "Rénovation & Esthétique",
    shortDesc: "Cabine de peinture pressurisée et marbre laser pour redonner à votre véhicule son éclat d'origine.",
    fullDesc: "Victime d'un accrochage ou désireux de restaurer la peinture de votre voiture ? Notre département carrosserie dispose d'une cabine de peinture au four respectant les normes de l'industrie, garantissant un rendu miroir d'usine et une tenue irréprochable dans le temps. Notre banc de redressage au marbre permet de restaurer la géométrie exacte de tout châssis accidenté.",
    keyPoints: [
      "Cabine de peinture au four étanche aux poussières et température régulée",
      "Spectrophotomètre numérique pour un calage colorimétrique parfait",
      "Marbre de redressage pour remise aux cotes d'origine constructeur",
      "Partenariats agréés avec les compagnies d'assurance béninoises"
    ],
    ctaLabel: "Devis carrosserie & réparation",
    ctaAction: "rdv-sav"
  },
  {
    id: "locar-location",
    name: "LOCAR · Location Courte & Longue Durée",
    category: "Mobilité Flexible",
    shortDesc: "Division de location de véhicules récents, berlines, SUV et pickups, avec ou sans chauffeur.",
    fullDesc: "LOCAR, la division location de SOCAR Bénin, propose des solutions de mobilité flexibles pour vos déplacements d'affaires, missions officielles, séjours touristiques ou remplacements temporaires. Notre flotte moderne est entièrement révisée et climatisée, disponible avec des chauffeurs bilingues professionnels et courtois.",
    keyPoints: [
      "Flotte récente et diversifiée (SUV premium, Pickups 4x4, Berlines, Minibus)",
      "Formules à la journée, à la semaine ou en contrat longue durée (LLD)",
      "Option chauffeur professionnel expérimenté connaissant tout le Bénin",
      "Assistance dépannage et véhicule relais 24h/24 et 7j/7"
    ],
    ctaLabel: "Réserver un véhicule LOCAR",
    ctaAction: "locar"
  },
  {
    id: "energie-groupes",
    name: "Solutions Énergie & Groupes Électrogènes",
    category: "Énergie Industrielle",
    shortDesc: "Vente, installation et contrat de maintenance de groupes électrogènes professionnels.",
    fullDesc: "Garantissez la continuité de votre activité face aux aléas du réseau électrique. SOCAR Bénin commercialise et entretient des groupes électrogènes diesel robustes et insonorisés pour les entreprises, hôtels, cliniques, résidences et chantiers industriels à travers tout le Bénin.",
    keyPoints: [
      "Puissances adaptées de 10 kVA à 1 500 kVA",
      "Moteurs industriels éprouvés à faible consommation de carburant",
      "Inverseurs automatiques de source et tableaux de commande numériques",
      "Contrats de maintenance préventive et interventions d'urgence sur site"
    ],
    ctaLabel: "Étude de besoin énergétique",
    ctaAction: "contact"
  }
];
