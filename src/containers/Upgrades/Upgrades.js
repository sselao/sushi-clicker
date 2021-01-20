import React from 'react';
import UpgradesList from '../../components/UpgradesList/UpgradesList';

const Upgrades = (props) => (
  <div>
    <h1>List of Upgrades</h1>
    <UpgradesList upgrades={props.upgrades} upgraded={props.upgraded} />
  </div>
);

export default Upgrades;
