import { useDispatch, useSelector } from 'react-redux';
import { getCartEmpty, getCountDecr, getCountIncr, removeCartItem } from '../../actions.ts';
import ContentPageArrow from '../Content/ContentPage/ContentPageArrow.jsx';
import BasketMap from './BasketMap.jsx';
import BasketTotalInfo from './BasketTotalInfo.jsx';
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
        <ContentPageArrow />
        <h1>Корзинка</h1>
        <ul>
          {products.map((item) => (
            <BasketMap
              image={item.image}
              title={item.title}
              price={item.price}
              id={item.id}
              handleDecr={handleDecr}
              handleIncr={handleIncr}
              handleEmptyItem={handleEmptyItem}
            />
          ))}
        </ul>
        <BasketTotalInfo
          price={price}
          sortedCounts={sortedCounts}
          handleEmptyCart={handleEmptyCart}
        />
      </div>
    </>
  );
};

export default BasketItems;
