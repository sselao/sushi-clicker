import Currency from '../../UI/Currency/Currency';
import styles from './Building.module.css';

type BuildingProps = {
  name: string;
  cost: number;
  count: number;
  currency: number;
  increase: number;
  type: 'click' | 'generator';
  clicked: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
};

const Building = ({
  name,
  cost,
  count,
  currency,
  increase,
  type,
  clicked,
  disabled = false,
}: BuildingProps) => {
  let className = [styles.Building];
  if (disabled) {
    className.push(styles.Disabled);
  }

  if (currency >= cost) {
    className.push(styles.Available);
  }

  return (
    <div className={className.join(' ')} onClick={clicked}>
      <div className={styles.Container}>
        <div className={styles.Name}>{name}</div>
        <div>
          <Currency value={cost} decimals={0} />
        </div>
        <div className={styles.Count}>{count > 0 && count}</div>
      </div>
      <p className={styles.Description}>
        +<Currency value={increase} decimals={0} /> per {type === 'generator' ? 'second' : type}
      </p>
    </div>
  );
};

export default Building;
