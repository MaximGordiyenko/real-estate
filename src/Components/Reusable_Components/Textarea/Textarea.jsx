import React from 'react';

const Textarea = ({id, name, row, col, placeholder, onChange, text}) => (
  <textarea id={id} name={name} rows={row} cols={col} placeholder={placeholder} onChange={onChange}>
    {text}
</textarea>
);

export default Textarea;