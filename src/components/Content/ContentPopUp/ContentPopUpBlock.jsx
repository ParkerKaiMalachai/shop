import React from 'react';

const ContentPopUpBlock = ({ pages, year }) => {
  return (
    <>
      <div className="content__card__block">
        <p>Pages</p>
        <strong>{pages}</strong>
      </div>
      <div className="content__card__block">
        <p>Year</p>
        <strong>{year}</strong>
      </div>
    </>
  );
};
export default ContentPopUpBlock;
