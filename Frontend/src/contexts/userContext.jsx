import { Children, createContext, useContext, useState } from "react";

export const userContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (fetchedToken) => {
    _setToken(fetchedToken);

    if (fetchedToken) {
      localStorage.setItem("ACCESS_TOKEN", fetchedToken);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <userContext.Provider value={{ user, setToken, setUser, token }}>
      {children}
    </userContext.Provider>
  );
};

export default function useUserContext() {
  return useContext(userContext);
}
