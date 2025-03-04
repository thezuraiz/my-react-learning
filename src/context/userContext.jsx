/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    isAuthenticated: false,
    accessToken: "",
    id: null,
    email: "",
    role: "",
    phone_number: "",
  });

  useEffect(() => {
    let profile = localStorage.getItem("userProfile");
    console.log("Profilie", profile);
    if (profile != null) {
      let data = JSON.parse(profile);
      setUser(data);
    }
    console.log("User Profile: ", profile);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export default UserProvider;
