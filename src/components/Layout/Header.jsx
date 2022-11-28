import React from 'react';
import Navbar from './Navbar';
import HeaderBody from './HeaderBody';
import Sponsor from './Sponsor';
import Collection from './Collection';
import Products from './Products';

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { showCart } = props;
  return (
    <>
      <header className="font-mono">
        <Navbar onShowCart={showCart} />
        <HeaderBody />
        <Sponsor />
        <Collection />
        <Products />
      </header>
    </>
  );
};

export default Header;
