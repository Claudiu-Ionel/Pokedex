import SideBar from '../SideBar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>PokeDex</div>
      <Input />

      <SideBar />
    </nav>
  );
};

const Input = () => {
  return (
    <div className="searchArea">
      <label htmlFor="pokemonSearch">Search: </label>
      <input type="text" id="pokemonSearch" />
      <button>Search</button>
    </div>
  );
};
export default Navbar;
