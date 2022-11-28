import { useState } from 'react';
import Header from './components/Layout/Header';

import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Review from './components/Layout/Review';
import SignUp from './components/Layout/SignUp';

function App() {
  const [cartIsVisisble, setCartIsVisisble] = useState(false);

  const showCartHandler = () => {
    setCartIsVisisble(true);
  };

  const hideCartHandler = () => {
    setCartIsVisisble(false);
  };

  return (
    <CartProvider>
      {cartIsVisisble && <Cart onClose={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <Review />
      <SignUp />
    </CartProvider>
  );
}

export default App;
