import { render, screen } from '@testing-library/react';

import { Greet } from './Greet';

// test, expect, are methods from Jest that CRA globaly provides in every test
test('Greet renders correctly', () => {
  render(<Greet />);

  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet name="Alin" />);

  const textElement = screen.getByText(/hello alin/i);
  expect(textElement).toBeInTheDocument();
});
