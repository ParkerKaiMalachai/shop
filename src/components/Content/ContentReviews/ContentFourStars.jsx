import React from 'react';
import { FaStar } from 'react-icons/fa';

const ContentFourStars = ({ handleFourStars, fourValue }) => {
  return (
    <p onClick={handleFourStars}>
      {[...Array(4)].map((item, i) => (
        <FaStar key={i} />
      ))}{' '}
      <br />
      <progress max="100" value={fourValue}></progress>
    </p>
  );
};
export default ContentFourStars;
