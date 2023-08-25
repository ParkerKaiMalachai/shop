import React from 'react';

const HeaderSearch = ({ glass, query, handleTarget }) => {
  return (
    <div className="header__search">
      <img className="header__search__icon" src={glass} alt="" />
      <input
        className="header__search__input"
        type="search"
        placeholder="Enter to search for a book..."
        value={query}
        onChange={(e) => handleTarget(e.target.value)}
        autoFocus
      />
    </div>
  );
};
export default HeaderSearch;
