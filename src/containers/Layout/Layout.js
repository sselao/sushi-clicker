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
    minCurrency: 0,
    initialCost: 1,
    cost: 1,
    count: 0,
    increase: 1,
  },
  {
    name: 'Apprentice',
    type: 'generator',
    minCurrency: 50,
    initialCost: 50,
    cost: 50,
    count: 0,
    increase: 1,
  },
  {
    name: 'Itamae',
    type: 'generator',
    minCurrency: 1000,
    initialCost: 1000,
    cost: 1000,
    count: 0,
    increase: 8,
    disabled: true,
  },
  {
    name: 'Restaurant',
    type: 'generator',
    minCurrency: 12000,
    initialCost: 12000,
    cost: 12000,
    count: 0,
    increase: 47,
    disabled: true,
  },
  {
    name: 'Fisherman',
    type: 'generator',
    minCurrency: 120000,
    initialCost: 120000,
    cost: 120000,
    count: 0,
    increase: 260,
    disabled: true,
  },
  {
    name: 'Fish Farm',
    type: 'generator',
    minCurrency: 1400000,
    initialCost: 1400000,
    cost: 1400000,
    count: 0,
    increase: 1400,
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
  const [currencyPerSecond, setCurrencyPerSecond] = useState(0);
  const [upgrades, setUpgrades] = useState(upgradesList);
  const [powerUps, setPowerUps] = useState(powerUpsList);
  const intervalDivider = 4;

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  useInterval(() => {
    setDocumentTitle(`${currency.toFixed(0)} Nigiris - Sushi Clicker`);
  }, 5000);

  useInterval(() => {
    setCurrency(currency + currencyPerSecond / intervalDivider);

    const updatedUpgrades = [...upgrades];
    upgrades.forEach((upgrade, index) => {
      if (upgrade.disabled && currency >= upgrade.minCurrency) {
        updatedUpgrades[index] = {
          ...updatedUpgrades[index],
          disabled: false,
        };
        setUpgrades(updatedUpgrades);
      }
    });
  }, 1000 / intervalDivider);

  const clickedUpgradeHandler = (index) => {
    const cost = upgrades[index].cost;
    if (currency >= cost) {
      const updatedUpgrades = [...upgrades];
      const increase = updatedUpgrades[index].increase;

      updatedUpgrades[index] = {
        ...updatedUpgrades[index],
        count: updatedUpgrades[index].count + 1,
        cost: Math.ceil(
          updatedUpgrades[index].cost +
            updatedUpgrades[index].initialCost * (1.07 ^ updatedUpgrades[index].count),
        ),
        increase: increase * 1.01,
      };

      if (updatedUpgrades[index].type === 'click') {
        setCurrencyPerClick(currencyPerClick + increase);
      } else if (updatedUpgrades[index].type === 'generator') {
        setCurrencyPerSecond(currencyPerSecond + increase);
      }

      setUpgrades(updatedUpgrades);
      setCurrency(currency - cost);
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
