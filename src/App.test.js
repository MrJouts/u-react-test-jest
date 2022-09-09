import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('disable button when checkbox is checked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});

test('re-enable button when checkbox is checked for second time', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button');
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('turn button background to gray when checkbox is checked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button');
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray'});
})

test('turn button background to red when checkbox is checked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button');
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'red'});
})

test('click and turn button background to gray when checkbox is checked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button');
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray'});
})

test('click and turn button background to blue when checkbox is checked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button');
  fireEvent.click(button);
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'blue'});
})