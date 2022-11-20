import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart_context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          image={item.image}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className="flex justify-between p-3">
        <span className="font-mono font-semibold text-2xl">Total Amount</span>
        <span className="font-mono font-semibold text-2xl">{totalAmount}</span>
      </div>
      <div className="flex mt-8 justify-end">
        <button
          type="button"
          className="w-20 h-[2.3rem] font-mono bg-white border border-solid border-[#D9AB82] text-[#D9AB82] font-bold py-2 px-4 rounded-[2.5rem] flex justify-center items-center mr-5 "
          onClick={onClose}
        >
          Close
        </button>
        {hasItems && (
          <button
            type="submit"
            className="w-20 h-[2.3rem] bg-[#D9AB82] font-mono text-white font-bold py-2 px-4 rounded-[2.5rem] flex justify-center items-center"
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
