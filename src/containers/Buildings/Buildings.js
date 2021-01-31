import React from 'react';
import BuildingsList from '../../components/BuildingsList/BuildingsList';

const Buildings = (props) => (
  <>
    <h1>List of Buildings</h1>
    <BuildingsList buildings={props.buildings} currency={props.currency} purchased={props.purchased} />
  </>
);

export default Buildings;
