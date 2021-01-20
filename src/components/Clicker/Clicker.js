import React from 'react';

import image from './clicker.svg';
import styles from './Clicker.module.css';
import ClickGenerator from '../ClickGenerator/ClickGenerator';
import Currency from '../UI/Currency/Currency';

const Clicker = (props) => {
  return (
    <>
      <img src={image} className={styles.Clicker} onClick={props.clicked} alt='clicker' />
      <div className={styles.ClickerNumberDisplay}>
        <Currency value={props.currency} />
      </div>
      <div>
        <Currency value={props.currencyPerClick} /> per click
      </div>
      <ClickGenerator currencyPerSecond={props.currencyPerSecond} />
    </>
  );
};

export default Clicker;
