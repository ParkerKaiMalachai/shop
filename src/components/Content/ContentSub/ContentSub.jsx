import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import ContentSubTitle from './ContentSubTitle';
import ContentSubInput from './ContentSubInput';
import ContentSubButton from './ContentSubButton';
import ContentSubPopUp from './ContentSubPopUp';

const ContentSub = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const handleSub = () => {
    setIsSent(true);
  };
  const handleToClose = () => {
    setIsSent(false);
    setEmail(' ');
  };
  const include = email.includes('@') & (email.length > 10);

  return (
    <div className="content__subscribe">
      <ContentSubTitle />
      <div className="content__subscribe__block">
        <ContentSubInput email={email} setEmail={setEmail} />
        <ContentSubButton handleSub={handleSub} include={include} />
      </div>
      <div className={isSent & include ? 'window___pop-up flex' : 'window___pop-up'}>
        <ContentSubPopUp handleToClose={handleToClose} />
      </div>
    </div>
  );
};

export default ContentSub;
