import React from 'react';


const Input = ({icon, title, name, value, onChange}) => {

  return (
    <div className="input-box">
      <label>
        {icon ? icon : null}
        <input
          type="checkbox"
          name={name}
          onChange={onChange}
          value={value}
        />
        <span>{title}</span>
      </label>
    </div>
  )
};

export default Input;