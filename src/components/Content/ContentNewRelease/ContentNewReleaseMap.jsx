import React from 'react';
import ContentNewReleaseButton from './ContentNewReleaseButton';

const ContentNewReleaseMap = (item) => {
  return (
    <li key={item.isbn13} className="new__releases__li">
      <img src={item.image} alt="" />
      <h5>{item.title}</h5>
      <h6>{item.subtitle}</h6>
      <button disabled="disabled">Нет в наличии</button>
      <ContentNewReleaseButton {...item} />
    </li>
  );
};
export default ContentNewReleaseMap;
