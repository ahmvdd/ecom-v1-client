export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33600000000?text=Bonjour%20Electra%2C%20je%20souhaite%20des%20informations%20sur%20vos%20produits."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-emerald-500 text-white px-5 py-3.5 rounded-full shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 transition-all duration-300 hover:scale-105 group"
    >
      <iconify-icon icon="mdi:whatsapp" class="text-2xl flex-shrink-0" />
      <span className="text-sm font-medium max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
        Contactez-nous
      </span>
    </a>
  )
}
