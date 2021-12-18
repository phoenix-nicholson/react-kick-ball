import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import Teams from './views/Teams/Teams';
import Team from './views/Teams/Team';
import Players from './views/Players/Players';
import Player from './views/Players/Player';
import Home from './views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <header>
        <p>
          <NavLink to="/home">Home</NavLink>
        </p>
        <p>
          <NavLink to="/teams">List of Teams</NavLink>
        </p>
        <p>
          <NavLink to="/players">Players</NavLink>
        </p>
      </header>

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/teams/:id" component={Team} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/players/:id" component={Player} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
