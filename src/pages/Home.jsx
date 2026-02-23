import { Link } from 'react-router-dom'
import { products, WHATSAPP_NUMBER } from '../data/products'
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

const FEATURED = products.slice(0, 4)

export default function Home() {
  return (
    <div className="bg-[#FBFBFD]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#e2e2e2,transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-zinc-200/50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] font-bold text-emerald-700 tracking-wider uppercase mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Disponible en Île-de-France
              </div>

              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight leading-[0.95] mb-8 animate-fade-up">
                La tech <br />
                <span className="text-zinc-400">devient un</span> <br />
                <span className="italic font-serif font-light text-zinc-900">art de vivre.</span>
              </h1>

              <p className="text-lg text-zinc-500 max-w-md mb-10 font-light leading-relaxed animate-fade-up delay-100">
                Une sélection rigoureuse d'objets qui redéfinissent votre quotidien. Performance pure, esthétique absolue.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up delay-200">
                <Link
                  to="/produits"
                  className="h-14 px-10 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-all flex items-center gap-2 group"
                >
                  Explorer le catalogue
                  <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="h-14 px-8 rounded-full bg-white border border-zinc-200 text-zinc-900 text-sm font-semibold hover:bg-zinc-50 transition-all flex items-center gap-2"
                >
                  <iconify-icon icon="mdi:whatsapp" className="text-emerald-500 text-xl" />
                  Conseil direct
                </a>
              </div>
            </div>

            {/* Featured Bento Grid */}
            <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[500px] md:h-[600px] animate-fade-in-right">
              <div className="col-span-7 row-span-2 relative overflow-hidden rounded-[2.5rem] bg-zinc-100 group">
                <img src={FEATURED[0]?.image} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-1000" alt="" />
                <div className="absolute bottom-6 left-6 text-white bg-black/20 backdrop-blur-md p-4 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-xs font-bold uppercase tracking-widest">{FEATURED[0]?.name}</p>
                </div>
              </div>
              <div className="col-span-5 row-span-1 overflow-hidden rounded-[2rem] bg-zinc-200 group">
                <img src={FEATURED[1]?.image} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" alt="" />
              </div>
              <div className="col-span-5 row-span-1 overflow-hidden rounded-[2rem] bg-emerald-50 group">
                <img src={FEATURED[2]?.image} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE (Plus fin) ===== */}
      <div className="bg-white border-y border-zinc-100 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_DOUBLED.map((item, i) => (
            <span key={i} className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase px-12 flex items-center">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===== AVANTAGES (Style Minimal) ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: 'Logistique Directe', desc: 'Livraison express en 24h par nos propres coursiers en Île-de-France.', icon: 'solar:delivery-bold' },
            { title: 'Curateur Tech', desc: 'Chaque produit est testé et validé par notre studio avant d\'être listé.', icon: 'solar:medal-star-bold' },
            { title: 'Conciergerie WhatsApp', desc: 'Un problème ? Un doute ? Notre équipe vous répond en moins de 15 minutes.', icon: 'solar:chat-round-dots-bold' },
          ].map((item, i) => (
            <div key={i} className="group cursor-default">
              <div className="mb-6 inline-flex p-3 rounded-2xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
                <iconify-icon icon={item.icon} className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRODUITS SELECTIONNÉS ===== */}
      <section className="py-24 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Le Studio Electra<span className="text-emerald-500">.</span></h2>
              <p className="text-zinc-500 font-light text-lg">Les essentiels de la saison.</p>
            </div>
            <Link to="/produits" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-zinc-900 pb-1">
              Tout voir <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {FEATURED.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA WHATSAPP (Luxe Dark) ===== */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-zinc-950 p-12 md:p-24 overflow-hidden relative text-center">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Un conseil personnalisé ?
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
              Nous ne sommes pas un simple site, nous sommes vos experts tech. Contactez-nous pour une recommandation sur-mesure.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-4 bg-emerald-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-400 transition-all hover:scale-105 shadow-2xl shadow-emerald-500/20"
            >
              <iconify-icon icon="mdi:whatsapp" />
              Lancer la discussion
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}