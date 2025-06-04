import React from 'react';
import "./Button.css"

const Button = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <button
      className={`${baseClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;