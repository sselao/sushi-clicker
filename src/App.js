import React, { Component } from 'react';
import './App.css';
import Clicker from './components/Clicker/Clicker';
import Upgrades from './containers/Upgrades/Upgrades';

class App extends Component {
  // FIXME: Temporary leaving it in App
  state = {
    currency: 1,
    currencyPerSecond: 1000,
    upgrades: [
      {
        name: 'Upgrade 1',
        initialCost: 1,
        cost: 1,
        count: 0,
        cpsIncrease: 1,
      },
      {
        name: 'Upgrade 2',
        initialCost: 2,
        cost: 2,
        count: 0,
        cpsIncrease: 1,
      },
      {
        name: 'Upgrade 3',
        initialCost: 5,
        cost: 5,
        count: 0,
        cpsIncrease: 5,
      },
      {
        name: 'Upgrade 4',
        initialCost: 10,
        cost: 10,
        count: 0,
        cpsIncrease: 10,
        disabled: true,
      },
    ],
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({ currency: state.currency + state.currencyPerSecond }));
    }, 1000);
  }

  clickHandler = () => {
    this.setState((state) => ({ currency: state.currency + 1 }));
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

        return {
          currency: state.currency - cost,
          currencyPerSecond: state.currencyPerSecond + updatedUpgrades[index].cpsIncrease,
          upgrades: updatedUpgrades,
        };
      }
    });
  };

  render() {
    return (
      <div className='App'>
        <div id='leftSection'>
          <Clicker
            currency={this.state.currency}
            currencyPerSecond={this.state.currencyPerSecond}
            clicked={this.clickHandler}
          />
        </div>
        <div id='rightSection'>
          <Upgrades upgrades={this.state.upgrades} upgraded={this.clickedUpgradeHandler} />
        </div>
      </div>
    );
  }
}

export default App;
