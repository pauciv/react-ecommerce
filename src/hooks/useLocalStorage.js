import { useEffect, useState } from 'react';

export const useLocalStorage = (storageKey) => {
  const getData = () => {
    const json = localStorage.getItem(storageKey);
    if (json) {
      return JSON.parse(json);
    } else {
      return [];
    }
  };
  const [data, setData] = useState(() => getData());

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [storageKey, data]);

  return [data, setData];
};
