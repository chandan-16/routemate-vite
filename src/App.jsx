import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/Home/Home';
import { ProductList } from './components/ProductList/ProductList';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
 

  return (
    <>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/1001" element={<ProductDetail />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
