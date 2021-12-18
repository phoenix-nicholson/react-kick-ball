import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Player from '../../views/Players/Player';

test('renders title message', () => {
  const container = render(
    <MemoryRouter>
      <Player match={{ params: { id: '1' } }} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
