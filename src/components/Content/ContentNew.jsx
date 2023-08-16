import React from 'react';
import { PiHandTapDuotone } from 'react-icons/pi';
import book from '../../assests/book.webp';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ContentNew = () => {
  return (
    <div className="content__new">
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
      <div className="content__bookstore">
        <h1>IT-bookstore</h1>

        <h4>
          this is a store for true connoisseurs of good books and book graphics and those who share
          our interest in the IT industry
        </h4>
      </div>
    </div>
  );
};
export default ContentNew;
