import React, { useState } from 'react';

const ContentPopUp = ({ pages, year }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span className="content__card__block__btn" onClick={() => setOpen(!open)}>
        {open ? <>Tap to hide</> : <>Tap to see more data</>}
      </span>
      {open && (
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
      )}
    </>
  );
};

export default ContentPopUp;
