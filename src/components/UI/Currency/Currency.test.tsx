import { render } from '@testing-library/react';
import Currency from './Currency';

describe('Currency', () => {
  test('renders plural form', () => {
    const { getByText } = render(<Currency value={999} />);
    expect(getByText('999 nigiris')).toBeInTheDocument();
  });
});
