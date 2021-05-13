// import SideBar from '../SideBar';
import PropTypes from 'prop-types';

import './searchBar.css';
const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <form className="search-bar-wrapper" onSubmit={onSubmit} onChange={onChange}>
      <div className="logo">PokeDex</div>
      <div className="searchArea">
        <label htmlFor="pokemonSearch">Search: </label>
        <input type="text" id="pokemonSearch" autoComplete="off" name="search" />
        {/* keep this here if you want to use a button for the form
         */}
        {/* <button type="submit">Search</button> */}
      </div>
      {/* this is an unfinished idea that should have been use in order to make the navigation in the website easier. */}
      {/* <SideBar /> */}
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
