import Header from './components/Layout/Header';
import Collection from './components/Layout/Collection';
import Products from './components/Layout/Products';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Header />
      <Cart />
      <main>
        <Collection />
        <Products />
      </main>
    </>
  );
}

export default App;
