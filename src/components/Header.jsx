import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER } from '../data/products'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">

      {/* Barre d'annonce */}
      <div className="bg-zinc-900 text-white text-[11px] py-2 text-center font-light tracking-wide">
        Livraison express 24h&nbsp;·&nbsp;Garantie 2 ans&nbsp;·&nbsp;Retours 30 jours&nbsp;·&nbsp;
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-emerald-400 transition-colors"
        >
          SAV &amp; conseils sur WhatsApp
        </a>
      </div>

      {/* Nav */}
      <div className="bg-[#FAFAFA]/90 backdrop-blur-xl border-b border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

          <div className="flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold tracking-[0.2em] uppercase">
              Electra
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link to="/produits?cat=nouveautes" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Nouveautés</Link>
              <Link to="/produits?cat=accessoires" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Accessoires</Link>
              <Link to="/produits?cat=audio"       className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Audio</Link>
              <Link to="/produits?cat=electromenager" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Électroménager</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/produits"
              className="w-9 h-9 flex items-center justify-center rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
              aria-label="Catalogue"
            >
              <iconify-icon icon="solar:magnifer-linear" class="text-lg" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors px-4 py-2 rounded-full"
            >
              <iconify-icon icon="mdi:whatsapp" class="text-base" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  )
}
