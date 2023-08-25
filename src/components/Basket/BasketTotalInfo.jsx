import React from 'react';

const BasketTotalInfo = ({ price, sortedCounts, handleEmptyCart }) => {
  return (
    <>
      <h2>Total price: $ {price}</h2>
      <h2>Total products: {sortedCounts}</h2>
      <button onClick={handleEmptyCart}>EMPTY CART</button>
    </>
  );
};
export default BasketTotalInfo;
