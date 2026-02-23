import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useModal } from '../context/ModalContext'

export default function CheckoutModal() {
  const {
    currentProduct,
    checkoutModalOpen,
    closeCheckoutModal,
    selectedModel,
    selectedColor,
  } = useModal()

  const formRef     = useRef(null)
  const [sending,  setSending]  = useState(false)
  const [success,  setSuccess]  = useState(false)
  const isOpen      = checkoutModalOpen && currentProduct !== null

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(formRef.current)

    const prenom       = data.get('prenom').trim()
    const nom          = data.get('nom').trim()
    const telephone    = data.get('telephone').trim()
    const adresse      = data.get('adresse').trim()
    const codePostal   = data.get('code_postal').trim()
    const ville        = data.get('ville').trim()
    const instructions = data.get('instructions').trim()
    const variant      = [selectedModel, selectedColor].filter(Boolean).join(' · ')

    setSending(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          produit:      currentProduct.name,
          prix:         currentProduct.price,
          variante:     variant || '—',
          client_nom:   `${prenom} ${nom}`,
          telephone,
          adresse,
          code_postal:  codePostal,
          ville,
          instructions: instructions || '—',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setSuccess(true)
      formRef.current?.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      alert(`Erreur EmailJS : ${err?.text || err?.message || JSON.stringify(err)}`)
    } finally {
      setSending(false)
    }
  }

  function handleClose() {
    closeCheckoutModal()
    setTimeout(() => setSuccess(false), 400)
  }

  const inputCls =
    'w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm font-light outline-none transition-all focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 placeholder:text-zinc-400 bg-white'

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-[60] bg-zinc-900/60 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panel centré */}
      <div
        className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-6 transition-opacity duration-300 pointer-events-none ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`relative w-full max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col md:flex-row pointer-events-auto transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? 'translate-y-0' : 'translate-y-full sm:translate-y-8'
          }`}
          style={{ maxHeight: '92dvh' }}
        >
          {!currentProduct ? null : success ? (
            /* ---- Confirmation ---- */
            <div className="flex flex-col items-center justify-center p-12 text-center w-full">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                <iconify-icon icon="solar:check-circle-bold" class="text-4xl text-emerald-500" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-900 mb-2">Commande reçue !</h2>
              <p className="text-sm text-zinc-500 font-light mb-8 max-w-xs">
                Nous avons bien reçu votre commande pour <strong>{currentProduct.name}</strong>. Nous vous recontactons très rapidement.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-all"
              >
                Fermer
              </button>
            </div>
          ) : (
            <>
              {/* ---- Résumé commande (gauche, dark) — masqué sur mobile ---- */}
              <div className="hidden md:flex flex-col w-full md:w-[42%] bg-zinc-950 p-8 flex-shrink-0 rounded-l-3xl">
                <span className="text-[10px] font-semibold text-zinc-500 tracking-widest uppercase mb-6">
                  Récapitulatif
                </span>

                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-800 overflow-hidden flex-shrink-0">
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-full h-full object-cover mix-blend-luminosity"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white leading-snug">{currentProduct.name}</p>
                    {(selectedModel || selectedColor) && (
                      <p className="text-xs text-zinc-500 font-light mt-1">
                        {[selectedModel, selectedColor].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500 font-light">Sous-total</span>
                    <span className="text-white font-medium">{currentProduct.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500 font-light">Livraison express</span>
                    <span className="text-emerald-400 font-medium">Offerte</span>
                  </div>
                  <div className="h-px bg-zinc-800 my-1" />
                  <div className="flex justify-between text-base">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-white font-semibold">{currentProduct.price}</span>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <p className="text-xs text-zinc-400 font-light flex items-start gap-2 leading-relaxed">
                    <iconify-icon icon="solar:letter-bold" class="text-base flex-shrink-0 mt-0.5 text-emerald-400" />
                    Votre commande est transmise par email. Nous vous confirmons la disponibilité et la livraison.
                  </p>
                </div>
              </div>

              {/* ---- Formulaire (droite) ---- */}
              <div className="w-full md:w-[58%] p-6 sm:p-8 overflow-y-auto overscroll-contain relative">
                {/* Indicateur drag mobile */}
                <div className="md:hidden w-10 h-1 rounded-full bg-zinc-200 mx-auto mb-5" />

                <button
                  onClick={handleClose}
                  aria-label="Fermer"
                  className="absolute top-5 right-5 sm:top-6 sm:right-6 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-all"
                >
                  <iconify-icon icon="solar:close-circle-linear" class="text-xl" />
                </button>

                {/* Résumé compact mobile */}
                <div className="md:hidden flex items-center gap-3 mb-5 p-3 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="w-10 h-10 rounded-xl bg-zinc-200 overflow-hidden flex-shrink-0">
                    <img src={currentProduct.image} alt={currentProduct.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-zinc-900 truncate">{currentProduct.name}</p>
                    <p className="text-xs text-zinc-400 font-light">{currentProduct.price} · Livraison offerte</p>
                  </div>
                </div>

                <div className="max-w-sm mx-auto">
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-1">
                    Finaliser la commande
                  </h2>
                  <p className="text-sm text-zinc-500 font-light mb-6">
                    Renseignez vos infos — nous vous recontactons rapidement.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                    <fieldset>
                      <legend className="text-[10px] font-semibold text-zinc-900 tracking-widest uppercase mb-3">
                        Vos informations
                      </legend>
                      <div className="space-y-2.5">
                        <div className="grid grid-cols-2 gap-2.5">
                          <input type="text" name="prenom" required placeholder="Prénom" className={inputCls} />
                          <input type="text" name="nom"    required placeholder="Nom"    className={inputCls} />
                        </div>
                        <input
                          type="tel"
                          name="telephone"
                          required
                          placeholder="Téléphone"
                          className={inputCls}
                        />
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className="text-[10px] font-semibold text-zinc-900 tracking-widest uppercase mb-3">
                        Adresse de livraison
                      </legend>
                      <div className="space-y-2.5">
                        <input
                          type="text"
                          name="adresse"
                          required
                          placeholder="Numéro et nom de rue"
                          className={inputCls}
                        />
                        <div className="grid grid-cols-3 gap-2.5">
                          <input type="text" name="code_postal" required placeholder="Code postal" className={`col-span-1 ${inputCls}`} />
                          <input type="text" name="ville"       required placeholder="Ville"        className={`col-span-2 ${inputCls}`} />
                        </div>
                        <textarea
                          name="instructions"
                          rows={2}
                          placeholder="Instructions optionnelles (code d'entrée, étage…)"
                          className={`${inputCls} resize-none`}
                        />
                      </div>
                    </fieldset>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full h-14 flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-all shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending
                        ? <><iconify-icon icon="svg-spinners:ring-resize" class="text-lg" /> Envoi en cours…</>
                        : 'Confirmer la commande'
                      }
                    </button>

                    <p className="text-center text-xs text-zinc-400 font-light pb-2">
                      Votre commande sera traitée par notre équipe sous 24h.
                    </p>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
