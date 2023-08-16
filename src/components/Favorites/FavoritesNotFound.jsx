import React from 'react';
import { GiNothingToSay } from 'react-icons/gi';

const FavoritesNotFound = () => {
  return (
    <div className="favorites__notfound">
      <div className="favorites__notfound__block">
        <h1>Вы еще ничего не добавили в избранное!</h1>
        <GiNothingToSay color="orange" size={50} />
      </div>
    </div>
  );
};

export default FavoritesNotFound;
