import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza sistema RH', () => {
  render(<App />);
  const titulo = screen.getByText(/Sistema RH/i);
  expect(titulo).toBeInTheDocument();
});