import React, { useEffect, useState } from 'react';
import Clicker from '../../components/Clicker/Clicker';
import PowerUpsList from '../../components/PowerUpsList/PowerUpsList';
import Buildings from '../Buildings/Buildings';
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
  const [buildings, setBuildings] = useState(initialState.buildings);
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
      buildings: buildings,
      powerUps: powerUps,
    };
    localStorage.setItem('savedGame', JSON.stringify(saveData));
  }, 3000);

  useInterval(() => {
    setDocumentTitle(`${currency.toFixed(0)} Nigiris - Sushi Clicker`);
  }, 5000);

  useInterval(() => {
    setCurrency(currency + currencyPerSecond / intervalDivider);

    const updatedBuildings = [...buildings];
    buildings.forEach((building, index) => {
      if (building.disabled && currency >= building.minCurrency) {
        updatedBuildings[index] = {
          ...updatedBuildings[index],
          disabled: false,
        };
        setBuildings(updatedBuildings);
      }
    });
  }, 1000 / intervalDivider);

  const clickedBuildingHandler = (index) => {
    const cost = buildings[index].cost;
    if (currency >= cost) {
      const updatedBuildings = [...buildings];
      const increase = updatedBuildings[index].increase;

      updatedBuildings[index] = {
        ...updatedBuildings[index],
        count: updatedBuildings[index].count + 1,
        cost: Math.ceil(
          updatedBuildings[index].cost +
            updatedBuildings[index].initialCost * (1.07 ^ updatedBuildings[index].count),
        ),
        increase: increase * 1.01,
      };

      if (updatedBuildings[index].type === 'click') {
        setCurrencyPerClick(currencyPerClick + increase);
      } else if (updatedBuildings[index].type === 'generator') {
        setCurrencyPerSecond(currencyPerSecond + increase);
      }

      setBuildings(updatedBuildings);
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
        <Buildings buildings={buildings} currency={currency} purchased={clickedBuildingHandler} />
        <ResetButton />
      </div>
    </div>
  );
};

export default Layout;
