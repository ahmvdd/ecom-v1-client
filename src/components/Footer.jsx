import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER } from '../data/products'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14 pb-14 border-b border-zinc-800/50">

          {/* Marque */}
          <div className="md:col-span-1">
            <Link to="/" className="text-white text-sm font-semibold tracking-[0.2em] uppercase block mb-5">
              Electra
            </Link>
            <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs mb-6">
              L'art de vivre technologique. Des produits soigneusement sélectionnés pour sublimer votre quotidien.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-light"
            >
              <iconify-icon icon="mdi:whatsapp" class="text-base" />
              +33 7 82 64 56 75
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-semibold text-white tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/produits?cat=nouveautes"   className="text-sm text-zinc-500 hover:text-white transition-colors font-light">Nouveautés</Link></li>
              <li><Link to="/produits?cat=accessoires"  className="text-sm text-zinc-500 hover:text-white transition-colors font-light">Accessoires</Link></li>
              <li><Link to="/produits?cat=audio"        className="text-sm text-zinc-500 hover:text-white transition-colors font-light">Audio</Link></li>
              <li><Link to="/produits?cat=electromenager" className="text-sm text-zinc-500 hover:text-white transition-colors font-light">Électroménager</Link></li>
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h4 className="text-[10px] font-semibold text-white tracking-widest uppercase mb-5">Informations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors font-light">À propos</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors font-light">Livraison &amp; Retours</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors font-light">Mentions légales</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors font-light">CGV</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold text-white tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5 text-sm text-zinc-500 font-light">
                <iconify-icon icon="solar:map-point-linear" class="text-base mt-0.5 flex-shrink-0 text-zinc-600" />
                Île-de-France, France
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-sm text-zinc-500 hover:text-emerald-400 transition-colors font-light"
                >
                  <iconify-icon icon="mdi:whatsapp" class="text-base flex-shrink-0 text-zinc-600" />
                  +33 7 82 64 56 75
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600 font-light">© 2025 Electra. Basé en Île-de-France.</p>
          <p className="text-xs text-zinc-600 font-light">Commande &amp; suivi via WhatsApp</p>
        </div>

      </div>
    </footer>
  )
}
