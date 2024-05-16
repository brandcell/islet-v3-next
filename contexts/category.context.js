import { createContext, useState, useContext } from "react";
import Router, { useRouter } from "next/router";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const router = useRouter();

  const [routeState, setRouteState] = useState(router.asPath);

  return (
    <CategoryContext.Provider value={{ routeState, setRouteState }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(CategoryContext);
