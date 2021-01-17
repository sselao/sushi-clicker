import React from 'react';
import Button from '../../UI/Button/Button';

import styles from './Upgrade.module.css';

const Upgrade = (props) => {
  let className = [styles.Upgrade]
  if (props.disabled) {
    className.push(styles.Disabled);
  }

  return (
    <div className={className.join(' ')}>
      <div>{props.name}</div>
      <div>Cost: {props.cost} makis</div>
      <div>Have: {props.count}</div>
      <Button disabled={props.disabled} clicked={props.clicked}>Upgrade!</Button>
    </div>
  );
};

export default Upgrade;
