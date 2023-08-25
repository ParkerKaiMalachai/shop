import React from 'react';
import BasketCount from './BasketCount';

const BasketMap = ({ image, title, price, id, handleDecr, handleIncr, handleEmptyItem }) => {
  return (
    <li key={id}>
      <img src={image} alt="" />
      <h3>
        Title: <strong>{title}</strong>
      </h3>
      <BasketCount id={id} handleDecr={handleDecr} handleIncr={handleIncr} />
      <h4>
        Price: <strong>{price}</strong>
      </h4>
      <button className="content__delete" onClick={() => handleEmptyItem(id)}>
        X
      </button>
    </li>
  );
};
export default BasketMap;
