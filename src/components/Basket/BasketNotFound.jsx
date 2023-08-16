import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { HiOutlineEmojiSad } from 'react-icons/hi';

const BasketNotFound = () => {
  return (
    <div className="basket__notfound">
      <div className="basket__notfound__block">
        <FaShoppingBasket size={50} color="orange" />
        <h1>Корзина пуста </h1>
      </div>
      <HiOutlineEmojiSad size={50} color="orange" />
    </div>
  );
};

export default BasketNotFound;
