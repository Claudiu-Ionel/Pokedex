import './App.css';
// import Homepage from './Pages/Homepage';
// import Pokedex from './Pages/Pokedex';
// import { useState } from 'react';
import { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonData from './Components/PokemonData';
import PokeScreen from './Components/PokeScreen';

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
        <Router>
          <Switch>
            <Route exact path="/" component={PokemonData} />
            <Route exact path="/:id" component={PokeScreen} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
