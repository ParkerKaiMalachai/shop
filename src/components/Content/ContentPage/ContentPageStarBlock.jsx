import React from 'react';
import ContentStarRating from '../ContentStarRating';

const ContentPageStarBlock = ({ price, rating }) => {
  return (
    <div className="content__card__block">
      <strong>{price}</strong>

      <ContentStarRating ratingDefault={rating} />
    </div>
  );
};
export default ContentPageStarBlock;
