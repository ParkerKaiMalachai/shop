import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

const ContentSubPopUp = ({ handleToClose }) => {
  return (
    <div className="pop-up__sub">
      <p onClick={handleToClose}>X</p>
      <BsCheckCircle size={65} color="green" />
      <h2>Thank you! Data sent successfully.</h2>
    </div>
  );
};
export default ContentSubPopUp;
