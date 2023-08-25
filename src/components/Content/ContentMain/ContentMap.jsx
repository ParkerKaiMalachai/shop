import React from 'react';
import ContentStarRating from '../ContentStarRating.jsx';
import ContentLinkTo from './ContentLinkTo.jsx';
import ContentFavBut from './ContentFavBut.jsx';

const ContentMap = (item) => {
  return (
    <li className="content__li" key={item.isbn13}>
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <h6>{item.subtitle}</h6>
      <div className="content__starblock">
        <h3>{item.price}</h3>
        <ContentStarRating />
      </div>
      <div className="content__butt">
        <ContentLinkTo itemId={item.isbn13} />
        <ContentFavBut {...item} />
      </div>
    </li>
  );
};
export default ContentMap;
