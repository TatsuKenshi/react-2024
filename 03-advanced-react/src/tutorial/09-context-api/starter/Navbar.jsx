import React, { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

// custom hook for context
export const useNavbarContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "mike" });

  const toggleUser = () => {
    if (!user) {
      setUser({ name: "mike" });
      return;
    }
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, toggleUser }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
