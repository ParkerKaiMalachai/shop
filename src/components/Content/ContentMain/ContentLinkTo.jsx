import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContentLinkTo = ({ itemId }) => {
  const navigate = useNavigate();
  return (
    <Link to={`/books/${itemId}`}>
      <button onClick={() => navigate(`/books/${itemId}`)}>Подробнее</button>
    </Link>
  );
};
export default ContentLinkTo;
