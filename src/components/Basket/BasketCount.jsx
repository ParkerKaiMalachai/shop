import React from 'react';
import { BsCaretLeftFill } from 'react-icons/bs';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const BasketCount = ({ handleDecr, handleIncr, id }) => {
  const productsItems = useSelector((state) => state.prodRed.products);
  return (
    <div className="basket__count">
      <BsCaretLeftFill className="basket__count-ment" onClick={() => handleDecr(id)} />
      <h1>{productsItems.find((el) => el.id === id).countItem}</h1>
      <BsFillCaretRightFill className="basket__count-ment" onClick={() => handleIncr(id)} />
    </div>
  );
};
export default BasketCount;
