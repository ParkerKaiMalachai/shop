import React, { useEffect, useState } from 'react';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { useNavigate, Link } from 'react-router-dom';

const ContentSimilar = ({ ident }) => {
  const [similar, setSimilar] = useState([]);
  const [actualIndex, setActualIndex] = useState(3);
  const [value, setValue] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/search/node.js')
      .then((response) => response.json())
      .then((json) => setSimilar(json['books']));
  }, []);

  const handlePrev = () => {
    setActualIndex((prevState) => prevState - 1);
    if (value <= 0) {
      setValue((prevState) => prevState + (similar.length - 4) * 100);
    }
    if (value > 0) {
      setValue((prevState) => prevState - 100);
    }
  };

  const handleNext = () => {
    setActualIndex((prevState) => prevState + 1);
    if (value >= 0) {
      setValue((prevState) => prevState + 100);
    }
    if (value > 0 && value === (similar.length - 4) * 100) {
      setValue(0);
    }
  };

  useEffect(() => {
    const lastIndex = similar.length - 1;
    if (actualIndex < 0) {
      setActualIndex(lastIndex);
    }
    if (actualIndex > lastIndex) {
      setActualIndex(0);
    }
  }, [actualIndex, similar]);

  return (
    <>
      <div className="content__capture-arrows">
        <h1>SIMILAR BOOKS</h1>
        <div className="content__arrows">
          <HiOutlineArrowLongLeft
            className="HiOutlineArrowLongLeft"
            size={30}
            onClick={handlePrev}
            cursor="pointer"
          />
          {'           '}
          <HiOutlineArrowLongRight
            className="HiOutlineArrowLongRight"
            size={30}
            onClick={handleNext}
            cursor="pointer"
          />
        </div>
      </div>
      <hr />
      <div className="content__similar">
        <ul className="content__similar__list">
          {similar.map((item) => {
            return (
              <li
                className="content__similar__list-li"
                style={{
                  transform: `translateX(${-value}%)`,
                  transition: '0.5s all ease-in-out',
                  borderBottom: ident === item.isbn13 ? '5px solid orange' : 'none',
                  backgroundColor: ident === item.isbn13 ? 'MistyRose' : '',
                }}
                key={item.isbn13}
                onClick={() => navigate(`/books/${item.isbn13}`)}>
                <img src={item.image} alt="" />

                <h5>{item.title}</h5>

                <h6>{item.price}</h6>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default ContentSimilar;
