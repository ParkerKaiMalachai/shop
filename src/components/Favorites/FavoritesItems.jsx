import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { deleteFav } from '../../actions.ts';

const FavoritesItems = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFav(id));
  };
  const favs = useSelector((state) => state.favsRed.favorites);
  return (
    <div className="favorites">
      <h1>
        Your favorite books <BsFillBookmarkHeartFill color="orangered" />
      </h1>
      <ul className="favorites__wrapper">
        {favs.map((item) => (
          <li key={item.isbn13}>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <h4>Price: {item.price}</h4>
            <p onClick={() => handleDelete(item.isbn13)}>Delete</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesItems;
