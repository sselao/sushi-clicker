export const getInitialState = () => {
  const buildingsList = [
    {
      name: 'Cursor',
      type: 'click',
      minCurrency: 0,
      initialCost: 1,
      cost: 1,
      count: 0,
      increase: 1,
      multiplier: 1,
    },
    {
      name: 'Apprentice',
      type: 'generator',
      minCurrency: 50,
      initialCost: 50,
      cost: 50,
      count: 0,
      increase: 1,
      multiplier: 1,
    },
    {
      name: 'Itamae',
      type: 'generator',
      minCurrency: 1000,
      initialCost: 1000,
      cost: 1000,
      count: 0,
      increase: 8,
      disabled: true,
      multiplier: 1,
    },
    {
      name: 'Restaurant',
      type: 'generator',
      minCurrency: 12000,
      initialCost: 12000,
      cost: 12000,
      count: 0,
      increase: 47,
      disabled: true,
      multiplier: 1,
    },
    {
      name: 'Fisherman',
      type: 'generator',
      minCurrency: 120000,
      initialCost: 120000,
      cost: 120000,
      count: 0,
      increase: 260,
      disabled: true,
      multiplier: 1,
    },
    {
      name: 'Fish Farm',
      type: 'generator',
      minCurrency: 1400000,
      initialCost: 1400000,
      cost: 1400000,
      count: 0,
      increase: 1400,
      disabled: true,
      multiplier: 1,
    },
  ];

  const powerUpsList = [
    {
      name: '2x Click',
      type: 'click',
      cost: 100,
      multiplier: 2,
      enabled: false,
    },
    {
      name: '2x Click',
      type: 'click',
      cost: 500,
      multiplier: 2,
      enabled: false,
    },
    {
      name: '2x Click',
      type: 'click',
      cost: 10000,
      multiplier: 2,
      enabled: false,
    },
  ];

  let initialState = {
    title: 'Sushi Clicker',
    currency: 1,
    currencyPerClick: 1,
    currencyPerSecond: 0,
    buildings: buildingsList,
    powerUps: powerUpsList,
  };

  const savedData = localStorage.getItem('savedGame');
  if (savedData) {
    initialState = {
      ...initialState,
      ...JSON.parse(savedData),
    };
  }

  return initialState;
};
