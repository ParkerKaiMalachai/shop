import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getFreqQuery } from '../../../actions.ts';

const ContentQueryList = (item) => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.targetRed.searchValue);

  const handleQuery = (query) => {
    dispatch(getFreqQuery(query));
  };

  return (
    <li
      className={classNames('content__query', { active: item.query === query })}
      onClick={() => handleQuery(item.query)}>
      {item.query}
    </li>
  );
};
export default ContentQueryList;
