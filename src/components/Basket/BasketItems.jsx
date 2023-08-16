import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import {
  getCardBasket,
  getCartEmpty,
  getCartItemEmpty,
  getCountDecr,
  getCountIncr,
  removeCartItem,
} from '../../actions.ts';
import { BsCaretLeftFill } from 'react-icons/bs';
import { BsFillCaretRightFill } from 'react-icons/bs';
const BasketItems = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prodRed.products);
  const price = useSelector((state) => state.prodRed.sevPrice);

  const handleEmptyCart = () => {
    dispatch(getCartEmpty(true));
  };

  const handleEmptyItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const productsItems = useSelector((state) => state.prodRed.products);

  const sortedCounts = products.reduce((sum, obj) => {
    return sum + obj.countItem;
  }, 0);

  const handleDecr = (id) => {
    dispatch(getCountDecr(id));
  };

  const handleIncr = (id) => {
    dispatch(getCountIncr(id));
  };

  return (
    <>
      <div className="basket__items">
        <Link to="/">
          <HiOutlineArrowNarrowLeft className="content__page__icon" size={50} />
        </Link>
        <h1>Корзинка</h1>
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt="" />
              <h3>
                Title: <strong>{item.title}</strong>
              </h3>
              <div className="basket__count">
                <BsCaretLeftFill
                  className="basket__count-ment"
                  onClick={() => handleDecr(item.id)}
                />
                <h1>{productsItems.find((el) => el.id === item.id).countItem}</h1>
                <BsFillCaretRightFill
                  className="basket__count-ment"
                  onClick={() => handleIncr(item.id)}
                />
              </div>
              <h4>
                Price: <strong>{item.price}</strong>
              </h4>
              <button className="content__delete" onClick={() => handleEmptyItem(item.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
        <h2>Total price: $ {price}</h2>
        <h2>Total products: {sortedCounts}</h2>
        <button onClick={handleEmptyCart}>EMPTY CART</button>
      </div>
    </>
  );
};

export default BasketItems;
