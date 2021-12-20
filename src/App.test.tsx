import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Приложение для разработки редактора статей/i,
  );
  expect(linkElement).toBeInTheDocument();
});
