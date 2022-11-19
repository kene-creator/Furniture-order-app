import { useReducer } from 'react';

import CartContext from './cart_context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateItems = state.items.concat(action.items);
    const updateTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;
    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  console.log(cartState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', items: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
