import { render, screen } from '@testing-library/react';
import App from './App';

it('should render password component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Password Component/i);
  expect(headerElement).toBeInTheDocument();
});
