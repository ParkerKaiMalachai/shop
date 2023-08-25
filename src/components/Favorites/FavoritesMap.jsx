import React from 'react';

const FavoritesMap = ({ isbn13, image, title, subtitle, price, handleDelete }) => {
  return (
    <li key={isbn13}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <h4>Price: {price}</h4>
      <p onClick={() => handleDelete(isbn13)}>Delete</p>
    </li>
  );
};
export default FavoritesMap;
