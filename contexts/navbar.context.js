import { createContext, useState } from "react";



//make a context
export const NavContext = createContext({
  isMenuOpen: false,
  setMenuOpen: () => {},
  isFooter:false,
  setIsFooter:()=>{}
});

//make a provider
export const NavProvider = ({ children }) => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isFooter, setIsFooter] = useState(false);

  const value = {
    isMenuOpen,
    setMenuOpen,
    isFooter,
    setIsFooter,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

//return provider