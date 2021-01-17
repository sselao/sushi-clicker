import React, { Component } from 'react';
import Upgrade from './Upgrade/Upgrade';

class UpgradesList extends Component {
  render() {
    return this.props.upgrades.map((upgrade, index) => (
      <Upgrade
        key={index}
        name={upgrade.name}
        type={upgrade.type}
        cost={upgrade.cost}
        count={upgrade.count}
        increase={upgrade.increase}
        disabled={upgrade.disabled}
        clicked={() => this.props.upgraded(index)}
      />
    ));
  }
}

export default UpgradesList;
