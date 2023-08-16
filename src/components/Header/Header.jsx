import React from 'react';
import logo from '../../assests/book-stack.png';
import glass from '../../assests/glass.png';
import heart from '../../assests/heart.png';
import shop from '../../assests/shopping-basket.png';
import auth from '../../assests/authorize.png';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import App from '../../App';
import BasketNotFound from '../Basket/BasketNotFound';
import BasketItems from '../Basket/BasketItems';
import Basket from '../../containers/Basket/Basket';
import { useDispatch, useSelector } from 'react-redux';
import Favorites from '../../containers/Favorites/Favorites';
import { getTarget } from '../../actions.ts';

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
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="" />

            <span>
              BOOK<strong>STORE</strong>
            </span>
          </div>
        </Link>
        <Routes>
          <Route path="/" element={App} />
        </Routes>
        <div className="header__search">
          <img className="header__search__icon" src={glass} alt="" />
          <input
            className="header__search__input"
            type="search"
            placeholder="Enter to search for a book..."
            value={query}
            onChange={(e) => handleTarget(e.target.value)}
            autoFocus
          />
        </div>
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
      </div>
    </div>
  );
};

export default Header;
