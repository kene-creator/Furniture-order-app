import React from 'react';
import Navbar from './Navbar';
import HeaderBody from './HeaderBody';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="font-mono">
        <Navbar></Navbar>
        <HeaderBody />
      </header>
    </React.Fragment>
  );
};

export default Header;
