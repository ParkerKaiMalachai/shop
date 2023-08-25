import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../actions.ts';
import ContentSub from '../../components/Content/ContentSub/ContentSub.jsx';
import ContentCardSkel from '../../components/Content/ContentMain/ContentCardSkel.jsx';
import { Pagination } from '@mui/material';
import ContentNew from '../../components/Content/ContentNewCover/ContentNew.jsx';
import ContentMap from '../../components/Content/ContentMain/ContentMap.jsx';
import ContentQueryList from '../../components/Content/ContentMain/ContentQueryList.jsx';

const Content = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsRed.posts);
  const isPostsLoading = useSelector((state) => state.postsRed.isPostsLoading);
  const errorPosts = useSelector((state) => state.postsRed.errorPosts);
  const query = useSelector((state) => state.targetRed.searchValue);

  const urlInfo = `/${query}/${page}`;

  const queryList = [
    { query: 'Mongo' },
    { query: 'Python' },
    { query: 'MySQL' },
    { query: 'HTML' },
    { query: 'Java' },
    { query: 'JavaScript' },
  ];

  useEffect(() => {
    dispatch(fetchPosts({ urlInfo }));
  }, [page, query]);

  return (
    <>
      {isPostsLoading && <h2>Loading...</h2>}
      {errorPosts && { errorPosts }}

      {Array.isArray(posts) && (
        <div className="content">
          <div className="container">
            <ContentNew />
            <div>
              Наиболее частые запросы:
              <ul className="content__query__list">
                {queryList.map((item) => (
                  <ContentQueryList {...item} />
                ))}
              </ul>
            </div>
            <ul className="content__ul">
              {isPostsLoading
                ? [...new Array(10)].map((_, index) => <ContentCardSkel key={index} />)
                : posts.map((item, i) => <ContentMap {...item} />)}
            </ul>
            <ContentSub />
            <Pagination
              className="content__pag"
              count="8"
              page={page}
              onChange={(_, num) => setPage(num)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
