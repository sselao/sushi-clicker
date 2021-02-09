import PowerUp from './PowerUp/PowerUp';
import styles from './PowerUpsList.module.css';

type PowerUpsListProps = {
  powerUps: any[];
  currency: number;
  clicked: Function;
};

const PowerUpsList = ({ powerUps, currency, clicked }: PowerUpsListProps) => (
  <div className={styles.PowerUpsList}>
    <h1>List of Power Ups</h1>
    <div className={styles.List}>
      {powerUps.map((pu, index) => (
        <PowerUp
          key={index}
          name={pu.name}
          cost={pu.cost}
          enabled={pu.enabled}
          currency={currency}
          clicked={() => clicked(index)}
        />
      ))}
    </div>
  </div>
);

export default PowerUpsList;
