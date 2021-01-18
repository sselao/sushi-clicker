import React from 'react';
import PowerUp from './PowerUp/PowerUp';
import styles from './PowerUpsList.module.css';

const PowerUpsList = (props) => {
  return (
    <div className={styles.PowerUpsList}>
      <h1>List of Power Ups</h1>
      <div className={styles.List}>
        {props.powerUps.map((pu, index) => (
          <PowerUp
            key={index}
            name={pu.name}
            type={pu.type}
            cost={pu.cost}
            multiplier={pu.multiplier}
            enabled={pu.enabled}
            clicked={() => props.clicked(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PowerUpsList;
