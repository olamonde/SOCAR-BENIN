import heroDeepalS07 from "@/src/assets/images/hero_deepal_s07_1790457647779.jpg";
import vehicleHunter from "@/src/assets/images/vehicle_changan_hunter_1790457659251.jpg";
import vehicleUniT from "@/src/assets/images/vehicle_changan_unit_1790457670983.jpg";
import vehicleG318 from "@/src/assets/images/vehicle_deepal_g318_1790457683826.jpg";

export type MotorType = "Électrique" | "Hybride / Prolongateur" | "Essence" | "Diesel";
export type BodyType = "SUV" | "Pickup" | "Berline" | "Crossover" | "4x4 Tout-Terrain" | "Citadine";
export type BrandName = "DEEPAL" | "CHANGAN" | "SUZUKI";

export interface Vehicle {
  id: string;
  name: string;
  brand: BrandName;
  model: string;
  bodyType: BodyType;
  motorType: MotorType;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  keyHighlight: string;
  featured?: boolean;
  specs: {
    power: string;
    rangeOrConsumption: string;
    transmission: string;
    seats: number;
    drivetrain: string;
    batteryOrDisplacement: string;
    acceleration0100?: string;
    topSpeed?: string;
  };
  dimensions: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
    groundClearance: string;
    trunkCapacity: string;
  };
  equipmentHighlights: string[];
  safetyFeatures: string[];
  warranty: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: "deepal-s07",
    name: "DEEPAL S07",
    brand: "DEEPAL",
    model: "S07",
    bodyType: "SUV",
    motorType: "Électrique",
    tagline: "SUV 100% électrique au design avant-gardiste",
    shortDescription: "Un SUV électrique futuriste combinant 475 km d'autonomie CLTC, un habitacle high-tech et des finitions de luxe adaptées aux exigences urbaines et routières.",
    fullDescription: "Le DEEPAL S07 réinvente le plaisir automobile à Cotonou. Équipé d'une motorisation électrique synchrone à aimants permanents délivrant 218 chevaux, il offre des accélérations fulgurantes en silence absolu. Son cockpit numérique intègre un affichage tête haute AR-HUD géant et un écran central tactile rotatif de 15,6 pouces motorisé qui s'oriente vers le conducteur ou le passager. Ses portières sans cadre et son toit vitré panoramique créent une sensation d'espace incomparable.",
    image: heroDeepalS07,
    keyHighlight: "475 km d'autonomie",
    featured: true,
    specs: {
      power: "218 ch (160 kW) / 320 Nm",
      rangeOrConsumption: "475 km (Norme CLTC)",
      transmission: "Automatique à rapport unique",
      seats: 5,
      drivetrain: "Propulsion arrière (RWD)",
      batteryOrDisplacement: "Batterie LFP 66.8 kWh (Recharge rapide 30-80% en 35 min)",
      acceleration0100: "7.5 secondes",
      topSpeed: "180 km/h"
    },
    dimensions: {
      length: "4 750 mm",
      width: "1 930 mm",
      height: "1 625 mm",
      wheelbase: "2 900 mm",
      groundClearance: "175 mm",
      trunkCapacity: "445 L (extensible à 1 385 L) + coffre avant 125 L"
    },
    equipmentHighlights: [
      "Écran central rotatif motorisé Sunflower de 15.6 pouces",
      "Système de projection holographique AR-HUD",
      "Toit panoramique solaire avec rideau électrique occultant",
      "Portières sans cadre avec poignées affleurantes rétractables",
      "Sièges zéro gravité avec fonction ventilation et massage",
      "Système audio immersif 14 haut-parleurs avec appuie-têtes sonores"
    ],
    safetyFeatures: [
      "Caméras panoramiques 360° avec vision châssis transparent 540°",
      "Régulateur de vitesse adaptatif IACC intelligent",
      "Freinage d'urgence automatique AEB avec détection piétons",
      "Alerte de franchissement involontaire de ligne avec maintien actif",
      "6 airbags haute protection rideaux et latéraux"
    ],
    warranty: "5 ans / 150 000 km (Batterie garantie 8 ans / 160 000 km)"
  },
  {
    id: "changan-hunter",
    name: "CHANGAN Hunter",
    brand: "CHANGAN",
    model: "Hunter",
    bodyType: "Pickup",
    motorType: "Diesel",
    tagline: "Le pickup double cabine robuste conçu pour dominer tous les terrains",
    shortDescription: "Châssis haute résistance, charge utile supérieure à 1 tonne et capacités de franchissement incomparables pour les professionnels et baroudeurs au Bénin.",
    fullDescription: "Développé en partenariat avec les plus grands standards internationaux, le Changan Hunter est taillé pour affronter les conditions routières les plus exigeantes du Bénin. Sa motorisation Turbo Diesel associée à une transmission intégrale 4x4 enclenchable avec blocage de différentiel garantit une motricité absolue dans le sable, la boue et les pistes latéritiques. Son habitacle spacieux offre le confort d'un SUV moderne avec un double écran de 10 pouces, une sellerie ergonomique et une climatisation renforcée spéciale climat tropical.",
    image: vehicleHunter,
    keyHighlight: "1 Tonne de charge utile · 4x4",
    featured: true,
    specs: {
      power: "150 ch / 350 Nm de couple",
      rangeOrConsumption: "7.8 L / 100 km",
      transmission: "Boîte manuelle 6 rapports ou automatique 6 rapports",
      seats: 5,
      drivetrain: "4x4 enclenchable avec boîte de transfert courte/longue",
      batteryOrDisplacement: "Moteur 1.9L Turbo Diesel Intercooler",
      acceleration0100: "11.2 secondes",
      topSpeed: "165 km/h"
    },
    dimensions: {
      length: "5 330 mm",
      width: "1 930 mm",
      height: "1 835 mm",
      wheelbase: "3 180 mm",
      groundClearance: "231 mm (capacité de passage à gué 600 mm)",
      trunkCapacity: "Benne : 1 600 x 1 595 x 500 mm avec revêtement haute protection"
    },
    equipmentHighlights: [
      "Double cabine 5 vraies places avec espace aux genoux généreux",
      "Écran multimédia tactile 10 pouces avec MirrorLink",
      "Climatisation automatique renforcée grand froid tropicalisé",
      "Marchepieds latéraux renforcés en acier et arceau de benne inox",
      "Jantes alliage 18 pouces chaussées de pneumatiques All-Terrain",
      "Rétroviseurs électriques chauffants et dégivrants"
    ],
    safetyFeatures: [
      "Contrôle électronique de stabilité ESP Bosch 9.3",
      "Aide au démarrage en côte (HHC) et contrôle de descente (HDC)",
      "Capteurs de recul avec caméra de vision arrière HD",
      "Châssis échelle en acier galvanisé haute rigidité torsionnelle",
      "Système de surveillance de pression des pneus (TPMS)"
    ],
    warranty: "3 ans / 100 000 km avec assistance SOCAR"
  },
  {
    id: "changan-uni-t",
    name: "CHANGAN UNI-T",
    brand: "CHANGAN",
    model: "UNI-T",
    bodyType: "Crossover",
    motorType: "Essence",
    tagline: "Le SUV crossover futuriste à la pointe du design mondial",
    shortDescription: "Silhouette racée, calandre paramétrique sans bordure et moteur BlueCore 1.5L Turbo de 180 ch délivrant des sensations de conduite sportives.",
    fullDescription: "Le Changan UNI-T a bousculé les codes du design automobile international. Doté d'une calandre tridimensionnelle révolutionnaire de 150 motifs géométriques et d'un aileron arrière en V distinctif, il attire tous les regards. Sous le capot, le moteur 4 cylindres BlueCore 1.5T à injection directe haute pression (350 bars) est couplé à une transmission à double embrayage DCT 7 rapports à bain d'huile pour des passages de rapports instantanés et une efficience remarquable.",
    image: vehicleUniT,
    keyHighlight: "180 ch BlueCore · Boîte DCT 7",
    featured: true,
    specs: {
      power: "180 ch / 300 Nm de couple",
      rangeOrConsumption: "6.5 L / 100 km",
      transmission: "Boîte automatique à double embrayage DCT 7 rapports",
      seats: 5,
      drivetrain: "Traction avant (FWD)",
      batteryOrDisplacement: "Moteur 1.5L Turbo BlueCore NE",
      acceleration0100: "7.6 secondes",
      topSpeed: "205 km/h"
    },
    dimensions: {
      length: "4 515 mm",
      width: "1 870 mm",
      height: "1 565 mm",
      wheelbase: "2 710 mm",
      groundClearance: "180 mm",
      trunkCapacity: "350 L (extensible à 1 185 L)"
    },
    equipmentHighlights: [
      "Double dalle panoramique incurvée 10.25 pouces cockpit numérique",
      "Calandre avant intégrée sans cadre signature UNI",
      "Poignées de portes affleurantes électriques à détection d'approche",
      "Toit panoramique XXL de 0.79 m² en verre teinté anti-UV",
      "Sélecteur de mode de conduite (Eco, Normal, Sport)",
      "Recharge smartphone sans fil par induction 15W"
    ],
    safetyFeatures: [
      "Système de conduite assistée autonome niveau 2 Changan",
      "Freinage d'urgence automatique AEB avec reconnaissance d'obstacles",
      "Système de caméras 360° avec enregistreur vidéo embarqué HD",
      "Régulateur de vitesse adaptatif ACC stop & go",
      "6 airbags frontaux, latéraux et rideaux"
    ],
    warranty: "5 ans / 150 000 km garanti par SOCAR"
  },
  {
    id: "deepal-g318",
    name: "DEEPAL G318",
    brand: "DEEPAL",
    model: "G318",
    bodyType: "4x4 Tout-Terrain",
    motorType: "Hybride / Prolongateur",
    tagline: "Le tout-terrain cybernétique nouvelle génération",
    shortDescription: "Véhicule d'expédition moderne combinant transmission intégrale bimoteur électrique, prolongateur d'autonomie et plus de 1 000 km de rayon d'action total.",
    fullDescription: "Nommé en hommage à la légendaire route d'aventure 318, le Deepal G318 propose un look baroudeur futuriste et des capacités tout-terrain extrêmes. Son architecture électrique à prolongateur d'autonomie élimine toute angoisse liée à la distance. Avec deux moteurs électriques (transmission 4WD intelligente), une suspension pneumatique réglable en hauteur et 16 modes tout-terrain, le G318 franchit n'importe quel obstacle tout en offrant un silence de roulement exceptionnel.",
    image: vehicleG318,
    keyHighlight: "1 000+ km d'autonomie totale · 4WD",
    featured: true,
    specs: {
      power: "430 ch (316 kW) en cumulé bimoteur / 572 Nm",
      rangeOrConsumption: "190 km 100% électrique / 1 000+ km combiné",
      transmission: "Électrique intégrale 4WD bimoteur intelligente",
      seats: 5,
      drivetrain: "Transmission intégrale 4x4 électrique avec blocage virtuel",
      batteryOrDisplacement: "Batterie 35.1 kWh + Générateur 1.5L Turbo haute efficacité",
      acceleration0100: "6.3 secondes",
      topSpeed: "185 km/h"
    },
    dimensions: {
      length: "5 010 mm",
      width: "1 985 mm",
      height: "1 960 mm (avec rampe de toit)",
      wheelbase: "2 880 mm",
      groundClearance: "240 mm (suspension pneumatique ajustable)",
      trunkCapacity: "818 L extensible à 1 747 L (plancher plat modulable bivouac)"
    },
    equipmentHighlights: [
      "Rampe de projecteurs LED intégrée sur le toit homologuée",
      "Écran central multimédia 14.6 pouces et instrumentation 12.3 pouces",
      "Prise extérieure V2L pour alimenter du matériel de camping en 220V",
      "Suspension pneumatique active avec amortissement piloté CDC",
      "Système de réduction active du bruit de roulement dans l'habitacle",
      "Banquette arrière rabattable formant un couchage de 1.8 mètre"
    ],
    safetyFeatures: [
      "Blindage inférieur de protection de la batterie en alliage haute ténacité",
      "Vision nocturne thermique et caméras 540° avec guidage d'angles morts",
      "Contrôle de descente automatique et assistance au franchissement de gué",
      "Alerte de collision frontale et latérale avec intervention d'urgence"
    ],
    warranty: "5 ans / 150 000 km (Batterie garantie 8 ans / 160 000 km)"
  },
  {
    id: "deepal-s05",
    name: "DEEPAL S05",
    brand: "DEEPAL",
    model: "S05",
    bodyType: "SUV",
    motorType: "Électrique",
    tagline: "Le SUV compact électrique interactif & branché",
    shortDescription: "Format idéal pour la ville, caméra 4K gimbal intégrée de série, affichage intelligent et autonomie de 510 km.",
    fullDescription: "Le Deepal S05 concentre le savoir-faire technologique de Changan Auto dans un gabarit compact et agile. Véritable compagnon numérique, il intègre sur son toit une caméra 4K gimbal stabilisée sur 3 axes permettant de capturer des vidéos et photos de vos trajets en direct. Son design épuré sans calandre, ses optiques LED dynamiques et son intérieur minimaliste habillé de matériaux écoresponsables incarnent la mobilité de demain.",
    image: heroDeepalS07,
    keyHighlight: "510 km d'autonomie · Caméra 4K",
    specs: {
      power: "238 ch (175 kW) / 320 Nm",
      rangeOrConsumption: "510 km (CLTC)",
      transmission: "Automatique à rapport unique",
      seats: 5,
      drivetrain: "Propulsion arrière",
      batteryOrDisplacement: "Batterie 56.12 kWh LFP CATL",
      acceleration0100: "7.3 secondes",
      topSpeed: "180 km/h"
    },
    dimensions: {
      length: "4 620 mm",
      width: "1 900 mm",
      height: "1 600 mm",
      wheelbase: "2 880 mm",
      groundClearance: "170 mm",
      trunkCapacity: "492 L + coffre avant 159 L"
    },
    equipmentHighlights: [
      "Caméra 4K Gimbal intelligente de toit Deepal avec zoom optique",
      "Écran 2.5K ultra-haute résolution de 15.4 pouces",
      "Phares interactifs intelligents projetant des signaux au sol",
      "Cockpit Qualcomm Snapdragon 8155 ultra-fluide",
      "Double chargeur sans fil 50W avec ventilation active"
    ],
    safetyFeatures: [
      "Système de conduite assistée Deepal Pilot avec maintien de voie",
      "Détecteur d'angle mort et avertisseur de trafic transversal arrière",
      "Système de freinage automatique d'urgence avec radar millimétrique"
    ],
    warranty: "5 ans / 150 000 km (Batterie 8 ans / 160 000 km)"
  },
  {
    id: "changan-cs55-plus",
    name: "CHANGAN CS55 Plus",
    brand: "CHANGAN",
    model: "CS55 Plus",
    bodyType: "SUV",
    motorType: "Essence",
    tagline: "Le SUV familial moderne alliant puissance, confort et sécurité",
    shortDescription: "Moteur 1.5L Turbo 185 ch, transmission 7 DCT, toit panoramique ouvrant et habitacle spacieux taillé pour le quotidien des familles.",
    fullDescription: "Le Changan CS55 Plus de nouvelle génération est l'un des best-sellers de SOCAR Bénin. Il séduit par sa prestance extérieure, sa signature lumineuse LED affûtée et son remarquable rapport qualité-prix. Dans l'habitacle, l'ergonomie s'inspire de l'aviation avec un petit volant sport méplat, un tableau de bord surélevé et des sièges en cuir ventilés offrant un maintien parfait lors des longs trajets interurbains au Bénin.",
    image: vehicleUniT,
    keyHighlight: "185 ch · Toit panoramique · Cuir",
    specs: {
      power: "185 ch / 300 Nm",
      rangeOrConsumption: "6.9 L / 100 km",
      transmission: "Automatique 7 DCT",
      seats: 5,
      drivetrain: "Traction avant (FWD)",
      batteryOrDisplacement: "Moteur 1.5L Turbo BlueCore",
      acceleration0100: "8.1 secondes",
      topSpeed: "190 km/h"
    },
    dimensions: {
      length: "4 515 mm",
      width: "1 865 mm",
      height: "1 680 mm",
      wheelbase: "2 656 mm",
      groundClearance: "190 mm",
      trunkCapacity: "475 L (extensible à 1 415 L)"
    },
    equipmentHighlights: [
      "Système audio Pioneer avec 6 haut-parleurs",
      "Écran tactile 12.3 pouces avec Apple CarPlay et Android Auto",
      "Toit ouvrant panoramique électrique avec capteur anti-pincement",
      "Climatisation automatique bizone avec filtre purificateur PM2.5",
      "Hayon arrière motorisé avec ouverture mains libres au pied"
    ],
    safetyFeatures: [
      "Freinage autonome d'urgence (AEB)",
      "Régulateur de vitesse adaptatif avec fonction Stop & Go",
      "Caméra panoramique 360° avec vision 3D dynamique",
      "Système de fixation ISOFIX pour sièges enfants"
    ],
    warranty: "5 ans / 150 000 km garanti par SOCAR"
  },
  {
    id: "changan-cs95",
    name: "CHANGAN CS95",
    brand: "CHANGAN",
    model: "CS95",
    bodyType: "SUV",
    motorType: "Essence",
    tagline: "Le grand SUV de prestige 7 places par excellence",
    shortDescription: "Gabarit impressionnant de 5 mètres, moteur 2.0L Turbo 233 ch, transmission intégrale 4WD et luxe absolu pour voyager en première classe.",
    fullDescription: "Vaisseau amiral de la gamme thermique Changan chez SOCAR Bénin, le CS95 s'adresse aux familles nombreuses, aux dirigeants et aux institutions recherchant un véhicule statutaire et polyvalent. Ses 7 vraies places modulables, sa sellerie en cuir Nappa capitonné et son insonorisation d'exception procurent un confort royal. Sa transmission intégrale intelligente BorgWarner NexTrac répartit le couple instantanément pour une tenue de route magistrale sous la pluie comme sur piste.",
    image: vehicleHunter,
    keyHighlight: "7 Vraies places · Moteur 2.0T 233 ch · 4WD",
    specs: {
      power: "233 ch / 390 Nm",
      rangeOrConsumption: "8.9 L / 100 km",
      transmission: "Automatique Aisin 8 rapports",
      seats: 7,
      drivetrain: "4WD Transmission intégrale intelligente BorgWarner",
      batteryOrDisplacement: "Moteur 2.0L Turbo BlueCore 2.0T",
      acceleration0100: "9.2 secondes",
      topSpeed: "200 km/h"
    },
    dimensions: {
      length: "4 949 mm",
      width: "1 940 mm",
      height: "1 805 mm",
      wheelbase: "2 810 mm",
      groundClearance: "205 mm",
      trunkCapacity: "320 L en configuration 7 places (extensible à 2 000 L)"
    },
    equipmentHighlights: [
      "Sièges conducteur et passager chauffants, ventilés avec fonction massage",
      "Système audio Pioneer Hi-Fi 10 haut-parleurs avec caisson de basses",
      "Toit panoramique géant couvrant les 3 rangées de sièges",
      "Climatisation automatique trizone indépendante avec ouïes arrière",
      "Éclairage d'ambiance intérieur personnalisable 64 teintes"
    ],
    safetyFeatures: [
      "Pack complet d'aides à la conduite ADAS niveau 2",
      "Détection d'angles morts et avertisseur de changement de voie",
      "Caméras panoramiques 540° haute définition avec vision sous châssis",
      "8 airbags dont airbags rideaux intégrals protégeant les 3 rangées"
    ],
    warranty: "5 ans / 150 000 km avec assistance prioritaire SOCAR"
  },
  {
    id: "suzuki-jimny",
    name: "SUZUKI Jimny",
    brand: "SUZUKI",
    model: "Jimny",
    bodyType: "4x4 Tout-Terrain",
    motorType: "Essence",
    tagline: "L'authentique légende du tout-terrain compact",
    shortDescription: "Véritable baroudeur à châssis échelle, ponts rigides et boîte de transfert AllGrip Pro pour s'aventurer là où les autres s'arrêtent.",
    fullDescription: "Distribué et entretenu par le réseau SOCAR au Bénin, le Suzuki Jimny est le maître incontesté des terrains difficiles. Son châssis échelle robuste, ses angles d'attaque et de fuite exceptionnels et sa boîte de transfert à réducteur font des merveilles sur les pistes de brousse, les zones sablonneuses ou les pistes inondées. Compact, agile et indestructible, il incarne l'esprit d'aventure pur avec une simplicité mécanique gage de fiabilité éternelle.",
    image: vehicleG318,
    keyHighlight: "Boîte courte AllGrip Pro · Châssis échelle",
    specs: {
      power: "102 ch / 130 Nm",
      rangeOrConsumption: "6.8 L / 100 km",
      transmission: "Boîte manuelle 5 rapports ou automatique 4 rapports",
      seats: 4,
      drivetrain: "4x4 enclenchable avec réducteur AllGrip Pro",
      batteryOrDisplacement: "Moteur 1.5L essence 4 cylindres VVT K15B",
      acceleration0100: "12.8 secondes",
      topSpeed: "145 km/h"
    },
    dimensions: {
      length: "3 645 mm (avec roue de secours)",
      width: "1 645 mm",
      height: "1 720 mm",
      wheelbase: "2 250 mm",
      groundClearance: "210 mm (Angle d'attaque 37°, Angle de fuite 49°)",
      trunkCapacity: "85 L (extensible à 830 L dossiers rabattus)"
    },
    equipmentHighlights: [
      "Système AllGrip Pro avec levier de sélection 2H / 4H / 4L",
      "Écran multimédia tactile 7 pouces avec connectivité smartphone",
      "Climatisation automatique avec commandes robustes manipulables avec des gants",
      "Projecteurs LED avec lave-phares haute pression intégrés",
      "Roue de secours fixée sur la porte de coffre avec cache de protection"
    ],
    safetyFeatures: [
      "Contrôle de motricité en descente Hill Descent Control",
      "Aide au démarrage en côte Hill Hold Control",
      "Contrôle de trajectoire ESP et régulateur de vitesse",
      "Structure de caisse TECT à absorption de chocs"
    ],
    warranty: "3 ans / 100 000 km avec disponibilité permanente des pièces"
  },
  {
    id: "suzuki-grand-vitara",
    name: "SUZUKI Grand Vitara",
    brand: "SUZUKI",
    model: "Grand Vitara",
    bodyType: "SUV",
    motorType: "Hybride / Prolongateur",
    tagline: "Le SUV élégant à technologie hybride intelligente",
    shortDescription: "Lignes contemporaines, transmission AllGrip Select 4 modes et motorisation hybride SHVS pour une consommation de carburant réduite.",
    fullDescription: "Le nouveau Suzuki Grand Vitara allie le raffinement d'un SUV urbain haut de gamme à l'ADN 4x4 légendaire de Suzuki. Sa motorisation hybride optimise chaque goutte de carburant dans les embouteillages de Cotonou tout en délivrant du dynamisme sur les grands axes vers Porto-Novo ou Parakou. Son sélecteur AllGrip permet de choisir instantanément le mode adapté (Auto, Sport, Snow ou Lock) pour une sérénité totale par tout temps.",
    image: heroDeepalS07,
    keyHighlight: "Technologie Hybride · AllGrip Select 4x4",
    specs: {
      power: "103 ch hybride SHVS / 138 Nm",
      rangeOrConsumption: "5.2 L / 100 km",
      transmission: "Boîte automatique 6 rapports avec palettes au volant",
      seats: 5,
      drivetrain: "Transmission intégrale AllGrip Select 4x4",
      batteryOrDisplacement: "Moteur 1.5L Dualjet + Batterie Lithium-ion 12V SHVS",
      acceleration0100: "11.0 secondes",
      topSpeed: "175 km/h"
    },
    dimensions: {
      length: "4 345 mm",
      width: "1 795 mm",
      height: "1 645 mm",
      wheelbase: "2 600 mm",
      groundClearance: "210 mm",
      trunkCapacity: "373 L (extensible à 1 147 L)"
    },
    equipmentHighlights: [
      "Affichage tête haute couleur rétractable HUD",
      "Grand écran tactile HD de 9 pouces avec Apple CarPlay sans fil",
      "Toit ouvrant panoramique à double vitrage coulissant",
      "Caméra de vision 360° et chargeur sans fil",
      "Sellerie cuir bicolore avec surpiqûres sellier"
    ],
    safetyFeatures: [
      "Système de surveillance de la pression des pneumatiques (TPMS)",
      "6 airbags rideaux, latéraux et frontaux",
      "Freinage d'urgence automatique et alerte de franchissement de ligne"
    ],
    warranty: "3 ans / 100 000 km garanti par le réseau SOCAR"
  },
  {
    id: "suzuki-swift",
    name: "SUZUKI Swift",
    brand: "SUZUKI",
    model: "Swift",
    bodyType: "Citadine",
    motorType: "Essence",
    tagline: "L'icône citadine maniable, vive et ultra-économique",
    shortDescription: "Agilité urbaine hors pair, consommation record de 4.4L/100km et fiabilité éprouvée pour circuler avec style et sérénité.",
    fullDescription: "La Suzuki Swift est la citadine de prédilection au Bénin. Avec son rayon de braquage ultra-court de 4.8 mètres, elle se faufile et se stationne avec une facilité déconcertante dans le trafic urbain de Cotonou. Son moteur 1.2L Dualjet offre une vivacité pétillante tout en préservant le budget carburant. Son intérieur moderne propose un écran tactile avec connectivité smartphone complète.",
    image: vehicleUniT,
    keyHighlight: "Consommation 4.4 L/100km · Agilité urbaine",
    specs: {
      power: "83 ch / 107 Nm",
      rangeOrConsumption: "4.4 L / 100 km",
      transmission: "Boîte manuelle 5 rapports ou automatique CVT",
      seats: 5,
      drivetrain: "Traction avant (FWD)",
      batteryOrDisplacement: "Moteur 1.2L 4 cylindres Dualjet K12D",
      acceleration0100: "12.2 secondes",
      topSpeed: "175 km/h"
    },
    dimensions: {
      length: "3 860 mm",
      width: "1 735 mm",
      height: "1 495 mm",
      wheelbase: "2 450 mm",
      groundClearance: "145 mm",
      trunkCapacity: "265 L (extensible à 947 L)"
    },
    equipmentHighlights: [
      "Écran tactile 7 pouces avec connectivité smartphone",
      "Volant cuir multifonctions à méplat sport",
      "Climatisation automatique avec affichage digital",
      "Jantes alliage 16 pouces bicolores diamantées",
      "Feux diurnes à LED et antibrouillards intégrés"
    ],
    safetyFeatures: [
      "Freinage ABS avec répartiteur EBD et assistance au freinage BA",
      "Contrôle électronique de trajectoire ESP",
      "Fixations de sièges enfants ISOFIX à l'arrière"
    ],
    warranty: "3 ans / 100 000 km garanti par SOCAR"
  }
];
