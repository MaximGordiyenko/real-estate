import React from 'react';
import Input from "../Input/Input";
import Label from "../Label/Label";

const Form = ({action, className, onSubmit}) => {
  return (
    <form
      className={className}
      action={action}
      onSubmit={onSubmit}>
    </form>
  )
};

export default Form;