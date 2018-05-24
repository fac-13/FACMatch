import React from 'react';

export default ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
