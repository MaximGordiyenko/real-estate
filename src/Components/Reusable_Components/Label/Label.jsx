import React from 'react';
import css from './Label.module.css';

const Label = ({htmlFor, text}) => (
  <label
    className={`${css.label}`}
    htmlFor={htmlFor}
  >
    {text}
  </label>
);

export default Label;
