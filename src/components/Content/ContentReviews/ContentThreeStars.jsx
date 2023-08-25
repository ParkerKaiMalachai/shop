import React from 'react';
import { FaStar } from 'react-icons/fa';

const ContentThreeStars = ({ handleThreeStars, threeValue }) => {
  return (
    <p onClick={handleThreeStars}>
      {[...Array(3)].map((item, i) => (
        <FaStar key={i} />
      ))}{' '}
      <br />
      <progress max="100" value={threeValue}></progress>
    </p>
  );
};
export default ContentThreeStars;
