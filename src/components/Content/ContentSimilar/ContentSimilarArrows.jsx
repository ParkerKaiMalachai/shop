import React from 'react';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const ContentSimilarArrows = ({ handleNext, handlePrev }) => {
  return (
    <div className="content__capture-arrows">
      <h1>SIMILAR BOOKS</h1>
      <div className="content__arrows">
        <HiOutlineArrowLongLeft
          className="HiOutlineArrowLongLeft"
          size={30}
          onClick={handlePrev}
          cursor="pointer"
        />
        {'           '}
        <HiOutlineArrowLongRight
          className="HiOutlineArrowLongRight"
          size={30}
          onClick={handleNext}
          cursor="pointer"
        />
      </div>
    </div>
  );
};
export default ContentSimilarArrows;
