import React from 'react';
import logo from '../../assests/book-stack.png';
import glass from '../../assests/glass.png';
import heart from '../../assests/heart.png';
import shop from '../../assests/shopping-basket.png';
import auth from '../../assests/authorize.png';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { getTarget } from '../../actions.ts';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderNav from './HeaderNav';

const Header = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.targetRed.searchValue);
  const products = useSelector((state) => state.prodRed.products);
  const sortedCount = products.reduce((sum, obj) => {
    return sum + obj.countItem;
  }, 0);
  const handleTarget = (search) => {
    dispatch(getTarget(search));
  };
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo logo={logo} />
        <Routes>
          <Route path="/" element={App} />
        </Routes>
        <HeaderSearch glass={glass} query={query} handleTarget={handleTarget} />
        <HeaderNav heart={heart} shop={shop} auth={auth} sortedCount={sortedCount} />
      </div>
    </div>
  );
};

export default Header;
