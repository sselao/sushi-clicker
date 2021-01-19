import React from 'react';
import Currency from '../../UI/Currency/Currency';
import styles from './PowerUp.module.css';

const PowerUp = (props) => {
  const className = [styles.PowerUp];
  if (props.enabled) {
    className.push(styles.Enabled);
  }

  return (
    <div className={className.join(' ')} onClick={props.clicked}>
      <div>
        <strong>{props.name}</strong>
      </div>
      <div>
        (<Currency value={props.cost} />)
      </div>
    </div>
  );
};

export default PowerUp;
