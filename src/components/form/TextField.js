// @flow
import React from 'react';

type Props = {
  field: Object,
  value: String,
  onChange: Function
};

const TextField = (props: Props) => {
  const { field, value, onChange } = props;
  return (
    <label>
      <input 
        type="text" 
        className="text-input" 
        placeholder={field.placeholder} 
        name={field.label}
        value={value || ''} 
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
};

export default TextField;
