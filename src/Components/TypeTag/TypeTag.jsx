import classNamesHelper from 'classnames';
import './TypeTags.css';
import PropTypes from 'prop-types';

const TypeTag = ({ type }) => {
  return <span className={classNamesHelper('type', type && `${type}`)}>{type}</span>;
};

export default TypeTag;

TypeTag.propTypes = {
  type: PropTypes.string,
};
