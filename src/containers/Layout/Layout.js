import React, { useEffect, useState } from 'react';
import Clicker from '../../components/Clicker/Clicker';
import PowerUpsList from '../../components/PowerUpsList/PowerUpsList';
import Upgrades from '../Upgrades/Upgrades';
import useInterval from '../../hooks/useInterval';
import styles from './Layout.module.css';

const upgradesList = [
  {
    name: 'Cursor',
    type: 'click',
    initialCost: 1,
    cost: 1,
    count: 0,
    increase: 1,
  },
  {
    name: 'Apprentice',
    type: 'generator',
    initialCost: 2,
    cost: 2,
    count: 0,
    increase: 1,
  },
  {
    name: 'Itamae',
    type: 'generator',
    initialCost: 5,
    cost: 5,
    count: 0,
    increase: 5,
  },
  {
    name: 'Fisherman',
    type: 'generator',
    initialCost: 10,
    cost: 10,
    count: 0,
    increase: 10,
    disabled: true,
  },
];

const powerUpsList = [
  {
    name: '10x Click',
    type: 'click',
    cost: 100,
    multiplier: 10,
    enabled: false,
  },
  {
    name: '100x Click',
    type: 'click',
    cost: 100,
    multiplier: 100,
    enabled: false,
  },
  {
    name: '10x CPS',
    type: 'generator',
    cost: 200,
    multiplier: 10,
    enabled: false,
  },
  {
    name: '100x CPS',
    type: 'generator',
    cost: 300,
    multiplier: 100,
    enabled: false,
  },
];

const Layout = () => {
  const [documentTitle, setDocumentTitle] = useState('Sushi Clicker');
  const [currency, setCurrency] = useState(1);
  const [currencyPerClick, setCurrencyPerClick] = useState(1);
  const [currencyPerSecond, setCurrencyPerSecond] = useState(100);
  const [upgrades, setUpgrades] = useState(upgradesList);
  const [powerUps, setPowerUps] = useState(powerUpsList);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  useInterval(() => {
    setDocumentTitle(`${currency} Nigiris - Sushi Clicker`);
  }, 5000);

  useInterval(() => {
    setCurrency(currency + currencyPerSecond);
  }, 1000);

  const clickedUpgradeHandler = (index) => {
    const cost = upgrades[index].cost;
    if (currency >= cost) {
      const updatedUpgrades = [...upgrades];
      updatedUpgrades[index] = {
        ...updatedUpgrades[index],
        count: updatedUpgrades[index].count + 1,
        cost: Math.ceil(
          updatedUpgrades[index].cost +
            updatedUpgrades[index].initialCost * (1.07 ^ updatedUpgrades[index].count),
        ),
      };

      setUpgrades(updatedUpgrades);
      setCurrency(currency - cost);

      if (updatedUpgrades[index].type === 'click') {
        setCurrencyPerClick(currencyPerClick + updatedUpgrades[index].increase);
      } else if (updatedUpgrades[index].type === 'generator') {
        setCurrencyPerSecond(currencyPerSecond + updatedUpgrades[index].increase);
      }
    }
  };

  const clickedPowerUpHandler = (index) => {
    if (!powerUps[index].enabled) {
      const cost = powerUps[index].cost;
      if (currency >= cost) {
        const updatedPowerUps = [...powerUps];
        updatedPowerUps[index] = {
          ...updatedPowerUps[index],
          enabled: true,
        };

        setPowerUps(updatedPowerUps);
        setCurrency(currency - cost);

        if (updatedPowerUps[index].type === 'click') {
          setCurrencyPerClick(currencyPerClick * updatedPowerUps[index].multiplier);
        } else if (updatedPowerUps[index].type === 'generator') {
          setCurrencyPerSecond(currencyPerSecond * updatedPowerUps[index].multiplier);
        }
      }
    }
  };

  return (
    <div className={styles.Layout}>
      <div className={styles.Left}>
        <Clicker
          currency={currency}
          currencyPerClick={currencyPerClick}
          currencyPerSecond={currencyPerSecond}
          clicked={() => setCurrency(currency + currencyPerClick)}
        />
        <PowerUpsList powerUps={powerUps} clicked={clickedPowerUpHandler} />
      </div>
      <div className={styles.Right}>
        <Upgrades upgrades={upgrades} upgraded={clickedUpgradeHandler} />
      </div>
    </div>
  );
};

export default Layout;
