// import necessary react testing library helpers here
import jest from 'jest';
// import the Counter component here
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText(/0/i);
  expect(counterMsg).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByRole('button', { name: /[+]/i});
  fireEvent.click(button);
  const counterMsg = screen.getByText(/1/i);
  expect(counterMsg).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByRole('button', { name: /[-]/i});
  fireEvent.click(button);
  const counterMsg = screen.getByText(/-1/i);
  expect(counterMsg).toBeInTheDocument();
});
