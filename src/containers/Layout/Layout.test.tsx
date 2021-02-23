import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  test('renders the document title', () => {
    render(<Layout />);
    expect(document.title).toBe('Sushi Clicker');
  });
});
