import React from 'react';
import Navbar from './Navbar';
import HeaderBody from './HeaderBody';
import Sponsor from './Sponsor';

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { showCart } = props;
  return (
    <>
      <header className="font-mono">
        <Navbar onShowCart={showCart} />
        <HeaderBody />
        <Sponsor />
      </header>
    </>
  );
};

export default Header;
