import { render } from '@testing-library/react';
import Teams from './Teams';

test('renders all teams', () => {
  const container = render(<Teams />);
  expect(container).toMatchSnapshot();
});
