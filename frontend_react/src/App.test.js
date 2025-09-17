import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Recipe Explorer heading', () => {
  render(<App />);
  expect(screen.getByText(/Recipe Explorer/i)).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/Search recipes/i)).toBeInTheDocument();
});
