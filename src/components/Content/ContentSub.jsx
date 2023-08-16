import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';

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
      <h2>Subscribe to Newsletter</h2>
      <h5>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </h5>
      <div className="content__subscribe__block">
        <input
          type="email"
          value={email}
          name=""
          id=""
          placeholder="Enter your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleSub} disabled={!include && true}>
          Subscribe
        </button>
      </div>
      <div className={isSent & include ? 'window___pop-up flex' : 'window___pop-up'}>
        <div className="pop-up__sub">
          <p onClick={handleToClose}>X</p>
          <BsCheckCircle size={65} color="green" />
          <h2>Thank you! Data sent successfully.</h2>
        </div>
      </div>
    </div>
  );
};

export default ContentSub;
