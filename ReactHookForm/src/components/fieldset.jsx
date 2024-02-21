/* eslint-disable react/prop-types */

const FieldSet = ({ label, children }) => {
  return (
    <fieldset className="m-2 border-none">
      {label && <legend className="text-3xl text-center mb-2">{label}</legend>}
      <div className="">{children}</div>
    </fieldset>
  );
};

export default FieldSet;
