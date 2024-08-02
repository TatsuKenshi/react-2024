import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [user, setUser] = useState({ name: "mike" });

  const toggleUser = () => {
    if (!user) {
      setUser({ name: "mike" });
      return;
    }
    setUser(null);
  };

  return (
    <GlobalContext.Provider value={{ user, toggleUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
