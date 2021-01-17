import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
  <button className={styles.Button} disabled={props.disabled} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
