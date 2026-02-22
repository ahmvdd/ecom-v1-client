import { useModal } from '../context/ModalContext'

export default function ProductModal() {
  const {
    currentProduct,
    productModalOpen,
    closeProductModal,
    openCheckoutModal,
    selectedModel, setSelectedModel,
    selectedColor, setSelectedColor,
  } = useModal()

  const isOpen = productModalOpen && currentProduct !== null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeProductModal}
        className={`fixed inset-0 z-50 bg-zinc-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panel latéral */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col no-scrollbar overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {!currentProduct ? null : (
          <>
            {/* Bouton fermer */}
            <button
              onClick={closeProductModal}
              aria-label="Fermer"
              className="absolute top-5 right-5 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 backdrop-blur text-zinc-500 hover:text-zinc-900 shadow-sm border border-zinc-200/80 transition-all hover:scale-110"
            >
              <iconify-icon icon="solar:close-circle-linear" class="text-xl" />
            </button>

            {/* Image produit */}
            <div className="w-full aspect-[4/5] bg-gradient-to-br from-zinc-100 to-zinc-50 relative flex-shrink-0 overflow-hidden">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-full object-cover mix-blend-multiply p-6"
              />
              {currentProduct.isNew && (
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-zinc-900 text-white text-[10px] font-semibold tracking-widest uppercase">
                  Nouveau
                </span>
              )}
            </div>

            {/* Contenu */}
            <div className="p-7 flex-1 flex flex-col">

              {/* Titre + prix */}
              <div className="mb-6">
                <div className="flex justify-between items-start gap-3 mb-1">
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-900 leading-snug">
                    {currentProduct.name}
                  </h2>
                  <span className="text-xl font-semibold text-zinc-900 flex-shrink-0">
                    {currentProduct.price}
                  </span>
                </div>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-3">
                  {currentProduct.categoryLabel}
                </p>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              <div className="h-px bg-zinc-100 mb-6" />

              {/* Sélecteur modèle */}
              {currentProduct.models.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-[10px] font-semibold text-zinc-900 tracking-widest uppercase mb-3">
                    Modèle
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.models.map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setSelectedModel(m)}
                        className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
                          selectedModel === m
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
              {currentProduct.colors.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-semibold text-zinc-900 tracking-widest uppercase mb-3">
                    Couleur &mdash;{' '}
                    <span className="font-light text-zinc-500 normal-case tracking-normal">
                      {selectedColor}
                    </span>
                  </h3>
                  <div className="flex gap-3.5">
                    {currentProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        title={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-8 h-8 rounded-full ring-2 ring-offset-2 transition-all ${
                          c.border ? 'border-2 border-zinc-300' : ''
                        } ${
                          selectedColor === c.name
                            ? 'ring-zinc-600'
                            : 'ring-transparent'
                        }`}
                        style={{ backgroundColor: c.value }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-auto">
                <button
                  onClick={openCheckoutModal}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
                >
                  <iconify-icon icon="mdi:whatsapp" class="text-xl" />
                  Commander via WhatsApp
                </button>
                <div className="flex items-center justify-center gap-5 mt-4">
                  <span className="text-xs text-zinc-400 font-light flex items-center gap-1.5">
                    <iconify-icon icon="solar:box-linear" class="text-sm" /> Livraison 24h offerte
                  </span>
                  <span className="text-xs text-zinc-400 font-light flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-check-linear" class="text-sm" /> Garantie 2 ans
                  </span>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </>
  )
}
