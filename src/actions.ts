import { createAction } from '@reduxjs/toolkit';

export const actionTypes = {
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_LOADING: 'GET_POSTS_LOADING',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',

  GET_CARD_BASKET: 'GET_CARD_BASKET',

  GET_CARD_EMPTY: 'GET_CARD_EMPTY',
  GET_CARD_ITEM_EMPTY: 'GET_CARD_ITEM_EMPTY',
  REMOVE_CARD_ITEM: 'REMOVE_CARD_ITEM',
  GET_SUM: 'GET_SUM',
  GET_COUNT_DECR: 'GET_COUNT_DECR',
  GET_COUNT_INCR: 'GET_COUNT_INCR',

  GET_CARD_FAV: 'GET_CARD_FAV',
  DELETE_FAV: 'DELETE_FAV',

  GET_TARGET: 'GET_TARGET',
  GET_FREQ_QUERY: 'GET_FREQ_QUERY',

  GET_NEW_SUCCESS: 'GET_NEW_SUCCESS',
  GET_NEW_LOADING: 'GET_NEW_LOADING',
  GET_NEW_ERRORS: 'GET_NEW_ERRORS',
};

const getPostsSuccess = (payload) => ({ type: actionTypes.GET_POSTS_SUCCESS, payload });

const getPostsLoading = createAction<boolean>(actionTypes.GET_POSTS_LOADING);

const getPostsError = (payload) => ({ type: actionTypes.GET_POSTS_ERROR, payload });

const getCardBasket = (payload) => ({ type: actionTypes.GET_CARD_BASKET, payload });

const getCartEmpty = (payload) => ({ type: actionTypes.GET_CARD_EMPTY, payload });

const getCartItemEmpty = (payload) => ({ type: actionTypes.GET_CARD_ITEM_EMPTY, payload });

const removeCartItem = (payload) => ({ type: actionTypes.REMOVE_CARD_ITEM, payload });

const getSum = (payload) => ({ type: actionTypes.GET_SUM, payload });

const getCardFav = (payload) => ({ type: actionTypes.GET_CARD_FAV, payload });

const getCountDecr = (payload) => ({ type: actionTypes.GET_COUNT_DECR, payload });

const getCountIncr = (payload) => ({ type: actionTypes.GET_COUNT_INCR, payload });

const deleteFav = (payload) => ({ type: actionTypes.DELETE_FAV, payload });

const getTarget = (payload) => ({ type: actionTypes.GET_TARGET, payload });

const getFreqQuery = (payload) => ({ type: actionTypes.GET_FREQ_QUERY, payload });

const getNewPosts = (payload) => ({ type: actionTypes.GET_NEW_SUCCESS, payload });

const getNewLoading = (payload) => ({ type: actionTypes.GET_NEW_LOADING, payload });

const getNewErrors = (payload) => ({ type: actionTypes.GET_NEW_ERRORS, payload });

const fetchPosts = ({ urlInfo }) => {
  return (dispatch) => {
    dispatch(getPostsLoading(true));

    fetch(`https://api.itbook.store/1.0/search/` + urlInfo)
      .then((response) => response.json())
      .then((json) => dispatch(getPostsSuccess(json['books'])))
      .catch((err) => dispatch(getPostsError(err)))
      .finally(() => dispatch(getPostsLoading(false)));
  };
};

const fetchNewPosts = () => {
  return (dispatch) => {
    dispatch(getNewLoading(true));

    fetch('https://api.itbook.store/1.0/new')
      .then((response) => response.json())
      .then((json) => dispatch(getNewPosts(json['books'])))
      .catch((error) => dispatch(getNewErrors(error)))
      .finally(() => dispatch(getNewLoading(false)));
  };
};

export {
  fetchPosts,
  getCardBasket,
  getCartEmpty,
  getCartItemEmpty,
  removeCartItem,
  getSum,
  getCardFav,
  getCountDecr,
  getCountIncr,
  deleteFav,
  getTarget,
  getFreqQuery,
  fetchNewPosts,
};
