import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Layout/Header';

import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Checkout from './components/Cart/Checkout';

function App() {
  const [cartIsVisisble, setCartIsVisisble] = useState(false);

  const showCartHandler = () => {
    setCartIsVisisble(true);
  };

  const hideCartHandler = () => {
    setCartIsVisisble(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        {cartIsVisisble && (
          <Cart onClose={hideCartHandler} visible={hideCartHandler} />
        )}
        <Routes>
          <Route path="/" element={<Header showCart={showCartHandler} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
