import React from 'react';
import { render } from '@testing-library/react';
import ShowSubscribers from './ShowSubscribers';

test('renders learn react link', () => {
  const { getByText } = render(<ShowSubscribers />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
