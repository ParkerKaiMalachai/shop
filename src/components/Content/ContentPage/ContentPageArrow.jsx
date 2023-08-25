import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const ContentPageArrow = () => {
  return (
    <Link to="/">
      <HiOutlineArrowNarrowLeft className="content__page__icon" size={50} />
    </Link>
  );
};
export default ContentPageArrow;
