import { render, within } from '@testing-library/react';
import Currency from './Currency';

describe('Currency', () => {
  test('renders singular form', () => {
    const { baseElement } = render(<Currency value={1} />);
    expect(within(baseElement as HTMLElement).getByText('1 nigiri')).toBeTruthy();
  });

  test('renders plural form', () => {
    const { baseElement } = render(<Currency value={99} />);
    expect(within(baseElement as HTMLElement).getByText('99 nigiris')).toBeTruthy();
  });
});
