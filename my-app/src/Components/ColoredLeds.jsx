import React from 'react';

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
