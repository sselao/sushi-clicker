import React from 'react';
import Currency from '../UI/Currency/Currency';

const ClickGenerator = (props) => (
  <div>
    Auto-generating <Currency value={props.currencyPerSecond} /> per second
  </div>
);

export default ClickGenerator;
