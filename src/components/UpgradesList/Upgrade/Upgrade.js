import React from 'react';
import Button from '../../UI/Button/Button';

import styles from './Upgrade.module.css';

const Upgrade = (props) => {
  return (
    <div className={styles.Upgrade}>
      <div>{props.name}</div>
      <div>Cost: {props.cost} makis</div>
      <div>Have: {props.count}</div>
      <Button clicked={props.clicked}>Upgrade!</Button>
    </div>
  );
};

export default Upgrade;
