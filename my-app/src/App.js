import './App.css';
import Navbar from './Components/Navbar';
import PokeScreen from './Components/PokeScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="poke-screen__wrapper">
        <PokeScreen />
      </section>
    </div>
  );
}

export default App;
