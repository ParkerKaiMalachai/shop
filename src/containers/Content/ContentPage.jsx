import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import ContentSub from '../../components/Content/ContentSub';
import ContentTab, { Tab } from '../../components/Content/ContentTab';
import ContentStarRating from '../../components/Content/ContentStarRating';
import ContentPopUp from '../../components/Content/ContentPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { getCardBasket, getCartItemEmpty, getSum } from '../../actions.ts';
import ContentSimilar from '../../components/Content/ContentSimilar';
import ContentReviewsCards from '../../components/Content/ContentReviewsCards';

const ContentPage = () => {
  const { isbn13 } = useParams();
  const [currentItem, setCurrentItem] = useState([]);

  const county = useSelector((state) =>
    state.prodRed.products.find((item) => {
      if (item.id === currentItem.isbn13) {
        return item.countItem;
      }
    }),
  );

  const tabsArray = [
    { aKey: 'desc', title: 'Description', content: currentItem.desc },
    { aKey: 'authors', title: 'Authors', content: currentItem.authors },
    { aKey: 'url', title: 'URL', content: currentItem.url },
  ];

  const productsItems = useSelector((state) => state.prodRed.products);

  const dispatch = useDispatch();
  const prodCard = {
    image: currentItem.image,
    title: currentItem.title,
    price: currentItem.price,
    id: currentItem.isbn13,
    countItem: 1,
  };

  const handleBuyProd = () => {
    dispatch(getCardBasket(prodCard));
    dispatch(getSum(prodCard));
  };

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((response) => response.json())
      .then((json) => setCurrentItem(json));
  }, [isbn13]);
  return (
    <div className="content__page">
      <Link to="/">
        <HiOutlineArrowNarrowLeft className="content__page__icon" size={50} />
      </Link>
      <div className="container">
        <h1>{currentItem.title}</h1>
        <div className="content__wrapper">
          <div className="content__image">
            <img src={currentItem.image} alt="" />
          </div>
          <div className="content__card">
            <div className="content__card__block">
              <strong>{currentItem.price}</strong>
              <ContentStarRating ratingDefault={currentItem.rating} />
            </div>

            <div className="content__card__block">
              <p>Authors</p>
              <strong className="content__card__block__author">{currentItem.authors}</strong>
            </div>

            <div className="content__card__block">
              <p>Publisher</p>
              <strong>{currentItem.publisher}</strong>
            </div>

            <div className="content__card__block">
              <p>Language</p>
              <strong>English</strong>
            </div>

            <div className="content__card__block">
              <p>Format</p>
              <strong>Paper book / ebook (PDF)</strong>
            </div>
            <ContentPopUp pages={currentItem.pages} year={currentItem.year} />

            <button onClick={handleBuyProd}>
              BUY
              {county && county.countItem > 0 ? <i> + {county.countItem}</i> : ''}
            </button>
          </div>
        </div>
        <ContentTab activeKey="desc">
          {tabsArray.map((item) => (
            <Tab key={item.aKey} aKey={item.aKey} title={item.title}>
              {item.content}
            </Tab>
          ))}
        </ContentTab>
        <ContentReviewsCards />
        <ContentSimilar ident={currentItem.isbn13} />
        <ContentSub />
      </div>
    </div>
  );
};

export default ContentPage;
