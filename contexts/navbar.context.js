import { createContext, useState } from "react";


//make a context object that can be called elsewhere
export const NavContext = createContext({
  isMenuOpen: false,
  setMenuOpen: () => {},
});

//make a provider component
export const NavProvider = ({ children }) => {

  //use state in the component
  const [isMenuOpen, setMenuOpen] = useState(false);

  //have value to pass state as props in component
  const value = {
    isMenuOpen,
    setMenuOpen,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

//return provider