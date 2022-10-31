import React, { createContext, useState } from "react";
const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJoin, setIsJoin] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, isJoin, setIsJoin }}>
      {children}
    </ModalContext.Provider>
  );
};
export { ModalContext, ModalContextProvider };
