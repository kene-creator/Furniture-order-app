import React from 'react';
import logo from '../../images/logo.png';
import classes from './Navbar.module.css';
import icons from '../../images/icons.svg';

const Navbar = (props) => {
  return (
    <nav className="h-20 flex justify-between items-center bg-[#FBFBFB] z-20 relative">
      <div>
        <a href="">
          <img src={logo} alt="Company logo" className="w-36 h-28" />
        </a>
      </div>
      <div className={classes.link_items}>
        <a href="" className="mr-6">
          home
        </a>
        <a href="" className="mr-6">
          about us
        </a>
        <a href="" className="mr-6">
          products
        </a>
        <a href="" className="mr-6">
          faq
        </a>
        <a href="" className="mr-6">
          contact us
        </a>
      </div>
      <div className="flex mr-20">
        <div className="icons mr-6">
          <svg className="fill-black w-5 h-5">
            <use xlinkHref={`${icons}#search`} />
          </svg>
        </div>
        <div className="icons mr-6">
          <svg className="fill-black w-5 h-5">
            <use xlinkHref={`${icons}#icon-shopping-basket`} />
          </svg>
        </div>
        <div className="icons">
          <svg className="fill-black w-5 h-5">
            <use xlinkHref={`${icons}#icon-user`} />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
