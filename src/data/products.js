// =============================================
// CONFIGURATION — modifiez votre numéro ici
// =============================================
export const WHATSAPP_NUMBER = '33600000000' // format international, sans + ni espaces

// =============================================
// IMPORTS IMAGES LOCALES
// =============================================
import imgMagSafeBattery from '../img/593daccd404760fd17c9112bdc071882.jpg'
import imgAppleWatch     from '../img/6248e857e64a6f76378e89ac78a554c4.jpg'
import imgCable          from '../img/c34ecbb6b534005c42c06a470b66132a.jpg'
import imgAirPodsMax     from '../img/c69c25bbffd2eebc5dc8fc19df14f004.jpg'
import imgAirPodsPro     from '../img/ca26fb54a237e1ec5172407638f44955.jpg'
import imgAppleLogo      from '../img/dbfe75990174020a7ebf8799999212d8.jpg'

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
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=2127&auto=format&fit=crop',
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
    name: 'AirPods Max',
    price: '549 €',
    priceNum: 549,
    category: 'Audio',
    categoryLabel: 'Audio Haute Fidélité',
    description:
      "Réduction de bruit active de classe mondiale. Son spatial avec suivi dynamique de la tête. Arceau en acier inoxydable, coussinets en mesh respirant. Autonomie 20h.",
    image: imgAirPodsMax,
    models: [],
    colors: [
      { name: 'Vert Sauge', value: '#7A9E7E' },
      { name: 'Bleu Ciel',  value: '#7EC8E3' },
      { name: 'Blanc',      value: '#F0F0F0', border: true },
      { name: 'Noir',       value: '#1C1C1E' },
    ],
  },
  {
    id: 3,
    isNew: true,
    name: 'Chargeur MagSafe 3-en-1',
    price: '89 €',
    priceNum: 89,
    category: 'Accessoires',
    categoryLabel: 'Accessoire Apple',
    description:
      "Station de charge sans fil pour iPhone, Apple Watch et AirPods simultanément. Charge rapide 15W MagSafe. Certifié Apple. Socle en aluminium et verre trempé.",
    image: imgAppleLogo,
    models: [],
    colors: [
      { name: 'Aluminium',    value: '#C8C8C8', border: true },
      { name: 'Noir Sidéral', value: '#2C2C2C' },
    ],
  },
  {
    id: 4,
    isNew: true,
    name: 'AirPods Pro 2',
    price: '279 €',
    priceNum: 279,
    category: 'Audio',
    categoryLabel: 'Écouteurs Premium',
    description:
      "Réduction de bruit adaptative de 2e génération. Son spatial personnalisé. Résistance à l'eau IPX4. Jusqu'à 6h d'écoute + 30h avec le boîtier MagSafe.",
    image: imgAirPodsPro,
    models: [],
    colors: [
      { name: 'Blanc', value: '#F5F5F5', border: true },
    ],
  },
  {
    id: 5,
    isNew: false,
    name: 'Protection Écran Verre Trempé',
    price: '29 €',
    priceNum: 29,
    category: 'Accessoires',
    categoryLabel: 'Pour iPhone 15',
    description:
      "Verre trempé 9H anti-rayures avec kit d'installation garanti sans bulle. Ultra-fin 0,2mm. Compatible Face ID et recharge sans fil. Lot de 2 inclus.",
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=2124&auto=format&fit=crop',
    models: ['15 Pro', '15 Pro Max', '15', '15 Plus'],
    colors: [],
  },
  {
    id: 6,
    isNew: false,
    name: 'Câble USB-C vers Lightning',
    price: '25 €',
    priceNum: 25,
    category: 'Accessoires',
    categoryLabel: 'Câble de charge',
    description:
      "Câble tressé certifié MFi (Made for iPhone). Charge rapide jusqu'à 20W. Compatible iPhone, iPad et AirPods. Longueur 1,5m. Résistant aux pliures.",
    image: imgCable,
    models: [],
    colors: [
      { name: 'Blanc', value: '#F5F5F5', border: true },
    ],
  },
  {
    id: 7,
    isNew: true,
    name: 'Apple Watch Série 10',
    price: '449 €',
    priceNum: 449,
    category: 'Accessoires',
    categoryLabel: 'Montre connectée',
    description:
      "Le plus grand écran OLED Always-On de l'histoire de l'Apple Watch. Suivi santé avancé (ECG, O2, température). Ultra-fin, ultra-léger. Bracelet milanais inclus.",
    image: imgAppleWatch,
    models: ['40mm', '44mm'],
    colors: [
      { name: 'Argent', value: '#C0C0C0', border: true },
      { name: 'Or',     value: '#D4AF37' },
      { name: 'Noir',   value: '#1C1C1E' },
    ],
  },
  {
    id: 8,
    isNew: false,
    name: 'Batterie MagSafe',
    price: '109 €',
    priceNum: 109,
    category: 'Accessoires',
    categoryLabel: 'Batterie Portable',
    description:
      "Batterie magnétique officielle Apple. Se fixe directement sur votre iPhone 12 et supérieur sans câble. Charge 7,5W sans fil. Design ultra-compact en silicone doux.",
    image: imgMagSafeBattery,
    models: [],
    colors: [
      { name: 'Blanc',       value: '#F5F5F5', border: true },
      { name: 'Noir Minuit', value: '#1C1C1E' },
    ],
  },
]
