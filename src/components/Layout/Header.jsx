import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="font-mono">
        <Navbar></Navbar>
      </header>
    </React.Fragment>
  );
};

export default Header;
