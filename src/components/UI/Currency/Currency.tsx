type CurrencyProps = {
  value: number;
  decimals?: number;
  currency?: string;
};

const Currency = ({ value, decimals = 2, currency = 'nigiri' }: CurrencyProps) => {
  const formattedValue = value.toFixed(decimals);
  const displayedValue = (+formattedValue).toLocaleString('en-US', { minimumFractionDigits: 0 });
  if (value > 1) {
    currency += 's';
  }

  return (
    <span>
      {displayedValue} {currency}
    </span>
  );
};

export default Currency;
