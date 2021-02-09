import { FunctionComponent } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  clicked: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({ clicked, disabled, children }) => (
  <button className={styles.Button} disabled={disabled} onClick={clicked}>
    {children}
  </button>
);

export default Button;
