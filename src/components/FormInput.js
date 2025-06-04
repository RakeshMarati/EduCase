import React from 'react';

const FormInput = ({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  required = false,
  error = null,
  ...props 
}) => {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}{required && '*'}
      </label>
      <input
        type={type}
        className={`form-input ${error ? 'error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;