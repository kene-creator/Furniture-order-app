import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: 'c1', name: 'Husk', amoount: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className="flex justify-between p-3">
        <span className="font-mono font-semibold text-2xl">Total Amount</span>
        <span className="font-mono font-semibold text-2xl">35.62</span>
      </div>
      <div className="flex mt-8 justify-end">
        <button
          type="button"
          className="w-20 h-[2.3rem] font-mono bg-white border border-solid border-[#D9AB82] text-[#D9AB82] font-bold py-2 px-4 rounded-[2.5rem] flex justify-center items-center mr-5 "
          onClick={onClose}
        >
          Close
        </button>
        <button
          type="submit"
          className="w-20 h-[2.3rem] bg-[#D9AB82] font-mono text-white font-bold py-2 px-4 rounded-[2.5rem] flex justify-center items-center"
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
