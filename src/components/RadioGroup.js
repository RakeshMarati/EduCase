import React from 'react';

const RadioGroup = ({ label, options, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="radio-group">
        {options.map((option) => (
          <div 
            key={option.value} 
            className="radio-option" 
            onClick={() => onChange(option.value)}
          >
            <div className={`radio-input ${value === option.value ? 'checked' : ''}`}>
            </div>
            <span className="radio-label">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;