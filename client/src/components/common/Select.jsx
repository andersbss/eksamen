import React from 'react';

const Select = ({ name, onChange, children }) => (
  <select name={name} required onChange={onChange}>
    {children}
  </select>
);

export default Select;
