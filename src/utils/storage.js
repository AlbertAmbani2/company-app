export const getData = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
