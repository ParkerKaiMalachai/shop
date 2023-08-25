import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = ({ logo }) => {
  return (
    <Link to="/">
      <div className="header__logo">
        <img src={logo} alt="" />

        <span>
          BOOK<strong>STORE</strong>
        </span>
      </div>
    </Link>
  );
};
export default HeaderLogo;
