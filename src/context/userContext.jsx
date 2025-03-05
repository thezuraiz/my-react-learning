/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, _setUser] = useState(() => {
    const savedUser = localStorage.getItem("userProfile");
    return savedUser ? JSON.parse(savedUser) : {};
  });

  let setUser = (data) => {
    _setUser((prev) => {
      // console.log("data: ", data);
      let newData = typeof data === "string" ? JSON.parse(data) : data;
      console.log("New Data: ", newData);
      console.log("Prev: ", prev);
      let newUser = { ...prev, ...newData };
      console.log("New User: ", newUser);
      localStorage.setItem("userProfile", JSON.stringify(newUser));
      return newUser;
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export default UserProvider;
