export const getInitialState = () => {
  const upgradesList = [
    {
      name: 'Cursor',
      type: 'click',
      minCurrency: 0,
      initialCost: 1,
      cost: 1,
      count: 0,
      increase: 1,
    },
    {
      name: 'Apprentice',
      type: 'generator',
      minCurrency: 50,
      initialCost: 50,
      cost: 50,
      count: 0,
      increase: 1,
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
    },
  ];

  const powerUpsList = [
    {
      name: '10x Click',
      type: 'click',
      cost: 100,
      multiplier: 10,
      enabled: false,
    },
    {
      name: '100x Click',
      type: 'click',
      cost: 100,
      multiplier: 100,
      enabled: false,
    },
    {
      name: '10x CPS',
      type: 'generator',
      cost: 200,
      multiplier: 10,
      enabled: false,
    },
    {
      name: '100x CPS',
      type: 'generator',
      cost: 300,
      multiplier: 100,
      enabled: false,
    },
  ];

  let initialState = {
    title: 'Sushi Clicker',
    currency: 1,
    currencyPerClick: 1,
    currencyPerSecond: 0,
    upgrades: upgradesList,
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
