import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { getCardFav } from '../../../actions.ts';

const ContentFavBut = (item) => {
  const dispatch = useDispatch();

  const favs = useSelector((state) => state.favsRed.favorites);

  const handleAddFavs = (post) => {
    dispatch(getCardFav(post));
  };

  return (
    <button onClick={() => handleAddFavs(item)}>
      Добавить в избранное{' '}
      {favs.find((el) => {
        if (el.isbn13 === item.isbn13) {
          return true;
        }
      }) ? (
        <FcCheckmark size={20} />
      ) : (
        ''
      )}
    </button>
  );
};
export default ContentFavBut;
