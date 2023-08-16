import React from 'react';
import BasketItems from '../../components/Basket/BasketItems';
import BasketNotFound from '../../components/Basket/BasketNotFound';
import { useSelector } from 'react-redux';

const Basket = () => {
  const products = useSelector((state) => state.prodRed.products);
  return <>{products.length > 0 ? <BasketItems /> : <BasketNotFound />}</>;
};

export default Basket;
