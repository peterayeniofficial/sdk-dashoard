import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Installed Button', () => {
  render(<App />);
  const buttonElement = screen.getAllByRole('tab')[0];
  console.log(buttonElement);

  expect(buttonElement).toHaveTextContent('Installed');
});

test('renders Uninstalled Button', () => {
  render(<App />);
  const buttonElement = screen.getAllByRole('tab')[1];
  console.log(buttonElement);

  expect(buttonElement).toHaveTextContent('Uninstalled');
});
