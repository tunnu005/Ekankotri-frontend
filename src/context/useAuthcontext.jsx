import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("authUser")) || null);

  // Debugging logs
  console.log('AuthUser:', authUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
