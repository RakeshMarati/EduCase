// Simple user management utilities
export const saveUser = (userData) => {
  try {
    const users = getUsers();
    users[userData.email] = userData;
    // In a real app, you'd store this in memory or use React state
    // localStorage is not available in Claude artifacts
    return true;
  } catch (error) {
    console.error('Error saving user:', error);
    return false;
  }
};

export const getUser = (email) => {
  try {
    const users = getUsers();
    return users[email] || null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
};

export const getUsers = () => {
  // In a real app, this would be from localStorage or an API
  // For demo purposes, return empty object
  return {};
};

export const deleteUser = (email) => {
  try {
    const users = getUsers();
    delete users[email];
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
};