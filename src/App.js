import './App.css';
// import Homepage from './Pages/Homepage';
// import Pokedex from './Pages/Pokedex';
// import { useState } from 'react';
import { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import PokeDex from './Pages/PokeDex';

export const AppContext = createContext();

export function useGlobalState() {
  const globalState = useContext(AppContext);

  return globalState;
}

function App() {
  const [pokemonDataPage, setPokemonDataPage] = useState(null);

  const globalState = {
    pokemonDataPage,
    setPokemonDataPage,
  };

  return (
    <div className="App">
      <AppContext.Provider value={globalState}>
        <Router basename="/Pokedex">
          <Switch>
            <Route path="/:id" component={PokeDex} />
            <Route path="/" component={Homepage} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
