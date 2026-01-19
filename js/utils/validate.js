export const isEmpty = (value) => !value || value.trim() === "";

export const isEmail = (value) => {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};
