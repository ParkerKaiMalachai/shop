import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ({ heart, shop, sortedCount, auth }) => {
  return (
    <div className="header__nav">
      <div>
        <Link to="/favorites/">
          <img src={heart} alt="" />
        </Link>
      </div>
      <div className="header__basket">
        <Link to="/basket">
          <img src={shop} alt="" />
        </Link>
        <strong>{sortedCount}</strong>
      </div>
      <div>
        <Link to="/login">
          <img src={auth} alt="" />
        </Link>
      </div>
    </div>
  );
};
export default HeaderNav;
