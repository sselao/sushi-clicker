import React from 'react';
import UpgradesList from '../../components/UpgradesList/UpgradesList';

const Upgrades = (props) => (
  <>
    <h1>List of Upgrades</h1>
    <UpgradesList upgrades={props.upgrades} upgraded={props.upgraded} />
  </>
);

export default Upgrades;
