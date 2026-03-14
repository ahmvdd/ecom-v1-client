// =============================================
// CONFIGURATION — modifiez votre numéro ici
// =============================================
export const WHATSAPP_NUMBER = '33782645675' // format international, sans + ni espaces

// =============================================
// IMPORTS IMAGES LOCALES
// =============================================
import imgAirPodsPro  from '../img/ca26fb54a237e1ec5172407638f44955.jpg'
import imgAirPodsMax  from '../img/c69c25bbffd2eebc5dc8fc19df14f004.jpg'
import imgChargeur    from '../img/dbfe75990174020a7ebf8799999212d8.jpg'
import imgCoque       from '../img/3204fa7be80a7c00b752f68b417be68e.jpg'

// =============================================
// CATALOGUE PRODUITS
// =============================================
export const products = [
  // ── iPhone ─────────────────────────────────
  {
    id: 1,
    isNew: true,
    name: 'iPhone 17 Pro Max',
    price: '899 €',
    priceNum: 899,
    category: 'Smartphones',
    categoryLabel: 'iPhone',
    description:
      "Le flagship ultime d'Apple. Puce A19 Pro, écran ProMotion 120Hz toujours actif, triple objectif pro avec zoom optique 5x. Disponible en plusieurs coloris. Livraison sous 7 à 14 jours.",
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop',
    models: ['256 Go', '512 Go', '1 To'],
    colors: [
      { name: 'Titane Noir',   value: '#3A3A3A' },
      { name: 'Titane Blanc',  value: '#E8E3DB', border: true },
      { name: 'Titane Naturel', value: '#B6B1A9' },
      { name: 'Titane Désert', value: '#C4A882' },
    ],
    specs: [
      { label: 'Puce',          value: 'Apple A19 Pro' },
      { label: 'Écran',         value: '6,9" Super Retina XDR ProMotion 120Hz' },
      { label: 'Appareil photo', value: 'Triple 48 MP + LiDAR + Zoom 5x' },
      { label: 'Batterie',      value: 'Jusqu\'à 33h de lecture vidéo' },
      { label: 'Résistance',    value: 'IP69 (eau & poussière)' },
      { label: 'Livraison',     value: '7 à 14 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Passer commande', desc: 'Contactez-nous sur WhatsApp en précisant le coloris et la capacité souhaités.' },
      { step: 2, title: 'Confirmation', desc: 'Vous recevez une confirmation sous 24h avec le délai exact de livraison.' },
      { step: 3, title: 'Livraison', desc: 'Livraison express sécurisée en 7 à 14 jours, suivi fourni.' },
    ],
    tips: [
      'Commandez tôt pour recevoir votre iPhone avant les délais annoncés.',
      'Précisez bien le coloris ET la capacité dans votre message WhatsApp.',
      'Compatible avec tous nos accessoires MagSafe et coques iPhone.',
    ],
  },

  // ── AirPods ────────────────────────────────
  {
    id: 2,
    isNew: false,
    name: 'AirPods Pro 1',
    price: '39,99 €',
    priceNum: 39.99,
    category: 'Audio',
    categoryLabel: 'Écouteurs sans fil',
    description:
      "Les AirPods Pro première génération avec réduction de bruit active, mode Transparence et résistance à l'eau IPX4. Son spatial pour une immersion totale.",
    image: imgAirPodsPro,
    models: [],
    colors: [
      { name: 'Blanc', value: '#F5F5F5', border: true },
    ],
    specs: [
      { label: 'Puce',               value: 'Apple H1' },
      { label: 'Réduction de bruit', value: 'ANC active + mode Transparence' },
      { label: 'Autonomie écouteurs', value: '4,5h (ANC activé)' },
      { label: 'Autonomie totale',   value: '24h avec boîtier' },
      { label: 'Résistance',         value: 'IPX4' },
      { label: 'Livraison',          value: '14 à 20 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Appairer', desc: 'Ouvrez le boîtier près de votre iPhone — l\'appairage est instantané.' },
      { step: 2, title: 'Ajuster l\'embout', desc: 'Faites le test d\'ajustement dans les réglages Bluetooth pour optimiser l\'isolation.' },
      { step: 3, title: 'Contrôles', desc: 'Appuyez sur le bord plat pour lecture/pause, maintenez pour basculer le mode ANC.' },
    ],
    tips: [
      'Le mode Transparence adaptatif baisse le volume si quelqu\'un vous parle.',
      'Nettoyez les grilles avec un cure-dent sec, jamais d\'eau directement.',
    ],
  },
  {
    id: 3,
    isNew: true,
    name: 'AirPods Pro 2',
    price: '50 €',
    priceNum: 50,
    category: 'Audio',
    categoryLabel: 'Écouteurs sans fil',
    description:
      "AirPods Pro 2e génération avec puce H2, réduction de bruit adaptative, son spatial personnalisé et boîtier MagSafe. Jusqu'à 30h d'autonomie totale.",
    image: imgAirPodsPro,
    models: [],
    colors: [
      { name: 'Blanc', value: '#F5F5F5', border: true },
    ],
    specs: [
      { label: 'Puce',               value: 'Apple H2' },
      { label: 'Réduction de bruit', value: 'ANC adaptatif 2e génération' },
      { label: 'Autonomie écouteurs', value: '6h (ANC activé)' },
      { label: 'Autonomie totale',   value: '30h avec boîtier MagSafe' },
      { label: 'Résistance',         value: 'IPX4 (eau et sueur)' },
      { label: 'Livraison',          value: '14 à 20 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Appairer', desc: 'Ouvrez le boîtier près de votre iPhone — l\'appairage est instantané sur tous vos appareils Apple.' },
      { step: 2, title: 'Son spatial personnalisé', desc: 'Activez le son spatial dans les réglages — Apple scanne votre oreille pour un rendu sur mesure.' },
      { step: 3, title: 'Recharger', desc: 'Posez le boîtier sur un chargeur MagSafe ou branchez en USB-C. 5 min = 1h d\'écoute.' },
    ],
    tips: [
      'Activez le "Son spatial personnalisé" dans les réglages pour un rendu unique.',
      'Le mode Transparence adaptatif gère automatiquement les sons importants.',
    ],
  },
  {
    id: 4,
    isNew: true,
    name: 'AirPods 4',
    price: '60 €',
    priceNum: 60,
    category: 'Audio',
    categoryLabel: 'Écouteurs sans fil',
    description:
      "Les AirPods 4, la dernière génération avec son spatial, puce H2 et design intra-auriculaire universel. Son exceptionnel sans embouts. Boîtier USB-C.",
    image: imgAirPodsMax,
    models: [],
    colors: [
      { name: 'Blanc', value: '#F5F5F5', border: true },
    ],
    specs: [
      { label: 'Puce',          value: 'Apple H2' },
      { label: 'Son spatial',   value: 'Oui, avec suivi de tête' },
      { label: 'Autonomie',     value: '5h + 30h avec boîtier' },
      { label: 'Design',        value: 'Intra sans embout (universel)' },
      { label: 'Charge',        value: 'USB-C' },
      { label: 'Livraison',     value: '14 à 20 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Appairer', desc: 'Ouvrez le boîtier près de votre iPhone — appairage automatique en un tap.' },
      { step: 2, title: 'Contrôles', desc: 'Pincez la tige pour lecture/pause ou basculer le mode son spatial.' },
      { step: 3, title: 'Recharger', desc: 'Branchez en USB-C ou posez sur chargeur MagSafe compatible.' },
    ],
    tips: [
      'Le design sans embout convient à toutes les morphologies d\'oreille.',
      'Activez le son spatial pour les films et séries — l\'expérience est immersive.',
    ],
  },

  // ── Chargeurs ──────────────────────────────
  {
    id: 5,
    isNew: false,
    name: 'Chargeur USB-C iPhone',
    price: '9,99 €',
    priceNum: 9.99,
    category: 'Accessoires',
    categoryLabel: 'Chargeur',
    description:
      "Chargeur USB-C compact compatible iPhone 15 et supérieur. Charge rapide 20W. Léger, universel, idéal pour la maison ou le voyage.",
    image: imgChargeur,
    models: [],
    colors: [
      { name: 'Blanc', value: '#F5F5F5', border: true },
      { name: 'Noir',  value: '#1C1C1E' },
    ],
    specs: [
      { label: 'Puissance',     value: '20W charge rapide' },
      { label: 'Connecteur',    value: 'USB-C' },
      { label: 'Compatible',    value: 'iPhone 15+, iPad, AirPods' },
      { label: 'Prise',         value: 'EU (type E/F)' },
      { label: 'Livraison',     value: '14 à 20 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Brancher', desc: 'Insérez dans une prise murale standard européenne.' },
      { step: 2, title: 'Connecter le câble', desc: 'Branchez un câble USB-C pour démarrer la charge rapide 20W.' },
    ],
    tips: [
      'Compatible avec tous les appareils USB-C : iPhone, iPad, AirPods.',
      'La charge rapide est activée automatiquement sur iPhone 8 et supérieur.',
    ],
  },
  {
    id: 6,
    isNew: false,
    name: 'Chargeur USB-C Rapide 30W',
    price: '14,99 €',
    priceNum: 14.99,
    category: 'Accessoires',
    categoryLabel: 'Chargeur',
    description:
      "Chargeur USB-C puissant 30W avec technologie GaN pour une chauffe minimale. Compatible iPhone, iPad Pro, MacBook Air et tous appareils USB-C.",
    image: 'https://images.unsplash.com/photo-1615086169217-83e1c06c9f4f?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Blanc', value: '#F5F5F5', border: true },
      { name: 'Noir',  value: '#1C1C1E' },
    ],
    specs: [
      { label: 'Puissance',   value: '30W (GaN)' },
      { label: 'Connecteur',  value: 'USB-C' },
      { label: 'Compatible',  value: 'iPhone, iPad Pro, MacBook Air' },
      { label: 'Technologie', value: 'GaN — chauffe 2x moins' },
      { label: 'Livraison',   value: '14 à 20 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Brancher', desc: 'Insérez dans une prise murale EU.' },
      { step: 2, title: 'Charge rapide', desc: 'La charge rapide démarre automatiquement selon l\'appareil connecté.' },
    ],
    tips: [
      'Le GaN chauffe 2x moins qu\'un chargeur classique — idéal pour une utilisation prolongée.',
      'Charge aussi les MacBook Air en mode veille.',
    ],
  },

  // ── Écouteurs filaires ─────────────────────
  {
    id: 7,
    isNew: false,
    name: 'Écouteurs Filaires USB-C',
    price: '14,99 €',
    priceNum: 14.99,
    category: 'Audio',
    categoryLabel: 'Écouteurs filaires',
    description:
      "Écouteurs filaires USB-C compatibles iPhone 15 et Android. Son clair et équilibré, microphone intégré pour les appels. Embouts en silicone inclus. Plug & play.",
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Blanc', value: '#F5F5F5', border: true },
      { name: 'Noir',  value: '#1C1C1E' },
    ],
    specs: [
      { label: 'Connecteur',    value: 'USB-C' },
      { label: 'Microphone',    value: 'Intégré (appels mains libres)' },
      { label: 'Compatible',    value: 'iPhone 15+, Android USB-C' },
      { label: 'Embouts',       value: '3 tailles incluses (S/M/L)' },
      { label: 'Livraison',     value: '14 à 20 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Brancher', desc: 'Connectez directement en USB-C — aucun adaptateur nécessaire.' },
      { step: 2, title: 'Choisir l\'embout', desc: 'Testez les 3 tailles incluses pour le meilleur confort et isolation.' },
    ],
    tips: [
      'Plug & play : aucune installation requise.',
      'Le microphone intégré est parfait pour les appels et les messages vocaux.',
    ],
  },

  // ── JBL ───────────────────────────────────
  {
    id: 8,
    isNew: true,
    name: 'JBL Pulse 5',
    price: '34,99 €',
    priceNum: 34.99,
    category: 'Audio',
    categoryLabel: 'Enceinte Bluetooth',
    description:
      "Enceinte Bluetooth JBL Pulse 5 avec éclairage LED 360° spectaculaire. Son puissant JBL Original Pro Sound, résistante à l'eau IP67, autonomie 12h.",
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Noir', value: '#1C1C1E' },
      { name: 'Blanc', value: '#F5F5F5', border: true },
    ],
    specs: [
      { label: 'Son',           value: 'JBL Original Pro Sound' },
      { label: 'Éclairage',     value: 'LED 360° personnalisable' },
      { label: 'Résistance',    value: 'IP67 (immergeable)' },
      { label: 'Autonomie',     value: '12h' },
      { label: 'Connexion',     value: 'Bluetooth 5.3' },
      { label: 'Livraison',     value: '14 à 20 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Allumer', desc: 'Maintenez le bouton power 2 secondes — l\'éclairage LED s\'active automatiquement.' },
      { step: 2, title: 'Appairer', desc: 'Activez le Bluetooth sur votre téléphone et sélectionnez "JBL Pulse 5".' },
      { step: 3, title: 'Personnaliser les LED', desc: 'Utilisez l\'app JBL Portable pour choisir les effets lumineux.' },
    ],
    tips: [
      'L\'IP67 la rend totalement étanche — utilisable à la piscine ou sous la pluie.',
      'Connectez 2 enceintes JBL en mode stéréo pour doubler la puissance.',
    ],
  },
  {
    id: 9,
    isNew: true,
    name: 'JBL Clip 6',
    price: '44,99 €',
    priceNum: 44.99,
    category: 'Audio',
    categoryLabel: 'Enceinte Bluetooth',
    description:
      "Mini enceinte Bluetooth JBL Clip 6 ultra-portable avec mousqueton intégré. IP67, autonomie 12h, son riche et puissant pour sa taille.",
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Noir',  value: '#1C1C1E' },
      { name: 'Bleu',  value: '#2563EB' },
      { name: 'Rouge', value: '#DC2626' },
      { name: 'Vert',  value: '#16A34A' },
    ],
    specs: [
      { label: 'Puissance',  value: '5W' },
      { label: 'Autonomie',  value: '12h' },
      { label: 'Résistance', value: 'IP67 (immergeable)' },
      { label: 'Fixation',   value: 'Mousqueton intégré' },
      { label: 'Connexion',  value: 'Bluetooth 5.3' },
      { label: 'Livraison',  value: '14 à 20 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Clipser', desc: 'Attachez le mousqueton à votre sac, vélo ou ceinture.' },
      { step: 2, title: 'Appairer', desc: 'Activez le Bluetooth et sélectionnez "JBL Clip 6".' },
      { step: 3, title: 'Recharger', desc: 'Branchez en USB-C. Une charge complète en 2h30.' },
    ],
    tips: [
      'Parfaite pour le sport, le camping et les déplacements — légère et compacte.',
      'L\'IP67 garantit une résistance à l\'immersion jusqu\'à 1m pendant 30 min.',
    ],
  },

  // ── Coques ────────────────────────────────
  {
    id: 10,
    isNew: false,
    name: 'Coque iPhone',
    price: '9,99 €',
    priceNum: 9.99,
    category: 'Accessoires',
    categoryLabel: 'Coque iPhone',
    description:
      "Coques iPhone disponibles en 7 modèles tendance. Protection renforcée 4 coins, bords surélevés pour l'écran et l'objectif. Compatible recharge sans fil. Disponible du 13 au 16 Pro Max.",
    image: imgCoque,
    models: ['iPhone 13', 'iPhone 13 Pro', 'iPhone 14', 'iPhone 14 Pro', 'iPhone 15', 'iPhone 15 Pro', 'iPhone 16 Pro Max'],
    colors: [
      { name: 'Noir Minuit',  value: '#1C1C1E' },
      { name: 'Bleu Ocean',   value: '#1D4ED8' },
      { name: 'Vert Sauge',   value: '#5C7A6E' },
      { name: 'Rose Pâle',    value: '#F9A8D4', border: false },
      { name: 'Transparent',  value: '#E5E7EB', border: true },
      { name: 'Rouge',        value: '#DC2626' },
      { name: 'Beige Sable',  value: '#D6CFC4' },
    ],
    specs: [
      { label: 'Protection',        value: 'Renforcée 4 coins + bords surélevés' },
      { label: 'Recharge sans fil', value: 'Compatible Qi & MagSafe' },
      { label: 'Matière',           value: 'Silicone souple anti-choc' },
      { label: 'Modèles dispo',     value: 'iPhone 13 → 16 Pro Max' },
      { label: 'Variantes',         value: '7 coloris disponibles' },
      { label: 'Livraison',         value: '14 à 20 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Choisir le modèle', desc: 'Précisez votre modèle d\'iPhone exact dans votre message WhatsApp (ex : iPhone 15 Pro).' },
      { step: 2, title: 'Choisir le coloris', desc: 'Indiquez parmi les 7 coloris disponibles celui qui vous correspond.' },
      { step: 3, title: 'Installer la coque', desc: 'Commencez par les coins inférieurs, appuyez jusqu\'au clic de fermeture.' },
    ],
    tips: [
      'Précisez votre modèle exact pour éviter toute erreur de commande.',
      'La coque fine de 1,2mm ne gêne pas la recharge sans fil.',
      'Les bords surélevés protègent l\'écran en cas de chute à plat.',
    ],
  },

  // ── Électroménager ─────────────────────────
  {
    id: 11,
    isNew: true,
    name: 'Aspirateur Dyson V15',
    price: '390 €',
    priceNum: 390,
    category: 'Électroménager',
    categoryLabel: 'Aspirateur sans fil',
    description:
      "Aspirateur sans fil Dyson V15 Detect avec détection laser des poussières invisibles. Puissance 240 AW, filtration HEPA, autonomie 60 min. Livraison sous 7 à 14 jours.",
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Jaune/Nickel', value: '#D4AF37' },
    ],
    specs: [
      { label: 'Aspiration',  value: '240 AW (puissance max)' },
      { label: 'Détection',   value: 'Laser révèle les poussières invisibles' },
      { label: 'Filtration',  value: 'HEPA (capture 99,99% des particules)' },
      { label: 'Autonomie',   value: 'Jusqu\'à 60 min' },
      { label: 'Écran LCD',   value: 'Affichage temps restant + type de sol' },
      { label: 'Livraison',   value: '7 à 14 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Charger', desc: 'Branchez le dock mural fourni et placez l\'aspirateur dessus. Charge complète en 4h30.' },
      { step: 2, title: 'Choisir le mode', desc: 'Sélectionnez Eco, Auto ou Boost selon le niveau de salissure.' },
      { step: 3, title: 'Laser Detect', desc: 'La tête Fluffy Optic active le laser pour révéler les poussières invisibles sur sols durs.' },
      { step: 4, title: 'Vider le bac', desc: 'Appuyez sur le bouton rouge au-dessus d\'une poubelle — vidage hygiénique en un geste.' },
    ],
    tips: [
      'Le mode Auto adapte automatiquement la puissance selon la surface — économise la batterie.',
      'Le filtre HEPA se nettoie à l\'eau froide, laissez sécher 24h avant réutilisation.',
      'L\'écran LCD indique précisément le temps restant selon le mode sélectionné.',
    ],
  },
  {
    id: 12,
    isNew: true,
    name: 'Sèche-cheveux Dyson',
    price: '199 €',
    priceNum: 199,
    category: 'Électroménager',
    categoryLabel: 'Soin capillaire',
    description:
      "Sèche-cheveux Dyson Supersonic avec technologie de mesure de la température 40x/seconde pour protéger les cheveux. Moteur ultra-puissant V9. Séchage 3x plus rapide. Livraison 7 à 14 jours.",
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Noir/Nickel', value: '#1C1C1E' },
      { name: 'Rose/Or',     value: '#F9A8D4' },
      { name: 'Blanc/Argent', value: '#F5F5F5', border: true },
    ],
    specs: [
      { label: 'Moteur',       value: 'Dyson V9 digital' },
      { label: 'Contrôle temp', value: 'Mesure 40x/seconde, protection intelligente' },
      { label: 'Débit d\'air', value: '13 litres/seconde' },
      { label: 'Modes',        value: '3 vitesses x 4 températures' },
      { label: 'Magnétique',   value: 'Embouts à fixation magnétique' },
      { label: 'Livraison',    value: '7 à 14 jours ouvrés' },
    ],
    guide: [
      { step: 1, title: 'Choisir le mode', desc: 'Sélectionnez vitesse et température adaptées à votre type de cheveux.' },
      { step: 2, title: 'Attacher l\'embout', desc: 'Les embouts magnétiques se clipsent et s\'éjectent d\'un geste.' },
      { step: 3, title: 'Mode froid', desc: 'Terminez toujours par un jet d\'air froid pour fixer la coiffure et faire briller les cheveux.' },
    ],
    tips: [
      'La protection thermique intelligente évite les dommages causés par la chaleur excessive.',
      'Le moteur dans le manche offre un meilleur équilibre pour réduire la fatigue du bras.',
      'Nettoyez le filtre régulièrement pour maintenir les performances optimales.',
    ],
  },
]
