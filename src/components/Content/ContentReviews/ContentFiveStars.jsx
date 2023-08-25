import React from 'react';
import { FaStar } from 'react-icons/fa';

const ContentFiveStarts = ({ handleFiveStars, fiveValue }) => {
  return (
    <p onClick={handleFiveStars}>
      {[...Array(5)].map((item, i) => (
        <FaStar key={i} />
      ))}{' '}
      <br />
      <progress max="100" value={fiveValue}></progress>
    </p>
  );
};
export default ContentFiveStarts;
