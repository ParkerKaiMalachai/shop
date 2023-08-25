import React from 'react';

const ContentPageBuyBtn = ({ county, handleBuyProd }) => {
  return (
    <button onClick={handleBuyProd}>
      BUY
      {county && county.countItem > 0 ? <i> + {county.countItem}</i> : ''}
    </button>
  );
};
export default ContentPageBuyBtn;
