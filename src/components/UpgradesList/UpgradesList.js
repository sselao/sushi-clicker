import React from 'react';
import Upgrade from './Upgrade/Upgrade';

const UpgradesList = (props) =>
  props.upgrades.map((upgrade, index) => (
    <Upgrade
      key={index}
      name={upgrade.name}
      type={upgrade.type}
      cost={upgrade.cost}
      count={upgrade.count}
      increase={upgrade.increase}
      disabled={upgrade.disabled}
      clicked={() => props.upgraded(index)}
    />
  ));

export default UpgradesList;
