import React from 'react';
import Currency from '../../UI/Currency/Currency';

import styles from './Upgrade.module.css';

const Upgrade = (props) => {
  let className = [styles.Upgrade];
  if (props.disabled) {
    className.push(styles.Disabled);
  }

  return (
    <div className={className.join(' ')} onClick={props.clicked}>
      <div className={styles.Container}>
        <div className={styles.Name}>{props.name}</div>
        <div>
          Cost: <Currency value={props.cost} decimals={0} />
        </div>
        <div className={styles.Count}>{props.count > 0 && props.count}</div>
      </div>
      <p className={styles.Description}>
        Increase currency per {props.type === 'generator' ? 'second' : props.type} by{' '}
        {props.increase.toFixed(2)}
      </p>
    </div>
  );
};

export default Upgrade;
