import PropTypes from 'prop-types';

const ColoredLed = ({ w, h, bcolor, border, radius, margin }) => {
  return (
    <div
      style={{
        width: w,
        height: h,
        backgroundColor: bcolor,
        border: border,
        borderRadius: radius,
        margin: margin,
      }}
    ></div>
  );
};

export default ColoredLed;

ColoredLed.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  bcolor: PropTypes.string,
  border: PropTypes.string,
  radius: PropTypes.string,
  margin: PropTypes.string,
};
