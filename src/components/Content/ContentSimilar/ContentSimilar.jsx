import React, { useEffect, useState } from 'react';
import ContentSimilarArrows from './ContentSimilarArrows';
import ContentSimilarMap from './ContentSimilarMap';

const ContentSimilar = ({ ident }) => {
  const [similar, setSimilar] = useState([]);
  const [actualIndex, setActualIndex] = useState(3);
  const [value, setValue] = useState(0);

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
      <ContentSimilarArrows handleNext={handleNext} handlePrev={handlePrev} />
      <hr />
      <div className="content__similar">
        <ul className="content__similar__list">
          {similar.map((item) => {
            return (
              <ContentSimilarMap
                isbn13={item.isbn13}
                image={item.image}
                title={item.title}
                price={item.price}
                ident={ident}
                value={value}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default ContentSimilar;
