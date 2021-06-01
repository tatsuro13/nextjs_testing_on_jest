import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index';

it('Hello Next.jsは表示されている', () => {
  render(<Home />);
  //   screen.debug();
  expect(screen.getByText('Welcome to Next.js')).toBeInTheDocument();
});
