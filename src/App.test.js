// App.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders App component', async () => {
  render(<App />);

  // Check if the component renders without crashing
  const titleElement = screen.getByText(/Country Information App/i);
  expect(titleElement).toBeTruthy();

  // Mock the fetch function to simulate API calls
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });

  // Simulate user input and search
  const inputElement = screen.getByPlaceholderText(/Enter country name/i);
  fireEvent.change(inputElement, { target: { value: 'test' } });
  const searchButton = screen.getByText(/Search/i);
  fireEvent.click(searchButton);

  // Wait for API call to complete and check if the random countries are displayed
  // await waitFor(() => {
  //   const randomCountryElement = screen.getByText(/Random Country Name/i);
  //   expect(randomCountryElement).toBeTruthy();
  // });

  // Simulate clicking on a random country
//   const randomCountry = screen.getByText(/Random Country Name/i);
//   fireEvent.click(randomCountry);

  // Wait for API call to complete and check if country details are displayed
//   await waitFor(() => {
//     const countryDetails = screen.getByText(/Country Details/i);
//     expect(countryDetails).toBeTruthy();
//   });
});
