import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useModal } from '../context/ModalContext'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === Number(id))

  const { openCheckoutModal, setSelectedModel, setSelectedColor } = useModal()

  const [activeModel, setActiveModel] = useState(product?.models?.[0] ?? '')
  const [activeColor, setActiveColor] = useState(product?.colors?.[0]?.name ?? '')

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-zinc-500">Produit introuvable.</p>
        <Link to="/produits" className="text-sm font-medium underline">
          Retour au catalogue
        </Link>
      </div>
    )
  }

  function handleCommander() {
    setSelectedModel(activeModel)
    setSelectedColor(activeColor)
    openCheckoutModal(product)
  }

  return (
    <div className="bg-[#FBFBFD] min-h-screen">
      {/* Offset header */}
      <div className="h-[88px]" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center gap-2 text-xs text-zinc-400">
          <Link to="/" className="hover:text-zinc-900 transition-colors">Accueil</Link>
          <iconify-icon icon="solar:arrow-right-linear" class="text-zinc-300 text-sm" />
          <Link to="/produits" className="hover:text-zinc-900 transition-colors">Catalogue</Link>
          <iconify-icon icon="solar:arrow-right-linear" class="text-zinc-300 text-sm" />
          <span className="text-zinc-900 font-medium truncate max-w-[160px]">{product.name}</span>
        </nav>
      </div>

      {/* ===== HERO PRODUIT ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Image */}
          <div className="lg:sticky lg:top-[108px]">
            <div className="aspect-square rounded-[2.5rem] bg-zinc-100 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply"
              />
              {product.isNew && (
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] font-semibold tracking-widest uppercase">
                  Nouveau
                </span>
              )}
            </div>
          </div>

          {/* Détails */}
          <div className="space-y-8">

            {/* Titre & prix */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2">
                {product.categoryLabel}
              </p>
              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                  {product.name}
                </h1>
                <span className="text-3xl font-bold text-zinc-900 flex-shrink-0">
                  {product.price}
                </span>
              </div>
              <p className="text-base text-zinc-500 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="h-px bg-zinc-100" />

            {/* Sélecteur modèle */}
            {product.models.length > 0 && (
              <div>
                <h3 className="text-[10px] font-semibold text-zinc-900 tracking-widest uppercase mb-3">
                  Modèle
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.models.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setActiveModel(m)}
                      className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all ${
                        activeModel === m
                          ? 'border-zinc-900 bg-zinc-900 text-white'
                          : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sélecteur couleur */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="text-[10px] font-semibold text-zinc-900 tracking-widest uppercase mb-3">
                  Couleur — <span className="font-light text-zinc-500 normal-case tracking-normal">{activeColor}</span>
                </h3>
                <div className="flex gap-3.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      title={c.name}
                      onClick={() => setActiveColor(c.name)}
                      className={`w-9 h-9 rounded-full ring-2 ring-offset-2 transition-all ${
                        c.border ? 'border-2 border-zinc-300' : ''
                      } ${activeColor === c.name ? 'ring-zinc-600' : 'ring-transparent'}`}
                      style={{ backgroundColor: c.value }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleCommander}
                className="flex-1 h-14 flex items-center justify-center rounded-2xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-all shadow-lg active:scale-[0.98]"
              >
                Commander
              </button>
              <button
                onClick={() => navigate(-1)}
                className="h-14 px-6 flex items-center justify-center rounded-2xl border border-zinc-200 text-zinc-600 text-sm font-medium hover:bg-zinc-50 transition-all"
              >
                <iconify-icon icon="solar:arrow-left-linear" class="mr-2" />
                Retour
              </button>
            </div>

            {/* Garanties */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { icon: 'solar:delivery-bold', label: 'Livraison 24h' },
                { icon: 'solar:shield-check-bold', label: 'Garantie 2 ans' },
                { icon: 'solar:restart-bold', label: 'Retours 30j' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white border border-zinc-100 text-center">
                  <iconify-icon icon={icon} class="text-xl text-zinc-900" />
                  <span className="text-[10px] font-medium text-zinc-500 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPECS ===== */}
      {product.specs?.length > 0 && (
        <section className="bg-white border-y border-zinc-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-10">
              Caractéristiques<span className="text-emerald-500">.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100">
              {product.specs.map(({ label, value }) => (
                <div key={label} className="bg-white px-6 py-5">
                  <p className="text-[10px] font-semibold text-zinc-400 tracking-widest uppercase mb-1">{label}</p>
                  <p className="text-sm font-medium text-zinc-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== GUIDE D'UTILISATION ===== */}
      {product.guide?.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-10">
              Guide d'utilisation<span className="text-emerald-500">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {product.guide.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5 p-6 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 transition-colors">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-zinc-900 text-white text-sm font-bold flex items-center justify-center">
                    {step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 mb-1">{title}</p>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CONSEILS & ASTUCES ===== */}
      {product.tips?.length > 0 && (
        <section className="bg-white border-t border-zinc-100 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-10">
              Conseils & astuces<span className="text-emerald-500">.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.tips.map((tip, i) => (
                <div key={i} className="flex gap-3 p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <iconify-icon icon="solar:lightbulb-bold" class="text-xl text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-600 font-light leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA COMMANDER ===== */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] bg-zinc-950 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">{product.categoryLabel}</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">{product.name}</h3>
              <p className="text-zinc-400 font-light mb-8">{product.price} · Livraison express offerte</p>
              <button
                onClick={handleCommander}
                className="inline-flex items-center gap-3 bg-white text-zinc-900 px-10 py-4 rounded-full text-sm font-bold hover:bg-zinc-100 transition-all hover:scale-105"
              >
                Commander maintenant
                <iconify-icon icon="solar:arrow-right-linear" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
