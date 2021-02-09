import Currency from '../../UI/Currency/Currency';
import styles from './PowerUp.module.css';

type PowerUpProps = {
  name: string;
  currency: number;
  cost: number;
  enabled: boolean;
  clicked: React.MouseEventHandler<HTMLDivElement>;
};

const PowerUp = ({ name, currency, cost, enabled, clicked }: PowerUpProps) => {
  const className = [styles.PowerUp];
  if (enabled) {
    className.push(styles.Enabled);
  } else if (currency >= cost) {
    className.push(styles.Available);
  }

  return (
    <div className={className.join(' ')} onClick={clicked}>
      <div>
        <strong>{name}</strong>
      </div>
      <div>
        (<Currency value={cost} />)
      </div>
    </div>
  );
};

export default PowerUp;
