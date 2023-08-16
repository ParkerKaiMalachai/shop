import React, { useEffect, useState } from 'react';
import ContentStarRating from './ContentStarRating';
import { FaStar } from 'react-icons/fa';

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
          <p onClick={handleAllRev}>All Reviews</p>
          <p onClick={handleFiveStars}>
            {[...Array(5)].map((item, i) => (
              <FaStar key={i} />
            ))}{' '}
            <br />
            <progress max="100" value={fiveValue}></progress>
          </p>
          <p onClick={handleFourStars}>
            {[...Array(4)].map((item, i) => (
              <FaStar key={i} />
            ))}{' '}
            <br />
            <progress max="100" value={fourValue}></progress>
          </p>
          <p onClick={handleThreeStars}>
            {[...Array(3)].map((item, i) => (
              <FaStar key={i} />
            ))}{' '}
            <br />
            <progress max="100" value={threeValue}></progress>
          </p>
          <p>
            {' '}
            {[...Array(2)].map((item, i) => (
              <FaStar color="gray" key={i} />
            ))}{' '}
            <br />
            <progress max="100" value="0"></progress>
          </p>
          <p>
            {' '}
            {[...Array(1)].map((item, i) => (
              <FaStar color="gray" key={i} />
            ))}{' '}
            <br />
            <progress max="100" value="0"></progress>
          </p>
        </div>
        <ul className="content__reviews">
          {(click ? newReviews : reviews).map((item) => (
            <li className="content__reviews-li" key={item.date}>
              <div className="content__reviews-li__block">
                <ContentStarRating ratingDefault={item.rating} />
                <i>
                  {item.name} {'   '}
                </i>
                <p>{item.time}</p>
              </div>
              <p>{item.text}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ContentReviewsCards;
