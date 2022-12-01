import { createContext, useState } from "react";


//make a context
export const NavContext = createContext({
  isMenuOpen: false,
  setMenuOpen: () => {},
});

//make a provider
export const NavProvider = ({ children }) => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const value = {
    isMenuOpen,
    setMenuOpen,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

//return provider