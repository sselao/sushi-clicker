import React from 'react';
import styles from './PowerUp.module.css';

const PowerUp = (props) => {
  const className = [styles.PowerUp];
  if (props.enabled) {
    className.push(styles.Enabled);
  }

  return (
    <div className={className.join(' ')} onClick={props.clicked}>
      <div><strong>{props.name}</strong></div>
      <div>({props.cost} makis)</div>
    </div>
  );
};

export default PowerUp;
