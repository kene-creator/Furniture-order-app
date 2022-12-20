import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Layout/Header';

import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Checkout from './components/Cart/Checkout';
import Dashboard from './components/Layout/Dashboard';
import ForgotPassword from './components/utility/ForgotPassword';
import UpdateProfile from './components/utility/UpdateProfile';

import { AuthProvider } from './store/AuthContext';

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
      <AuthProvider>
        <CartProvider>
          {cartIsVisisble && (
            <Cart onClose={hideCartHandler} visible={hideCartHandler} />
          )}
          <Routes>
            <Route path="/" element={<Header showCart={showCartHandler} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
