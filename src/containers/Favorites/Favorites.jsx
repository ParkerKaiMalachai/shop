import React from 'react';
import FavoritesNotFound from '../../components/Favorites/FavoritesNotFound';
import FavoritesItems from '../../components/Favorites/FavoritesItems';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favs = useSelector((state) => state.favsRed.favorites);
  return <>{favs.length > 0 ? <FavoritesItems /> : <FavoritesNotFound />}</>;
};

export default Favorites;
