import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewPosts, getCardFav } from '../../actions.ts';
import { RiHeartAddFill } from 'react-icons/ri';
import { MdOutlineDownloadDone } from 'react-icons/md';

const ContentNewRelease = () => {
  const dispatch = useDispatch();
  const newPosts = useSelector((state) => state.newPostsRed.newPosts);
  const isNewLoading = useSelector((state) => state.newPostsRed.isNewPostsLoad);
  const newError = useSelector((state) => state.newPostsRed.errorNewPosts);
  const favorites = useSelector((state) => state.favsRed.favorites);
  console.log(newPosts);

  useEffect(() => {
    dispatch(fetchNewPosts());
  }, []);

  const handleFav = (card) => {
    dispatch(getCardFav(card));
  };

  return (
    <>
      {isNewLoading && <h1>Loading...</h1>}
      {newError && { newError }}

      {Array.isArray(newPosts) && (
        <div className="container">
          <h1>
            Add books to your favorites so you don't miss their release!{' '}
            <RiHeartAddFill size={35} color="orange" />
          </h1>
          <ul className="new__releases">
            {newPosts.map((item) => (
              <li key={item.isbn13} className="new__releases__li">
                <img src={item.image} alt="" />
                <h5>{item.title}</h5>
                <h6>{item.subtitle}</h6>
                <button disabled="disabled">Нет в наличии</button>
                <button className="new__releases__btn">
                  <MdOutlineDownloadDone
                    size={30}
                    color={
                      favorites.find((el) => {
                        return el.isbn13 === item.isbn13;
                      })
                        ? 'lime'
                        : '#C0C0C0'
                    }
                    onClick={() => handleFav(item)}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default ContentNewRelease;
