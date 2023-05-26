import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ShowCity from '../components/ShowCity';

describe('City Page', () => {
  test('should render the city page with the correct data', () => {
    const city = {
      LocalizedName: 'Sargodha',
      GeoPosition: {
        Latitude: 23.23,
        Longitude: 33.33,
      },
    };
    render(
      <BrowserRouter>
        <ShowCity city={city} />
      </BrowserRouter>,
    );
    const textElement = screen.getByText(/Sargodha/i);
    expect(textElement).toBeInTheDocument();
  });
});
