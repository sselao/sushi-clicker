import React, { Component } from 'react';

import image from './clicker.svg';
import styles from './Clicker.module.css';
import ClickGenerator from '../ClickGenerator/ClickGenerator';

class Clicker extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={image} className={styles.Clicker} onClick={this.props.clicked} alt='clicker' />
        <div className={styles.ClickerNumberDisplay}>{this.props.currency} makis</div>
        <ClickGenerator currencyPerSecond={this.props.currencyPerSecond} />
      </React.Fragment>
    );
  }
}

export default Clicker;
