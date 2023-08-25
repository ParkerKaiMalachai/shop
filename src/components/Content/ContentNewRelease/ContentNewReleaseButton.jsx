import React from 'react';
import { MdOutlineDownloadDone } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getCardFav } from '../../../actions.ts';

const ContentNewReleaseButton = (item) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favsRed.favorites);

  const handleFav = (card) => {
    dispatch(getCardFav(card));
  };

  return (
    <button className="new__releases__btn">
      <MdOutlineDownloadDone
        size={30}
        color={
          favorites.find((el) => {
            return el.isbn13 === item.isbn13;
          })
            ? 'lime'
            : '#C0C0C0'
        }
        onClick={() => handleFav(item)}
      />
    </button>
  );
};
export default ContentNewReleaseButton;
