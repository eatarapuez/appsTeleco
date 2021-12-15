import React from "react";

import "./style.css";

export const FormField = ({
  name = "",
  value = "",
  onChange = () => {},
  errors = null,
  label = "",
}) => {
  return (
    <div className="form-field-container" >
      <label htmlFor={name}>
        <span>Ingresa tu {label}</span>
        <input name={name} type="text" value={value} onChange={onChange} />
      </label>
      {errors && <div className="erros-text" >{errors}</div>}
    </div>
  );
};
