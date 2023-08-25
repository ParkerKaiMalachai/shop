import React from 'react';
import ContentStarRating from '../ContentStarRating';

const ContentAllReviews = (item) => {
  return (
    <li className="content__reviews-li" key={item.date}>
      <div className="content__reviews-li__block">
        <ContentStarRating ratingDefault={item.rating} />
        <i>
          {item.name} {'   '}
        </i>
        <p>{item.time}</p>
      </div>
      <p>{item.text}</p>
      <hr />
    </li>
  );
};
export default ContentAllReviews;
