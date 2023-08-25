import React from 'react';
import { FaStar } from 'react-icons/fa';

const ContentOneTwoStars = () => {
  return (
    <>
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
    </>
  );
};
export default ContentOneTwoStars;
