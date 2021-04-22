import './App.css';
import Homepage from './Pages/Homepage';
import Pokedex from './Pages/Pokedex';
import { useState } from 'react';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      {currentPage === 'home' && <Homepage goToPokedex={() => setCurrentPage('pokedex')} />}
      {currentPage === 'pokedex' && <Pokedex />}
    </div>
  );
}

export default App;
