import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart_context';
import logo from '../../images/logo.png';
import classes from './Navbar.module.css';
import icons from '../../images/icons.svg';

const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onShowCart } = props;

  const [btnIsHighlighted, setBtnHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numCartItems = cartCtx.items.reduce(
    (accumulator, currVal) => accumulator + currVal.amount,
    0
  );

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <nav className="h-20 flex justify-between items-center z-30 sticky top-0 backdrop-blur-2xl">
      <div>
        <a href="">
          <img src={logo} alt="Company logo" className="w-36 h-28" />
        </a>
      </div>
      <div className={classes.link_items}>
        <a href="" className="mr-8">
          home
        </a>
        <a href="" className="mr-8">
          about us
        </a>
        <a href="" className="mr-8">
          products
        </a>
        <a href="" className="mr-8">
          faq
        </a>
        <a href="" className="mr-8">
          contact us
        </a>
      </div>
      <div className="flex mr-20">
        <div className="icons mr-6">
          <svg className="fill-black w-5 h-5 cursor-pointer">
            <use xlinkHref={`${icons}#search`} />
          </svg>
        </div>
        <div className="icons mr-6 relative">
          <span
            className={`rounded-[50%] bg-red-500 w-5 h-5 flex absolute text-white justify-center items-center top-[-0.5rem] right-[-0.5rem] ${btnClasses}`}
          >
            {numCartItems}
          </span>
          <svg
            className="fill-black w-5 h-5 cursor-pointer"
            onClick={onShowCart}
          >
            <use xlinkHref={`${icons}#icon-shopping-basket`} />
          </svg>
        </div>
        <div className="icons">
          <svg className="fill-black w-5 h-5 cursor-pointer">
            <use xlinkHref={`${icons}#icon-user`} />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
