import { render } from '@testing-library/react';
import Players from './Players';

test('renders all players', () => {
  const container = render(<Players />);
  expect(container).toMatchSnapshot();
});
