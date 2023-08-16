import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from './MiddleWare/logger.ts';
import thunk from 'redux-thunk';
import { actionTypes } from './actions.ts';
import { composeWithDevTools } from 'redux-devtools-extension';

const defalutPostsState = {
  posts: [],
  isPostsLoading: false,
  errorPosts: '',
};

const defaultBasketState = {
  products: [],
  clickOnEmpty: false,
  clickOnItemEmpty: false,
  sevPrice: 0,
};

const defaultFavsState = {
  favorites: [],
};

const defaultTarget = {
  searchValue: 'Mongo',
};

const defaultNewPostsState = {
  newPosts: [],
  isNewPostsLoad: false,
  errorNewPosts: '',
};

const newPostsReducer = (state = defaultNewPostsState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEW_SUCCESS:
      return { ...state, newPosts: action.payload };
    case actionTypes.GET_NEW_LOADING:
      return { ...state, isNewPostsLoad: action.payload };
    case actionTypes.GET_NEW_ERRORS:
      return { ...state, errorNewPosts: action.payload };
    default:
      return state;
  }
};

const targetReducer = (state = defaultTarget, action) => {
  switch (action.type) {
    case actionTypes.GET_TARGET:
      return { ...state, searchValue: action.payload };
    case actionTypes.GET_FREQ_QUERY:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

const favsReducer = (state = defaultFavsState, action) => {
  switch (action.type) {
    case actionTypes.GET_CARD_FAV:
      const foundFav = state.favorites.find((item) => {
        return item.isbn13 === action.payload.isbn13;
      });
      if (!foundFav) {
        const favsPayload = [...state.favorites, action.payload];
        return { ...state, favorites: favsPayload };
      }
      return state;
    case actionTypes.DELETE_FAV:
      const filteredFav = state.favorites.filter((item) => {
        return item.isbn13 !== action.payload;
      });
      return { ...state, favorites: filteredFav };
    default:
      return state;
  }
};

const productsReducer = (state = defaultBasketState, action) => {
  switch (action.type) {
    case actionTypes.GET_CARD_BASKET:
      const foundProd = state.products.find((item) => {
        return item.id === action.payload.id;
      });

      if (!foundProd) {
        const productsWithPayload = [...state.products, action.payload];
        return { ...state, products: productsWithPayload };
      }

      return {
        ...state,
        products: state.products.map((prod) => {
          if (prod.id === action.payload.id) {
            return { ...prod, countItem: prod.countItem + 1 };
          }
          return prod;
        }),
      };

    ///
    case actionTypes.GET_COUNT_DECR:
      const aboveZero = state.products.find((item) => {
        return item.countItem > 1;
      });
      if (!aboveZero) {
        const filterGoods = state.products.filter((item) => {
          return item.id !== action.payload;
        });
        return {
          ...state,
          products: filterGoods,
        };
      }
      {
        return {
          ...state,
          products: state.products.map((item) => {
            if (item.id === action.payload) {
              return { ...item, countItem: item.countItem - 1 };
            }
            return item;
          }),
        };
      }
    case actionTypes.GET_COUNT_INCR:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload) {
            return { ...item, countItem: item.countItem + 1 };
          }
          return item;
        }),
      };
    ///
    case actionTypes.GET_CARD_EMPTY:
      return { ...state, products: (state.products = []) };
    case actionTypes.REMOVE_CARD_ITEM: {
      const filterProducts = state.products.filter((item) => {
        return item.id !== action.payload;
      });

      return { ...state, products: filterProducts };
    }
    case actionTypes.GET_SUM:
      const countMap = state.products.reduce((sum, count) => {
        return sum + count.countItem;
      }, 0);
      const reducePrice = state.products.reduce((sum, item) => {
        return sum + Number(item.price.slice(1)) * item.countItem;
      }, 0);

      return { ...state, sevPrice: reducePrice.toFixed(2) };

    default:
      return state;
  }
};

const postsReducer = (state = defalutPostsState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case actionTypes.GET_POSTS_LOADING:
      return { ...state, isPostsLoading: action.payload };
    case actionTypes.GET_POSTS_ERROR:
      return { ...state, errorPosts: action.payload };
    default:
      return state;
  }
};

const reducer = combineReducers({
  postsRed: postsReducer,
  prodRed: productsReducer,
  favsRed: favsReducer,
  targetRed: targetReducer,
  newPostsRed: newPostsReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
