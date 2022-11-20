import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <img src={props.image} alt="" className="w-36" />
      <div>
        <h2 className="text-xl font-serif">{props.name}</h2>
        <div className={classes.summary}>
          <span className="text-2xl text-[#D9AB82]">{price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onRemove}>
          −
        </button>
        <span className={classes.amount}>{props.amount}</span>
        <button type="button" onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
