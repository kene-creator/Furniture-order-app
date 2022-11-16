import { useState } from 'react';
import Header from './components/Layout/Header';
import Collection from './components/Layout/Collection';
import Products from './components/Layout/Products';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsVisisble, setCartIsVisisble] = useState(false);

  const showCartHandler = () => {
    setCartIsVisisble(true);
  };

  const hideCartHandler = () => {
    setCartIsVisisble(false);
  };

  return (
    <>
      {cartIsVisisble && <Cart onClose={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Collection />
        <Products />
      </main>
    </>
  );
}

export default App;
