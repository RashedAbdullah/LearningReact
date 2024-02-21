/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const NumberInput = ({ value, onChangeValue, ...rest }) => {
  return (
    <input
      type="number"
      min={0}
      onChange={(e) => onChangeValue(e.target.valueAsNumber || 0)}
      value={value}
      {...rest}
    />
  );
};

export default NumberInput;
