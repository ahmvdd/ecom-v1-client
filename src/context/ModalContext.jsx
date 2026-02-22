import { createContext, useContext, useState, useEffect } from 'react'

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [currentProduct,    setCurrentProduct]    = useState(null)
  const [productModalOpen,  setProductModalOpen]  = useState(false)
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false)
  const [selectedModel,     setSelectedModel]     = useState('')
  const [selectedColor,     setSelectedColor]     = useState('')

  // Bloquer le scroll du body quand un modal est ouvert
  useEffect(() => {
    document.body.style.overflow =
      productModalOpen || checkoutModalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [productModalOpen, checkoutModalOpen])

  function openProductModal(product) {
    setCurrentProduct(product)
    setSelectedModel(product.models[0] ?? '')
    setSelectedColor(product.colors[0]?.name ?? '')
    setProductModalOpen(true)
  }

  function closeProductModal() {
    setProductModalOpen(false)
  }

  function openCheckoutModal() {
    setProductModalOpen(false)
    setCheckoutModalOpen(true)
  }

  function closeCheckoutModal() {
    setCheckoutModalOpen(false)
  }

  return (
    <ModalContext.Provider value={{
      currentProduct,
      productModalOpen,  openProductModal,  closeProductModal,
      checkoutModalOpen, openCheckoutModal, closeCheckoutModal,
      selectedModel,     setSelectedModel,
      selectedColor,     setSelectedColor,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}
