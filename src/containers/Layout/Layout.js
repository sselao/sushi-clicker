import React, { useEffect, useState } from 'react';
import Clicker from '../../components/Clicker/Clicker';
import PowerUpsList from '../../components/PowerUpsList/PowerUpsList';
import Upgrades from '../Upgrades/Upgrades';
import useInterval from '../../hooks/useInterval';
import styles from './Layout.module.css';
import { getInitialState } from '../../utilities/utilities';
import ResetButton from '../../components/ResetButton/ResetButton';

const initialState = getInitialState();

const Layout = () => {
  const [documentTitle, setDocumentTitle] = useState(initialState.title);
  const [currency, setCurrency] = useState(initialState.currency);
  const [currencyPerClick, setCurrencyPerClick] = useState(initialState.currencyPerClick);
  const [currencyPerSecond, setCurrencyPerSecond] = useState(initialState.currencyPerSecond);
  const [upgrades, setUpgrades] = useState(initialState.upgrades);
  const [powerUps, setPowerUps] = useState(initialState.powerUps);
  const intervalDivider = 4;

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  // Auto-save
  useInterval(() => {
    const saveData = {
      currency: currency,
      currencyPerClick: currencyPerClick,
      currencyPerSecond: currencyPerSecond,
      upgrades: upgrades,
      powerUps: powerUps,
    };
    localStorage.setItem('savedGame', JSON.stringify(saveData));
  }, 3000);

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
        <Upgrades upgrades={upgrades} currency={currency} upgraded={clickedUpgradeHandler} />
        <ResetButton />
      </div>
    </div>
  );
};

export default Layout;
