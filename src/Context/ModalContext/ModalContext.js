import React, { createContext, useState } from "react";
const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
export { ModalContext, ModalContextProvider };
