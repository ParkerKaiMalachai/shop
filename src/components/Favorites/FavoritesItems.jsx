import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { deleteFav } from '../../actions.ts';
import ContentPageArrow from '../Content/ContentPage/ContentPageArrow.jsx';
import FavoritesMap from './FavoritesMap.jsx';

const FavoritesItems = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFav(id));
  };
  const favs = useSelector((state) => state.favsRed.favorites);
  return (
    <div className="favorites">
      <ContentPageArrow />
      <h1>
        Your favorite books <BsFillBookmarkHeartFill color="orangered" />
      </h1>
      <ul className="favorites__wrapper">
        {favs.map((item) => (
          <FavoritesMap
            isbn13={item.isbn13}
            image={item.image}
            price={item.price}
            title={item.title}
            subtitle={item.subtitle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesItems;
