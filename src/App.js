import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Outer from './pages/Outer';
import OuterDetail from './pages/OuterDetail';
import Other from './pages/Other';
import OtherDetail from './pages/OtherDetail';
import LookBook from './pages/LookBook';
import Member from './pages/Member';
import Login from './pages/Login';
import Cart from './pages/Cart';

//아이콘
import { GoChevronUp, GoChevronDown } from "react-icons/go";


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function scrollBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}

function App() {
  const [cart, setCart] = useState(0);
  const [showQuickMenu, setShowQuickMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowQuickMenu(true);
      } else {
        setShowQuickMenu(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className="App" cart={cart} setCart={setCart}>
        <Header cart={cart}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/look-book" element={<LookBook />} />
          <Route path="/outer" element={<Outer cart={cart} setCart={setCart} />} />
          <Route path="/outer/:id" element={<OuterDetail />} />
          <Route path="/other" element={<Other cart={cart} setCart={setCart}/>} />
          <Route path="/other/:id" element={<OtherDetail/>} />
          <Route path="/member" element={<Member />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        {showQuickMenu && (
        <div className="quick-menu">
          <button className="go-to-top-btn" onClick={scrollToTop}><GoChevronUp className="GoChevronUp"/></button>
          <button className="go-to-bottom-btn" onClick={scrollBottom}><GoChevronDown className="GoChevronDown"/></button>
        </div>
      )}
      </div>
  );
}

export default App;