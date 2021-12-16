import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <NavLink>Teams</NavLink>
        <NavLink>Players</NavLink>
      </header>
    </BrowserRouter>
  );
}

export default App;
