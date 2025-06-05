// src/utils/userManager.js

const STORAGE_KEY = 'popx_users';

export const getUsers = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

export const saveUser = (userData) => {
  try {
    const users = getUsers();
    users[userData.email] = userData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
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

export const deleteUser = (email) => {
  try {
    const users = getUsers();
    delete users[email];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
};
