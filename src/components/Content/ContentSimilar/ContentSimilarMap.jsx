import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContentSimilarMap = ({ isbn13, image, title, price, ident, value }) => {
  const navigate = useNavigate();
  return (
    <li
      className="content__similar__list-li"
      style={{
        transform: `translateX(${-value}%)`,
        transition: '0.5s all ease-in-out',
        borderBottom: ident === isbn13 ? '5px solid orange' : 'none',
        backgroundColor: ident === isbn13 ? 'MistyRose' : '',
      }}
      key={isbn13}
      onClick={() => navigate(`/books/${isbn13}`)}>
      <img src={image} alt="" />

      <h5>{title}</h5>

      <h6>{price}</h6>
    </li>
  );
};
export default ContentSimilarMap;
