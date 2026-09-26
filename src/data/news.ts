export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  highlight: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "lancement-deepal-benin",
    title: "Lancement de la gamme DEEPAL 100% électrique chez SOCAR Bénin",
    category: "Nouveauté & Électromobilité",
    date: "14 Janvier 2025",
    readTime: "3 min de lecture",
    summary: "SOCAR Bénin marque un tournant historique dans le paysage automobile national en introduisant la gamme premium DEEPAL, fleuron de la mobilité électrique de Changan Auto.",
    highlight: "Découvrez les modèles Deepal S07 et S05 disponibles en essai exclusif à notre showroom de Cotonou.",
    content: [
      "SOCAR Bénin franchit une étape décisive vers la transition énergétique en officialisant la distribution de DEEPAL, la marque 100% électrique et à autonomie prolongée de Changan Auto.",
      "Lors d'une soirée de présentation réunissant partenaires institutionnels, chefs d'entreprises et passionnés d'automobile au showroom d'Akpakpa, les invités ont pu découvrir en avant-première le SUV futuriste DEEPAL S07 et son habitacle haute technologie doté de l'écran rotatif Sunflower.",
      "« L'Afrique de l'Ouest et particulièrement le Bénin entrent de plain-pied dans la mobilité propre. Avec nos infrastructures de recharge et notre atelier équipé pour la maintenance haute tension, nous offrons aux conducteurs béninois une transition sereine et économique », a déclaré la direction de SOCAR Bénin.",
      "Les clients peuvent dès à présent réserver leur essai routier personnalisé et découvrir les solutions de bornes de recharge à domicile et en entreprise fournies par SOCAR."
    ]
  },
  {
    id: "nouveau-changan-hunter",
    title: "Le nouveau Changan Hunter s'impose comme la référence pickup au Bénin",
    category: "Lancement Véhicule",
    date: "28 Novembre 2024",
    readTime: "4 min de lecture",
    summary: "Puissance, charge utile d'une tonne et capacités de franchissement hors normes : le Changan Hunter séduit les professionnels du transport et du BTP.",
    highlight: "Disponible en versions double cabine 4x4 avec garantie constructeur et stock immédiat.",
    content: [
      "Conçu pour résister aux terrains les plus exigeants de la sous-région, le pickup Changan Hunter confirme son succès fulgurant auprès des entreprises de construction, des exploitants agricoles et des particuliers amateurs d'aventure.",
      "Grâce à son châssis renforcé en acier haute limite élastique, sa boîte de transfert courte pour les passages délicats et sa capacité de remorquage exceptionnelle de 3.5 tonnes, le Hunter s'impose comme un outil de travail infatigable.",
      "SOCAR Bénin propose des formules d'acquisition sur-mesure pour les flottes professionnelles avec contrat d'entretien préventif inclus et véhicule de relais assuré par notre division LOCAR en cas d'immobilisation."
    ]
  },
  {
    id: "campagne-sav-securite",
    title: "Campagne de contrôle sécurité & climatisation dans nos ateliers",
    category: "Service Après-Vente",
    date: "18 Octobre 2024",
    readTime: "2 min de lecture",
    summary: "Profitez d'un diagnostic électronique complet sur 25 points de contrôle et de remises exceptionnelles sur les pièces de freinage et filtration.",
    highlight: "Bilan gratuit sur rendez-vous pour tous les propriétaires de véhicules Changan, Suzuki et Peugeot.",
    content: [
      "Afin d'assurer une sécurité optimale sur nos routes, le département SAV de SOCAR Bénin invite tous ses clients à une grande campagne de vérification préventive.",
      "Au programme : passage à la valise de diagnostic officiel constructeur, contrôle d'efficacité du système de freinage sur notre banc dynamique, vérification des amortisseurs, de la géométrie des trains roulants et nettoyage du circuit de climatisation avec filtre anti-poussière.",
      "Des tarifs préférentiels sont appliqués durant toute la période sur les pièces d'usure certifiées d'origine constructeur en stock."
    ]
  },
  {
    id: "50-ans-socar-benin",
    title: "Plus de 50 ans d'histoire et de confiance automobile au Bénin",
    category: "Institutionnel",
    date: "12 Juillet 2024",
    readTime: "3 min de lecture",
    summary: "Depuis sa fondation en 1973, SOCAR Bénin est resté fidèle à sa promesse : offrir aux Béninois des véhicules fiables, un SAV d'excellence et une disponibilité sans faille des pièces de rechange.",
    highlight: "Un demi-siècle de passion automobile au service de la nation béninoise.",
    content: [
      "Créée en 1973 et renforcée par l'expertise continentale du Groupe FADOUL depuis la fin des années 1980, SOCAR Bénin a accompagné les grandes étapes du développement économique du Bénin.",
      "Des premières flottes d'entreprises aux derniers modèles électriques high-tech d'aujourd'hui, la société a su constamment moderniser ses installations, ses ateliers et la qualification technique de ses équipes locales.",
      "Pour les décennies à venir, SOCAR Bénin réaffirme sa volonté d'investir dans l'électromobilité, le digital et le renforcement de son maillage territorial avec de nouveaux points de service au plus près des usagers."
    ]
  }
];
