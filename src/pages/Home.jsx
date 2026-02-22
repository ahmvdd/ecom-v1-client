import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const MARQUEE_ITEMS = [
  '✦ Livraison express 24h',
  '✦ Garantie 2 ans',
  '✦ Retours sous 30 jours',
  '✦ SAV WhatsApp 7j/7',
  '✦ Paiement sécurisé',
  '✦ Produits sélectionnés',
]
const MARQUEE_DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

// Seulement les 4 premiers produits sur la home
const FEATURED = products.slice(0, 4)

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-36 pb-0 md:pt-44 px-6 overflow-hidden hero-grain bg-[#FAFAFA]">
        {/* Lueurs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-zinc-300/30 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute top-32 left-1/3 w-[300px] h-[200px] bg-emerald-200/20 blur-[100px] rounded-full -z-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

          {/* Badge livraison */}
          <span className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs text-zinc-600 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Livraison express en Île-de-France
          </span>

          {/* Titre */}
          <h1 className="opacity-0 animate-fade-up delay-100 text-[clamp(2.8rem,8vw,6rem)] font-semibold tracking-[-0.03em] leading-[1.05] max-w-4xl text-balance mb-6">
            L'excellence<br />
            <span className="text-zinc-400 font-light italic">sans compromis.</span>
          </h1>

          <p className="opacity-0 animate-fade-up delay-200 text-base md:text-lg text-zinc-500 max-w-xl text-balance mb-10 font-light leading-relaxed">
            Accessoires premium, audio haute-fidélité et électroménager design —
            sélectionnés avec soin, livrés chez vous.
          </p>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 mb-20">
            <Link
              to="/produits"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20 hover:scale-[1.02]"
            >
              Découvrir la collection
              <iconify-icon icon="solar:arrow-right-linear" />
            </Link>
            <a
              href="https://wa.me/33600000000?text=Bonjour%20Electra%2C%20je%20souhaite%20des%20informations%20sur%20vos%20produits."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white border border-zinc-200 text-zinc-800 text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all shadow-sm"
            >
              <iconify-icon icon="mdi:whatsapp" class="text-emerald-500 text-lg" />
              Nous contacter
            </a>
          </div>
        </div>

        {/* Aperçu produits */}
        <div className="opacity-0 animate-fade-up delay-400 relative max-w-6xl mx-auto">
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {FEATURED.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {}}
                className={`group block overflow-hidden rounded-2xl bg-zinc-100 shadow-sm ring-1 ring-zinc-200/50 transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                  i % 2 === 0 ? 'md:translate-y-6' : ''
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="border-y border-zinc-200 bg-white py-3.5 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_DOUBLED.map((item, i) => (
            <span key={i} className="text-xs font-medium text-zinc-400 tracking-widest uppercase px-8">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===== AVANTAGES ===== */}
      <section className="py-16 px-6 bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {[
            {
              icon: 'solar:delivery-linear',
              title: 'Livraison express',
              desc: "Partout en Île-de-France sous 24h, offerte sans minimum.",
              iconCls: 'text-zinc-700',
              bgCls: 'bg-zinc-100',
            },
            {
              icon: 'solar:shield-check-linear',
              title: 'Garantie 2 ans',
              desc: "Chaque produit est couvert. Échange ou remboursement garanti.",
              iconCls: 'text-zinc-700',
              bgCls: 'bg-zinc-100',
            },
            {
              icon: 'mdi:whatsapp',
              title: 'Conseils & SAV WhatsApp',
              desc: "Notre équipe répond 7j/7. Un doute ? On vous guide.",
              iconCls: 'text-emerald-600',
              bgCls: 'bg-emerald-50',
            },
          ].map(({ icon, title, desc, iconCls, bgCls }) => (
            <div key={title} className="flex flex-col sm:items-center sm:text-center gap-3">
              <div className={`w-10 h-10 rounded-2xl ${bgCls} flex items-center justify-center flex-shrink-0`}>
                <iconify-icon icon={icon} class={`text-xl ${iconCls}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-0.5">{title}</h3>
                <p className="text-sm text-zinc-500 font-light">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COLLECTION ===== */}
      <section id="collection" className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2">
                Sélection du moment
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
                Pièces maîtresses
              </h2>
            </div>
            <Link
              to="/produits"
              className="hidden md:flex items-center gap-1.5 text-sm text-zinc-900 hover:text-zinc-500 transition-colors pb-0.5 border-b border-zinc-300 hover:border-zinc-500"
            >
              Voir tout <iconify-icon icon="solar:arrow-right-linear" class="text-base" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-14">
            {FEATURED.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA WHATSAPP ===== */}
      <section className="py-24 px-6 bg-zinc-950 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-zinc-950 to-zinc-950 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <iconify-icon icon="mdi:whatsapp" class="text-3xl text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Besoin d'un conseil ?
          </h2>
          <p className="text-zinc-400 font-light text-lg mb-10 max-w-lg mx-auto">
            Notre équipe est disponible sur WhatsApp pour vous aider à choisir le bon produit ou suivre votre commande.
          </p>
          <a
            href="https://wa.me/33600000000?text=Bonjour%20Electra%2C%20j%27ai%20besoin%20d%27un%20conseil."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 h-14 px-10 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
          >
            <iconify-icon icon="mdi:whatsapp" class="text-xl" />
            Discutons sur WhatsApp
          </a>
          <p className="text-zinc-600 text-xs mt-6 font-light">Réponse garantie sous 1h en semaine</p>
        </div>
      </section>
    </>
  )
}
