import { render, within } from '@testing-library/react';
import ClickGenerator from './ClickGenerator';

describe('ClickGenerator', () => {
  test('renders and shows correct currency per second', () => {
    const { baseElement } = render(<ClickGenerator currencyPerSecond={10} />);
    expect(within(baseElement as HTMLElement).getByText('10 nigiris')).toBeTruthy();
  });
});
