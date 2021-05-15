import PropTypes from 'prop-types';
import classNamesHelper from 'classnames';
import './PokemonCard.css';

export default function PokemonCard({ item, style }) {
  return (
    <div
      className={classNamesHelper(
        'pokemon-card',
        item.types[0].type.name && `${item.types[0].type.name}`,
      )}
      key={item.id}
      style={style}
    >
      <div className="pokemon-id">#{item.id}</div>
      <div className="pokemon-img-wrapper">
        <img
          className="pokemon-img"
          src={item.sprites.other['official-artwork']['front_default']}
          alt={item.name}
        />
      </div>

      <div className="pokemon-name">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>
      <div>Type: {item.types[0].type.name}</div>
    </div>
  );
}

PokemonCard.propTypes = {
  item: PropTypes.object,
  style: PropTypes.object,
};
