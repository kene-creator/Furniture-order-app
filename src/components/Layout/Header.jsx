import React from 'react';
import Navbar from './Navbar';
import HeaderBody from './HeaderBody';
import Sponsor from './Sponsor';
import Collection from './Collection';
import Products from './Products';
import Review from './Review';
import SignUp from './SignUp';

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
        <Review />
        <SignUp />
      </header>
    </>
  );
};

export default Header;
