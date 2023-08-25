import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewPosts } from '../../actions.ts';
import ContentNewReleaseCapture from '../../components/Content/ContentNewRelease/ContentNewReleaseCapture.jsx';
import ContentNewReleaseMap from '../../components/Content/ContentNewRelease/ContentNewReleaseMap.jsx';

const ContentNewRelease = () => {
  const dispatch = useDispatch();
  const newPosts = useSelector((state) => state.newPostsRed.newPosts);
  const isNewLoading = useSelector((state) => state.newPostsRed.isNewPostsLoad);
  const newError = useSelector((state) => state.newPostsRed.errorNewPosts);

  useEffect(() => {
    dispatch(fetchNewPosts());
  }, []);

  return (
    <>
      {isNewLoading && <h1>Loading...</h1>}
      {newError && { newError }}

      {Array.isArray(newPosts) && (
        <div className="container">
          <ContentNewReleaseCapture />
          <ul className="new__releases">
            {newPosts.map((item) => (
              <ContentNewReleaseMap {...item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default ContentNewRelease;
