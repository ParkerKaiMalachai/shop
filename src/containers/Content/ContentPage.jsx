import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentSub from '../../components/Content/ContentSub/ContentSub';
import ContentTab, { Tab } from '../../components/Content/ContentTab';
import ContentPopUp from '../../components/Content/ContentPopUp/ContentPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { getCardBasket, getSum } from '../../actions.ts';
import ContentSimilar from '../../components/Content/ContentSimilar/ContentSimilar';
import ContentReviewsCards from '../../components/Content/ContentReviews/ContentReviewsCards';
import ContentPageBlocks from '../../components/Content/ContentPage/ContentPageBlocks';
import ContentPageStarBlock from '../../components/Content/ContentPage/ContentPageStarBlock';
import ContentPageArrow from '../../components/Content/ContentPage/ContentPageArrow';
import ContentPageTitle from '../../components/Content/ContentPage/ContentPageTitle';
import ContentPageImage from '../../components/Content/ContentPage/ContentPageImage';
import ContentPageBuyBtn from '../../components/Content/ContentPage/ContentPageBuyBtn';

const ContentPage = () => {
  const { isbn13 } = useParams();
  const [currentItem, setCurrentItem] = useState([]);

  const dispatch = useDispatch();

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

  const blockArray = [
    { firstLevel: 'Authors', secondLevel: currentItem.authors },
    { firstLevel: 'Publisher', secondLevel: currentItem.publisher },
    { firstLevel: 'Language', secondLevel: 'English' },
    { firstLevel: 'Format', secondLevel: 'Paper book / ebook (PDF)' },
  ];

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
      <ContentPageArrow />
      <div className="container">
        <ContentPageTitle title={currentItem.title} />
        <div className="content__wrapper">
          <ContentPageImage image={currentItem.image} />
          <div className="content__card">
            <ContentPageStarBlock price={currentItem.price} rating={currentItem.rating} />
            <ul>
              {blockArray.map((item) => (
                <ContentPageBlocks {...item} />
              ))}
            </ul>
            <ContentPopUp pages={currentItem.pages} year={currentItem.year} />
            <ContentPageBuyBtn county={county} handleBuyProd={handleBuyProd} />
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
