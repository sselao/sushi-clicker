import React from 'react';
import Button from '../../UI/Button/Button';
import Currency from '../../UI/Currency/Currency';

import styles from './Upgrade.module.css';

const Upgrade = (props) => {
  let className = [styles.Upgrade];
  if (props.disabled) {
    className.push(styles.Disabled);
  }

  return (
    <div className={className.join(' ')}>
      <div className={styles.Container}>
        <div>{props.name}</div>
        <div>
          Cost: <Currency value={props.cost} decimals={0} />
        </div>
        <div>Have: {props.count}</div>
        <Button disabled={props.disabled} clicked={props.clicked}>
          Upgrade!
        </Button>
      </div>
      <p className={styles.Description}>
        Increase currency per {props.type === 'generator' ? 'second' : props.type} by{' '}
        {props.increase.toFixed(2)}
      </p>
    </div>
  );
};

export default Upgrade;
