export const getLocalStorage = (key: string): string | null => localStorage.getItem(key);

export const setLocalStorage = (key: string, item: string): void => {
  localStorage.setItem(key, item);
};
