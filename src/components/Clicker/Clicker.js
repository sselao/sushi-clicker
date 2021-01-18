import React, { Component } from 'react';

import image from './clicker.svg';
import styles from './Clicker.module.css';
import ClickGenerator from '../ClickGenerator/ClickGenerator';

class Clicker extends Component {
  render() {
    const currency = this.props.currency.toLocaleString('en-US', { minimumFractionDigits: 0 });

    return (
      <React.Fragment>
        <img src={image} className={styles.Clicker} onClick={this.props.clicked} alt='clicker' />
        <div className={styles.ClickerNumberDisplay}>{currency} makis</div>
        <div>{this.props.currencyPerClick} makis per click</div>
        <ClickGenerator currencyPerSecond={this.props.currencyPerSecond} />
      </React.Fragment>
    );
  }
}

export default Clicker;
