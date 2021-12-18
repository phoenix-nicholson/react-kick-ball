import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Team from '../../../views/Teams/Team';

test('renders title message', () => {
  const container = render(
    <MemoryRouter>
      <Team match={{ params: { id: '1' } }} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
