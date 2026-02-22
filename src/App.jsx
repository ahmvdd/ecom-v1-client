import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ModalProvider } from './context/ModalContext'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ProductModal from './components/ProductModal'
import CheckoutModal from './components/CheckoutModal'
import Home from './pages/Home'
import Products from './pages/Products'

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
        </Routes>

        <Footer />
        <WhatsAppButton />

        {/* Modals globaux — accessibles depuis toutes les pages */}
        <ProductModal />
        <CheckoutModal />
      </ModalProvider>
    </BrowserRouter>
  )
}
