import { useModal } from '../context/ModalContext'

export default function ProductCard({ product, showCategory = false }) {
  const { openProductModal } = useModal()

  return (
    <button
      type="button"
      onClick={() => openProductModal(product)}
      className="group block cursor-pointer text-left w-full"
    >
      {/* Image */}
      <div className="aspect-[4/5] bg-zinc-100 rounded-2xl mb-4 overflow-hidden relative shadow-sm ring-1 ring-zinc-200/50 group-hover:shadow-lg transition-all duration-500">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
        />

        {/* Badge Nouveau */}
        {product.isNew && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-zinc-900 text-white text-[10px] font-semibold tracking-widest uppercase">
            Nouveau
          </span>
        )}

        {/* Badge catégorie (page produits) */}
        {showCategory && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur text-zinc-600 text-[10px] font-medium border border-zinc-200/50">
            {product.category}
          </span>
        )}

        {/* Overlay hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur-md border border-zinc-200/50 text-zinc-900 text-xs font-medium py-2.5 px-6 rounded-full w-full shadow-sm">
            <iconify-icon icon="mdi:whatsapp" class="text-emerald-500 text-sm" />
            Commander
          </span>
        </div>
      </div>

      {/* Infos */}
      <div className="flex justify-between items-start px-0.5">
        <div>
          <h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-zinc-400 mt-1 font-light">{product.categoryLabel}</p>
        </div>
        <span className="text-sm font-semibold text-zinc-900 flex-shrink-0 ml-2">{product.price}</span>
      </div>
    </button>
  )
}
