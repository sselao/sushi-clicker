import React from 'react';
import Button from '../UI/Button/Button';

const ResetButton = () => {
  const resetClickHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmed = confirm("Reset game entirely?");
    if (confirmed) {
      localStorage.removeItem('savedGame');
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  };

  return <Button clicked={resetClickHandler}>Reset Game</Button>;
};

export default ResetButton;
