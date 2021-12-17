import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import Teams from './views/Teams/Teams';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/teams">List of Teams</NavLink>
      </header>

      <Switch>
        <Route exact path="/teams" component={Teams} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
