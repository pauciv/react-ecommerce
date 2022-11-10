import { createContext, useContext, useState } from 'react';

export const dataContext = createContext();

export const DataContextProvider = (props) => {
  // todos los componentes tienen acceso a este valor
  //   const contextData = 58;
  const [contextData, setcontextData] = useState(9);

  //   const value = contextData;
  const value = { contextData, setcontextData };

  return (
    <>
      <dataContext.Provider value={value}>
        {props.children}
      </dataContext.Provider>
    </>
  );
};

// para no tener que escribir los imports, se suele usar un hook personalizado
export const useDataContext = () => {
  const context = useContext(dataContext);

  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }
};

//! index.js que sea archivo de barril donde exportamos todos los contexts.