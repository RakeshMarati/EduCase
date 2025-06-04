export const validateForm = (formData) => {
  const errors = {};

  // Full Name validation
  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  // Phone validation
  if (!formData.phoneNumber || formData.phoneNumber.trim().length < 10) {
    errors.phoneNumber = 'Phone number must be at least 10 digits';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Password validation
  if (!formData.password || formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};