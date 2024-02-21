/* eslint-disable react/prop-types */

import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className="w-full">
      {label && (
        <label className="block mt-2" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {error && <div className="text-red-500 text-sm">{error?.message}</div>}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);
  if ("id" in child.props) {
    return child.props.id;
  }
};

export default Field;
