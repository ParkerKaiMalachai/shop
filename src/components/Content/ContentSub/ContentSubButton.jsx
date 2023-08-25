import React from 'react';

const ContentSubButton = ({ handleSub, include }) => {
  return (
    <button type="submit" onClick={handleSub} disabled={!include && true}>
      Subscribe
    </button>
  );
};
export default ContentSubButton;
