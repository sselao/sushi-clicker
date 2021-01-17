import React from 'react';
import Button from '../../UI/Button/Button';

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
        <div>Cost: {props.cost} makis</div>
        <div>Have: {props.count}</div>
        <Button disabled={props.disabled} clicked={props.clicked}>
          Upgrade!
        </Button>
      </div>
      <p className={styles.Description}>
        Increase currency per {props.type === 'generator' ? 'second' : props.type} by{' '}
        {props.increase}
      </p>
    </div>
  );
};

export default Upgrade;
