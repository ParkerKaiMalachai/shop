import React, { useState } from 'react';

const ContentTab = ({ activeKey, children }) => {
  const [key, setKey] = useState(activeKey);

  return (
    <div className="content__tabs">
      <div className="tabs">
        {children.map((item) => {
          return (
            <div
              key={item.props.aKey}
              className={key === item.props.aKey ? 'tab-item active' : 'tab-item'}
              onClick={() => setKey(item.props.aKey)}>
              {item.props.title}
            </div>
          );
        })}
      </div>
      <div className="tab-content">
        {children.map((item) => {
          return (
            <div
              key={item.props.aKey}
              className={key === item.props.aKey ? 'tab-pan active' : 'tab-pan'}>
              <p>{item.props.children}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Tab = () => {
  return <></>;
};

export default ContentTab;
