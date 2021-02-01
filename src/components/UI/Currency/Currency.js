import React from 'react';

const Currency = (props) => {
  const value = props.decimals >= 0 ? props.value.toFixed(props.decimals) : props.value.toFixed(2);
  const displayedValue = (+value).toLocaleString('en-US', { minimumFractionDigits: 0 });
  let currencyName = props.currency ? props.currency : 'nigiri';
  if (value > 1 && !props.currency) {
    currencyName += 's';
  }

  return (
    <span>
      {displayedValue} {currencyName}
    </span>
  );
};

export default Currency;
