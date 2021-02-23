import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders list of buildings text', () => {
    render(<App />);
    const buildings = screen.getByText('List of Buildings');
    expect(buildings).toBeInTheDocument();
  });

  test('renders with a single click', () => {
    render(<App />);
    const clicker = screen.getByAltText('clicker');
    const currencyText = screen.getAllByText('0 nigiri')[0];
    fireEvent.click(clicker);
    expect(currencyText).toHaveTextContent('1 nigiri');
  });

  test('able to make a purchase', () => {
    render(<App />);
    const clicker = screen.getByAltText('clicker');
    const currencyText = screen.getAllByText('0 nigiri')[0];
    const buildingToPurchase = screen.getByText('Cursor');

    // Click. Expect currency to go from 0 => 1
    fireEvent.click(clicker);
    expect(currencyText).toHaveTextContent('1 nigiri');

    // Purchase a building worth 1 currency. Expect currency to go from 1 => 0
    fireEvent.click(buildingToPurchase);
    expect(currencyText).toHaveTextContent('0 nigiri');
  });
});
