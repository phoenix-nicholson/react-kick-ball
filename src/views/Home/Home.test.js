import { render } from '@testing-library/react';
import Home from './Home';

test('renders title message', () => {
  const container = render(<Home />);
  expect(container).toMatchSnapshot();
});
