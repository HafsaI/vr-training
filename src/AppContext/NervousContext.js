import React, { createContext, useState } from 'react';

export const NervousContext = createContext();

export const NervousProvider = ({ children }) => {
  const [showNervousDiv, setShowNervousDiv] = useState(false);

  return (
    <NervousContext.Provider value={{ showNervousDiv, setShowNervousDiv }}>
      {children}
    </NervousContext.Provider>
  );
};
