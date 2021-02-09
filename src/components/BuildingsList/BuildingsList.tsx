import React from 'react';
import Building from './Building/Building';
import { building } from '../../utilities/utilities';

type BuildingsListProps = {
  buildings: building[];
  purchased: Function;
  currency: number;
};

const BuildingsList = ({ buildings, purchased, currency }: BuildingsListProps) => (
  <>
    {buildings.map((buildings, index) => (
      <Building
        key={index}
        name={buildings.name}
        type={buildings.type}
        cost={buildings.cost}
        currency={currency}
        count={buildings.count}
        increase={buildings.increase}
        disabled={buildings.disabled}
        clicked={() => purchased(index)}
      />
    ))}
  </>
);

export default BuildingsList;
