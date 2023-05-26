import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ShowProvince from '../components/ShowProvince';

describe('Home Page', () => {
  test('should render the home page with the correct data', () => {
    const province = {
      ID: 1234,
      EnglishName: 'Sindh',
      Level: 1,
    };
    render(
      <BrowserRouter>
        <ShowProvince province={province} />
      </BrowserRouter>,
    );
    const textElement = screen.getByText(/Sindh/i);
    expect(textElement).toBeInTheDocument();
  });
});
