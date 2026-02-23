import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products as allProducts, WHATSAPP_NUMBER } from '../data/products'
import ProductCard from '../components/ProductCard'

const CATEGORIES   = ['Tous', 'Accessoires', 'Audio', 'Électroménager']
const PRICE_RANGES = [
  { id: 'all',     label: 'Tous les prix' },
  { id: '0-50',    label: 'Moins de 50 €' },
  { id: '50-150',  label: '50 € – 150 €' },
  { id: '150+',    label: 'Plus de 150 €' },
]
const CAT_MAP = {
  accessoires:    'Accessoires',
  audio:          'Audio',
  electromenager: 'Électroménager',
}

export default function Products() {
  const [searchParams]    = useSearchParams()
  const catParam          = searchParams.get('cat')

  const [activeCategory,   setActiveCategory]   = useState(CAT_MAP[catParam] ?? 'Tous')
  const [activePriceRange, setActivePriceRange] = useState('all')
  const [activeSort,       setActiveSort]       = useState(catParam === 'nouveautes' ? 'new' : 'default')
  const [searchQuery,      setSearchQuery]      = useState('')
  const [searchVisible,    setSearchVisible]    = useState(false)

  // ---- Filtrage + tri ----
  const filtered = allProducts
    .filter((p) => activeCategory === 'Tous' || p.category === activeCategory)
    .filter((p) => {
      if (activePriceRange === '0-50')   return p.priceNum < 50
      if (activePriceRange === '50-150') return p.priceNum >= 50 && p.priceNum <= 150
      if (activePriceRange === '150+')   return p.priceNum > 150
      return true
    })
    .filter((p) => {
      if (!searchQuery) return true
      const q = searchQuery.toLowerCase()
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      )
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc')  return a.priceNum - b.priceNum
      if (activeSort === 'price-desc') return b.priceNum - a.priceNum
      if (activeSort === 'new')        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
      return 0
    })

  function resetFilters() {
    setActiveCategory('Tous')
    setActivePriceRange('all')
    setActiveSort('default')
    setSearchQuery('')
  }

  const inputCls = 'w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm font-light outline-none transition-all focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 placeholder:text-zinc-400 bg-white'

  return (
    <>
      {/* Offset header fixe */}
      <div className="h-[88px]" />

      {/* ===== EN-TÊTE PAGE ===== */}
      <section className="border-b border-zinc-200 bg-white px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-6" aria-label="Fil d'ariane">
            <Link to="/" className="hover:text-zinc-900 transition-colors">Accueil</Link>
            <iconify-icon icon="solar:arrow-right-linear" class="text-zinc-300 text-sm" />
            <span className="text-zinc-900 font-medium">Catalogue</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2">
                Sélection Premium
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
                Catalogue
              </h1>
            </div>
            <p className="text-sm text-zinc-500 font-light max-w-sm">
              Des produits soigneusement sélectionnés pour sublimer votre quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTENU ===== */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">

        {/* ---- SIDEBAR ---- */}
        <aside className="w-full lg:w-56 flex-shrink-0">
          <div className="lg:sticky lg:top-[100px] space-y-8">

            {/* Catégories */}
            <div>
              <h2 className="text-[10px] font-semibold text-zinc-400 tracking-widest uppercase mb-3">
                Catégories
              </h2>
              <ul className="space-y-0.5">
                {CATEGORIES.map((cat) => {
                  const count = cat === 'Tous'
                    ? allProducts.length
                    : allProducts.filter((p) => p.category === cat).length
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          activeCategory === cat
                            ? 'font-medium text-zinc-900 bg-zinc-100'
                            : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                        }`}
                      >
                        {cat}
                        <span className="ml-1 text-xs text-zinc-400">({count})</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Prix */}
            <div>
              <h2 className="text-[10px] font-semibold text-zinc-400 tracking-widest uppercase mb-3">
                Prix
              </h2>
              <ul className="space-y-0.5">
                {PRICE_RANGES.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => setActivePriceRange(id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        activePriceRange === id
                          ? 'font-medium text-zinc-900 bg-zinc-100'
                          : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact rapide */}
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
              <iconify-icon icon="mdi:whatsapp" class="text-2xl text-emerald-500 mb-3 block" />
              <p className="text-sm font-medium text-zinc-900 mb-1">Besoin d'un conseil ?</p>
              <p className="text-xs text-zinc-500 font-light mb-4 leading-relaxed">
                Notre équipe répond sous 1h sur WhatsApp.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20Electra%2C%20j%27ai%20besoin%20d%27un%20conseil.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                Nous contacter <iconify-icon icon="solar:arrow-right-linear" />
              </a>
            </div>

          </div>
        </aside>

        {/* ---- GRILLE ---- */}
        <main className="flex-1 min-w-0">

          {/* Barre recherche */}
          {searchVisible && (
            <div className="mb-6 relative">
              <iconify-icon
                icon="solar:magnifer-linear"
                class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg pointer-events-none"
              />
              <input
                type="text"
                placeholder="Rechercher un produit…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className={`${inputCls} pl-11 bg-zinc-50`}
              />
            </div>
          )}

          {/* Tri + compteur */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-100">
            <div className="flex items-center gap-3">
              <p className="text-sm text-zinc-500 font-light">
                {filtered.length} produit{filtered.length > 1 ? 's' : ''}
              </p>
              <button
                onClick={() => { setSearchVisible((v) => !v); if (searchVisible) setSearchQuery('') }}
                className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
                aria-label="Rechercher"
              >
                <iconify-icon icon="solar:magnifer-linear" class="text-base" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="sort-select" className="text-xs text-zinc-400 font-medium uppercase tracking-wider whitespace-nowrap">
                Trier par
              </label>
              <select
                id="sort-select"
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="text-sm font-light text-zinc-900 border border-zinc-200 rounded-xl px-4 py-2 outline-none focus:border-zinc-900 bg-white cursor-pointer"
              >
                <option value="default">Populaires</option>
                <option value="new">Nouveautés</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>
          </div>

          {/* Produits ou état vide */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <iconify-icon icon="solar:bag-cross-linear" class="text-5xl text-zinc-300 mb-4" />
              <h3 className="text-lg font-medium text-zinc-900 mb-2">Aucun produit trouvé</h3>
              <p className="text-sm text-zinc-500 font-light mb-6">
                Essayez un autre filtre ou contactez-nous sur WhatsApp.
              </p>
              <button
                onClick={resetFilters}
                className="text-sm font-medium text-zinc-900 underline underline-offset-4"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-12">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} showCategory />
              ))}
            </div>
          )}
        </main>

      </div>
    </>
  )
}
