import React from 'react';

const ContentSubInput = ({ email, setEmail }) => {
  return (
    <input
      type="email"
      value={email}
      name=""
      id=""
      placeholder="Enter your Email..."
      onChange={(e) => setEmail(e.target.value)}
    />
  );
};
export default ContentSubInput;
