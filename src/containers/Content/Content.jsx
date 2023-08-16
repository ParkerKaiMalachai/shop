import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPosts, getCardFav, getFreqQuery } from '../../actions.ts';
import { Link } from 'react-router-dom';
import ContentSub from '../../components/Content/ContentSub.jsx';
import ContentStarRating from '../../components/Content/ContentStarRating.jsx';
import ContentCardSkel from '../../components/Content/ContentCardSkel.jsx';
import { FcCheckmark } from 'react-icons/fc';
import { Pagination } from '@mui/material';
import classNames from 'classnames';
import ContentNew from '../../components/Content/ContentNew.jsx';

const Content = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsRed.posts);
  const isPostsLoading = useSelector((state) => state.postsRed.isPostsLoading);
  const errorPosts = useSelector((state) => state.postsRed.errorPosts);
  const favs = useSelector((state) => state.favsRed.favorites);
  const query = useSelector((state) => state.targetRed.searchValue);

  const handleAddFavs = (post) => {
    dispatch(getCardFav(post));
  };

  const handleQuery = (query) => {
    dispatch(getFreqQuery(query));
  };

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
                  <li
                    className={classNames('content__query', { active: item.query === query })}
                    onClick={() => handleQuery(item.query)}>
                    {item.query}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="content__ul">
              {isPostsLoading
                ? [...new Array(10)].map((_, index) => <ContentCardSkel key={index} />)
                : posts.map((item, i) => (
                    <li className="content__li" key={item.isbn13}>
                      <img src={item.image} alt="" />
                      <h3>{item.title}</h3>
                      <h6>{item.subtitle}</h6>
                      <div className="content__starblock">
                        <h3>{item.price}</h3>
                        <ContentStarRating />
                      </div>
                      <div className="content__butt">
                        <Link to={`/books/${item.isbn13}`}>
                          <button onClick={() => navigate(`/books/${item.isbn13}`)}>
                            Подробнее
                          </button>
                        </Link>
                        <button onClick={() => handleAddFavs(item)}>
                          Добавить в избранное{' '}
                          {favs.find((el) => {
                            if (el.isbn13 === item.isbn13) {
                              return true;
                            }
                          }) ? (
                            <FcCheckmark size={20} />
                          ) : (
                            ''
                          )}
                        </button>
                      </div>
                    </li>
                  ))}
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
