import { render, within } from '@testing-library/react';
import Building, { BuildingProps } from './Building';

const building: BuildingProps = {
  name: 'Building 1',
  cost: 10,
  count: 1,
  currency: 100,
  increase: 10,
  type: 'generator',
  clicked: () => {},
  disabled: false,
};

describe('Building', () => {
  test('renders properly', () => {
    const { baseElement } = render(<Building {...building} />);
    expect(within(baseElement as HTMLElement).getByText('Building 1')).toBeTruthy();
  });

  test('renders an available building', () => {
    const { container } = render(<Building {...building} />);
    const classes = container!.firstElementChild!.className;
    expect(classes).toContain('Available');
  });

  test('renders a disabled building', () => {
    const props: BuildingProps = { ...building, disabled: true };
    const { container } = render(<Building {...props} />);
    const classes = container!.firstElementChild!.className;
    expect(classes).toContain('Disabled');
  });
});
