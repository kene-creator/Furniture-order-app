import React from 'react';
import Navbar from './Navbar';
import HeaderBody from './HeaderBody';
import Sponsor from './Sponsor';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="font-mono">
        <Navbar></Navbar>
        <HeaderBody />
        <Sponsor />
      </header>
    </React.Fragment>
  );
};

export default Header;
