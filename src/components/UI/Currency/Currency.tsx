type CurrencyProps = {
  decimals: number;
  value: number;
  currency: string;
};

const Currency = ({ decimals, value, currency }: CurrencyProps) => {
  const formattedValue = decimals >= 0 ? value.toFixed(decimals) : value.toFixed(2);
  const displayedValue = (+formattedValue).toLocaleString('en-US', { minimumFractionDigits: 0 });
  let currencyName = currency ? currency : 'nigiri';
  if (value > 1 && !currency) {
    currencyName += 's';
  }

  return (
    <span>
      {displayedValue} {currencyName}
    </span>
  );
};

export default Currency;
