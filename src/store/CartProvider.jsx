import CartContext from './cart_context';

const CartProvider = (props) => {
  const addItemHandler = (items) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
