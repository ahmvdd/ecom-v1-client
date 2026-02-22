// =============================================
// CONFIGURATION — modifiez votre numéro ici
// =============================================
export const WHATSAPP_NUMBER = '33600000000' // format international, sans + ni espaces

// =============================================
// CATALOGUE PRODUITS
// =============================================
export const products = [
  {
    id: 1,
    isNew: true,
    name: 'Coque Cuir Pleine Fleur',
    price: '65 €',
    priceNum: 65,
    category: 'Accessoires',
    categoryLabel: 'Pour iPhone 15',
    description:
      "Confectionné en cuir pleine fleur de première qualité. Protection optimale avec une patine élégante qui se bonifie avec le temps. Compatible recharge sans fil.",
    image:
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop',
    models: ['15 Pro', '15 Pro Max', '15', '15 Plus'],
    colors: [
      { name: 'Noir Minuit',    value: '#1C1C1E' },
      { name: 'Titane Naturel', value: '#B6B1A9' },
      { name: 'Sable',          value: '#D6CFC4' },
    ],
  },
  {
    id: 2,
    isNew: false,
    name: 'Casque ANC Studio',
    price: '349 €',
    priceNum: 349,
    category: 'Audio',
    categoryLabel: 'Audio Haute Fidélité',
    description:
      "Réduction de bruit active de dernière génération. Drivers 40mm pour une scène sonore large et détaillée. Autonomie 30h + étui de charge magnétique inclus.",
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Noir',      value: '#1C1C1E' },
      { name: 'Blanc',     value: '#F0F0F0', border: true },
      { name: 'Bleu Nuit', value: '#1E3A5F' },
    ],
  },
  {
    id: 3,
    isNew: true,
    name: 'Chargeur MagSafe 3-en-1',
    price: '89 €',
    priceNum: 89,
    category: 'Accessoires',
    categoryLabel: 'Accessoire',
    description:
      "Station de charge sans fil pour iPhone, Apple Watch et AirPods simultanément. Charge rapide 15W MagSafe. Socle en aluminium et verre trempé Gorilla Glass.",
    image:
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Aluminium',    value: '#C8C8C8', border: true },
      { name: 'Noir Sidéral', value: '#2C2C2C' },
    ],
  },
  {
    id: 4,
    isNew: false,
    name: 'Écouteurs True Wireless',
    price: '129 €',
    priceNum: 129,
    category: 'Audio',
    categoryLabel: 'Audio Premium',
    description:
      "Son spatial avec suivi dynamique de la tête. Réduction de bruit adaptative. Résistance IPX4. Jusqu'à 6h d'écoute + 24h avec le boîtier de charge.",
    image:
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Blanc', value: '#F0F0F0', border: true },
      { name: 'Noir',  value: '#1C1C1E' },
      { name: 'Mauve', value: '#9B8EC4' },
    ],
  },
  {
    id: 5,
    isNew: true,
    name: 'Protection Écran Verre Trempé',
    price: '29 €',
    priceNum: 29,
    category: 'Accessoires',
    categoryLabel: 'Pour iPhone 15',
    description:
      "Verre trempé 9H anti-rayures avec kit d'installation garanti sans bulle. Ultra-fin 0,2mm. Compatible Face ID et recharge sans fil. Lot de 2 inclus.",
    image:
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=2124&auto=format&fit=crop',
    models: ['15 Pro', '15 Pro Max', '15', '15 Plus'],
    colors: [],
  },
  {
    id: 6,
    isNew: false,
    name: 'Support Voiture MagSafe',
    price: '45 €',
    priceNum: 45,
    category: 'Accessoires',
    categoryLabel: 'Accessoire Voiture',
    description:
      "Fixation magnétique MagSafe pour grille d'aération. Charge sans fil 15W intégrée. Rotation 360°. Compatible tous iPhone 12 et supérieur.",
    image:
      'https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Noir',   value: '#1C1C1E' },
      { name: 'Argent', value: '#C0C0C0', border: true },
    ],
  },
  {
    id: 7,
    isNew: true,
    name: 'Enceinte Bluetooth Compacte',
    price: '199 €',
    priceNum: 199,
    category: 'Audio',
    categoryLabel: 'Enceinte Portable',
    description:
      "Son 360° haute qualité avec basses profondes. Autonomie 20h. Résistante à l'eau IPX7. Connexion simultanée de 2 appareils. Idéale intérieur et extérieur.",
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Noir',       value: '#1C1C1E' },
      { name: 'Gris Pierre', value: '#9C9C9C', border: true },
      { name: 'Vert Sauge', value: '#7A9E7E' },
    ],
  },
  {
    id: 8,
    isNew: false,
    name: 'Batterie Externe MagSafe',
    price: '79 €',
    priceNum: 79,
    category: 'Accessoires',
    categoryLabel: 'Batterie Portable',
    description:
      "Batterie externe 10 000mAh avec charge MagSafe 7,5W et USB-C 20W. Design ultra-plat en aluminium brossé. Charge votre iPhone en voyage sans fil.",
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop',
    models: [],
    colors: [
      { name: 'Blanc',       value: '#F0F0F0', border: true },
      { name: 'Noir Minuit', value: '#1C1C1E' },
    ],
  },
]
