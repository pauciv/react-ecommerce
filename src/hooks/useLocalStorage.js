import { useEffect, useState } from 'react';

export const useLocalStorage = (key) => {
  const getData = () => {
    const json = localStorage.getItem(key);
    if (json) {
      return JSON.parse(json);
    } else {
      return [];
    }
  };
  const [state, setState] = useState(() => getData());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    console.log(`${key} = `, state);
  }, [key, state]);

  return [state, setState];
};
