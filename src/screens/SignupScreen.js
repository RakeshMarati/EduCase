import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import RadioGroup from '../components/RadioGroup';
import Button from '../components/Button';
import { validateForm } from '../utils/validation';
import { saveUser } from '../utils/userManager';

const SignupScreen = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = () => {
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save user data
    saveUser(formData);

    // ✅ Navigate to profile screen
    navigate('/profile', { state: formData });
  };

  return (
    <div className="screen form-container">
      <div className="form-header">
        <h2 className="form-title">Create your</h2>
        <h2 className="form-subtitle">PopX account</h2>
      </div>

      <FormInput
        label="Full Name"
        placeholder="Marry Doe"
        value={formData.fullName}
        onChange={(value) => handleInputChange('fullName', value)}
        required
        error={errors.fullName}
      />

      <FormInput
        label="Phone number"
        placeholder="1234567890"
        value={formData.phoneNumber}
        onChange={(value) => handleInputChange('phoneNumber', value)}
        required
        error={errors.phoneNumber}
      />

      <FormInput
        label="Email address"
        type="email"
        placeholder="marry@example.com"
        value={formData.email}
        onChange={(value) => handleInputChange('email', value)}
        required
        error={errors.email}
      />

      <FormInput
        label="Password"
        type="password"
        placeholder="********"
        value={formData.password}
        onChange={(value) => handleInputChange('password', value)}
        required
        error={errors.password}
      />

      <FormInput
        label="Company name"
        placeholder="Company Inc."
        value={formData.companyName}
        onChange={(value) => handleInputChange('companyName', value)}
      />

      <RadioGroup
        label="Are you an Agency?"
        options={[
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ]}
        value={formData.isAgency}
        onChange={(value) => handleInputChange('isAgency', value)}
      />

      <div className="form-footer">
        <Button onClick={handleSubmit}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default SignupScreen;
