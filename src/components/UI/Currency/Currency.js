import React from 'react';

const Currency = (props) => {
  const currencyName = props.currency ? props.currency : 'nigiris';
  const value = props.decimals >= 0 ? props.value.toFixed(props.decimals) : props.value.toFixed(2);
  const displayedValue = (+value).toLocaleString('en-US', { minimumFractionDigits: 0 });
    
  return (
    <span>
      {displayedValue} {currencyName}
    </span>
  );
};

export default Currency;
