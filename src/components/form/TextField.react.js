// @flow
import React from 'react';

type Props = {
  placeholder?: string,
  value: string,
  label: string,
  name: string,
  onChange: Function,
  onSubmit: Function,
  inputRef?: Function
};

const TextField = (props: Props) => {
  const { name, label, placeholder, value, onChange, onSubmit, inputRef } = props;

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
        ref={inputRef}
      />
    </label>
  );
};

export default TextField;
