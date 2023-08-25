import React from 'react';
import { Link } from 'react-router-dom';
import { PiHandTapDuotone } from 'react-icons/pi';
import book from '../../../assests/book.webp';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ContentNewNav = () => {
  return (
    <div className="content__navigate__new">
      <div>
        <h5>Tap to navigate</h5>

        <h2>
          <PiHandTapDuotone size={30} color="orange" />
          EXPECTED BOOK RELEASES
        </h2>
        <HiOutlineArrowNarrowRight size={40} color="orange" />
      </div>
      <Link to="/newposts">
        <div className="content__new__wrapper__img">
          <img className="content__new__img" src={book} alt="" />
          <div className="content__new__cover">
            <h1>Review of new books</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ContentNewNav;
