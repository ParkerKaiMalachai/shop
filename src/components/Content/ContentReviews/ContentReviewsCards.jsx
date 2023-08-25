import React, { useEffect, useState } from 'react';
import ContentFiveStars from './ContentFiveStars';
import ContentFourStars from './ContentFourStars';
import ContentThreeStars from './ContentThreeStars';
import ContentOneTwoStars from './ContentOneTwoStars';
import ContentAllReviews from './ContentAllReviews';
import ContentAllReviewsButton from './ContentAllReviewsButton';

const ContentReviewsCards = () => {
  const [reviews, setReviews] = useState([]);
  const [click, setClick] = useState(false);
  const [newReviews, setNewReviews] = useState([]);

  useEffect(() => {
    fetch('https://649b1e5fbf7c145d023a0724.mockapi.io/dia/reviews')
      .then((response) => response.json())
      .then((json) => setReviews(json));
  }, []);

  const filteredFive = reviews.filter((item) => {
    return item.rating === 5;
  });

  const filteredFour = reviews.filter((item) => {
    return item.rating === 4;
  });

  const filteredThree = reviews.filter((item) => {
    return item.rating === 3;
  });

  const handleFiveStars = () => {
    setNewReviews(filteredFive);
    setClick(true);
  };

  const handleFourStars = () => {
    setNewReviews(filteredFour);
    setClick(true);
  };

  const handleThreeStars = () => {
    setNewReviews(filteredThree);
    setClick(true);
  };

  const handleAllRev = () => {
    setNewReviews(reviews);
  };

  const fiveValue = (filteredFive.length * 100) / reviews.length;
  const fourValue = (filteredFour.length * 100) / reviews.length;
  const threeValue = (filteredThree.length * 100) / reviews.length;

  return (
    <>
      <h1>All reviews</h1>
      <hr />
      <div className="content__reviews__wrap">
        <div className="content__reviews__filter">
          <h2>{reviews.length} reviews in total</h2>
          <ContentAllReviewsButton handleAllRev={handleAllRev} />
          <ContentFiveStars handleFiveStars={handleFiveStars} fiveValue={fiveValue} />
          <ContentFourStars handleFourStars={handleFourStars} fourValue={fourValue} />
          <ContentThreeStars handleThreeStars={handleThreeStars} threeValue={threeValue} />
          <ContentOneTwoStars />
        </div>
        <ul className="content__reviews">
          {(click ? newReviews : reviews).map((item) => (
            <ContentAllReviews {...item} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default ContentReviewsCards;
