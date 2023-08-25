import React, { useState } from 'react';
import ContentPopUpBlock from './ContentPopUpBlock';

const ContentPopUp = ({ pages, year }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span className="content__card__block__btn" onClick={() => setOpen(!open)}>
        {open ? <>Tap to hide</> : <>Tap to see more data</>}
      </span>
      {open && <ContentPopUpBlock pages={pages} year={year} />}
    </>
  );
};

export default ContentPopUp;
