import React from 'react';

const ContentPageBlocks = (item) => {
  return (
    <li>
      <div className="content__card__block">
        <p>{item.firstLevel}</p>
        <strong>{item.secondLevel}</strong>
      </div>
    </li>
  );
};
export default ContentPageBlocks;
