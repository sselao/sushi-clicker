import BuildingsList from '../../components/BuildingsList/BuildingsList';
import { building } from '../../utilities/utilities';

type BuildingsProps = {
  buildings: building[];
  currency: number;
  purchased: boolean;
};

const Buildings = ({ buildings, currency, purchased }: BuildingsProps) => (
  <>
    <h1>List of Buildings</h1>
    <BuildingsList buildings={buildings} currency={currency} purchased={purchased} />
  </>
);

export default Buildings;
