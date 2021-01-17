import React, { Component } from 'react';
import UpgradesList from '../../components/UpgradesList/UpgradesList';

class Upgrades extends Component {
  render() {
    return (
      <div>
        <h1>List of Upgrades</h1>
        <UpgradesList upgrades={this.props.upgrades} upgraded={this.props.upgraded} />
      </div>
    );
  }
}

export default Upgrades;
