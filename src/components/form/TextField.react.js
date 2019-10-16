// @flow
import React from 'react';

type Props = {
  placeholder?: string,
  value: string,
  label: string,
  name: string,
  onChange: Function,
  onSubmit: Function
};

const TextField = (props: Props) => {
  const { name, label, placeholder, value, onChange, onSubmit } = props;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e.target.value);
    }
  };

  return (
    <label className="field">
      <div className="field__label">{label}</div>
      <input 
        type="text" 
        className="field__input" 
        placeholder={placeholder} 
        name={name}
        value={value || ''} 
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </label>
  );
};

export default TextField;
