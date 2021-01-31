import React from 'react';
import Upgrade from './Upgrade/Upgrade';

const UpgradesList = ({ upgrades, upgraded, currency }) =>
  upgrades.map((upgrade, index) => (
    <Upgrade
      key={index}
      name={upgrade.name}
      type={upgrade.type}
      cost={upgrade.cost}
      currency={currency}
      count={upgrade.count}
      increase={upgrade.increase}
      disabled={upgrade.disabled}
      clicked={() => upgraded(index)}
    />
  ));

export default UpgradesList;
