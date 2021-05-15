import PropTypes from 'prop-types';

const IsLoading = ({ imgSrc }) => {
  return (
    <div className="isLoading-wrapper">
      <span>Loading...</span>
      <img className="surprised-pikachu" src={imgSrc} alt="Very surprised pikachu" />
    </div>
  );
};

export default IsLoading;

IsLoading.propTypes = {
  imgSrc: PropTypes.string,
};
