const PokeButton = ({ onClick, imgSrc }) => {
  return (
    <button className="pokeButton" onClick={onClick}>
      <img className="pokeButton-image" src={imgSrc} alt="" />
    </button>
  );
};

export default PokeButton;
