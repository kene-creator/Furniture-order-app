const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: 'c1', name: 'Husk', amoount: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div>
        <button
          type="button"
          className="w-40 h-[3rem] bg-[#D9AB82] text-white font-bold py-2 px-4 rounded-[2.5rem] flex justify-center items-center ml-auto mr-auto mt-[-1rem]"
        >
          Close
        </button>
        <button
          type="submit"
          className="w-40 h-[3rem] bg-[#D9AB82] text-white font-bold py-2 px-4 rounded-[2.5rem] flex justify-center items-center ml-auto mr-auto mt-[-1rem]"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
