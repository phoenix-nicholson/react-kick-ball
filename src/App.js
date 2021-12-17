import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import Teams from './views/Teams/Teams';
import Team from './views/Teams/Team';
import Players from './views/Players/Players';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/teams">List of Teams</NavLink>
        <NavLink to="/players">Players</NavLink>
      </header>

      <Switch>
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/teams/:id" component={Team} />
        <Route exact path="/players" component={Players} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
