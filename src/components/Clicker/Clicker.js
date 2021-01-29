import React from 'react';
import image from './clicker.svg';
import styles from './Clicker.module.css';
import ClickGenerator from '../ClickGenerator/ClickGenerator';
import Currency from '../UI/Currency/Currency';

const Clicker = (props) => (
  <>
    <img src={image} className={styles.Clicker} onClick={props.clicked} alt='clicker' />
    <div className={styles.ClickerNumberDisplay}>
      <Currency value={props.currency} decimals={0} />
    </div>
    <div>
      <Currency value={props.currencyPerClick} /> per click
    </div>
    <ClickGenerator currencyPerSecond={props.currencyPerSecond} />
  </>
);

export default Clicker;
