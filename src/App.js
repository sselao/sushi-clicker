import React, { Component } from 'react';
import './App.css';
import Clicker from './components/Clicker/Clicker';
import PowerUpsList from './components/PowerUpsList/PowerUpsList';
import Upgrades from './containers/Upgrades/Upgrades';

class App extends Component {
  // FIXME: Temporary leaving it in App
  state = {
    currency: 1,
    currencyPerClick: 1,
    currencyPerSecond: 100,
    upgrades: [
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
    ],
    powerUps: [
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
    ],
  };

  componentDidMount() {
    document.title = 'Sushi Clicker';
    setInterval(() => {
      this.setState((state) => ({ currency: state.currency + state.currencyPerSecond }));
    }, 1000);
  }

  clickHandler = () => {
    this.setState((state) => ({ currency: state.currency + state.currencyPerClick }));
  };

  clickedUpgradeHandler = (index) => {
    this.setState((state) => {
      const cost = state.upgrades[index].cost;
      if (state.currency >= cost) {
        const updatedUpgrades = [...state.upgrades];
        updatedUpgrades[index] = {
          ...updatedUpgrades[index],
          count: updatedUpgrades[index].count + 1,
          cost: Math.ceil(
            updatedUpgrades[index].cost +
              updatedUpgrades[index].initialCost * (1.07 ^ updatedUpgrades[index].count),
          ),
        };

        const newState = {
          currency: state.currency - cost,
          upgrades: updatedUpgrades,
        };

        if (updatedUpgrades[index].type === 'click') {
          newState.currencyPerClick = state.currencyPerClick + updatedUpgrades[index].increase;
        } else if (updatedUpgrades[index].type === 'generator') {
          newState.currencyPerSecond = state.currencyPerSecond + updatedUpgrades[index].increase;
        }

        return newState;
      }
    });
  };

  clickedPowerUpHandler = (index) => {
    if (!this.state.powerUps[index].enabled) {
      this.setState((state) => {
        const cost = state.powerUps[index].cost;
        if (state.currency >= cost) {
          const updatedPowerUps = [...state.powerUps];
          updatedPowerUps[index] = {
            ...updatedPowerUps[index],
            enabled: true,
          };

          const newState = {
            currency: state.currency - cost,
            powerUps: updatedPowerUps,
          };

          if (updatedPowerUps[index].type === 'click') {
            newState.currencyPerClick = state.currencyPerClick * updatedPowerUps[index].multiplier;
          } else if (updatedPowerUps[index].type === 'generator') {
            newState.currencyPerSecond =
              state.currencyPerSecond * updatedPowerUps[index].multiplier;
          }

          return newState;
        }
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <div id='leftSection'>
          <Clicker
            currency={this.state.currency}
            currencyPerClick={this.state.currencyPerClick}
            currencyPerSecond={this.state.currencyPerSecond}
            clicked={this.clickHandler}
          />
          <PowerUpsList powerUps={this.state.powerUps} clicked={this.clickedPowerUpHandler} />
        </div>
        <div id='rightSection'>
          <Upgrades upgrades={this.state.upgrades} upgraded={this.clickedUpgradeHandler} />
        </div>
      </div>
    );
  }
}

export default App;
