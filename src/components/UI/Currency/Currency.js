import React from 'react';

const Currency = (props) => {
  const value = props.value.toLocaleString('en-US', { minimumFractionDigits: 0 });
  const currencyName = props.currency ? props.currency : 'nigiris';

  return (
    <span>
      {value} {currencyName}
    </span>
  );
};

export default Currency;
