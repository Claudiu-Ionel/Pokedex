import './App.css';
// import Homepage from './Pages/Homepage';
// import Pokedex from './Pages/Pokedex';
// import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonData from './Components/PokemonData';
import PokeScreen from './Components/PokeScreen';
function App() {
  // const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PokemonData} />
          <Route exact path="/:id" component={PokeScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
