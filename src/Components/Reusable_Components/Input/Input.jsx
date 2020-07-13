import React from 'react';
import css from './Input.module.css';

const Input = ({ type, name, value, id, minLength, maxLength, placeholder, onChange }) => {
  return (
    <input
      className={`${css.input}`}
      type={type}
      name={name}
      value={value}
      id={id}
      min={minLength}
      max={maxLength}
      placeholder={placeholder}
      required
      onChange={onChange}
    />
  );
};

export default Input;