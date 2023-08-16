import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ContentStarRating = ({ ratingDefault }) => {
  return (
    <div className="content__star">
      {[...Array(5)].map((item, i) => {
        const rating = i;

        return (
          <label key={i}>
            <input className="star__radio" type="radio" name="rating" value={ratingDefault} />
            <FaStar
              className="star"
              color={rating >= ratingDefault ? 'gray' : 'rgb(231, 231, 13)'}
            />
          </label>
        );
      })}
    </div>
  );
};

export default ContentStarRating;
