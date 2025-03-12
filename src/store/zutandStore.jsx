import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

const useZutandStore = create(
  persist(
    (set, get) => {
      let baseUrl = import.meta.env.VITE_API_URL;
      return {
        user: null,
        accessToken: "",
        login: async (email, password, navigate) => {
          try {
            let response = await axios.post(`${baseUrl}/token/`, {
              email: email,
              password: password,
            });
            set((state) => ({ ...state, accessToken: response.data.access }));
            console.log(
              "accessToken: ",
              get().accessToken,
              response.data.access
            );
            alert("Login Successful");
            navigate("/");
          } catch (error) {
            alert("Loggined Failed: ", error);
            console.error("Error:", error);
          }
        },
        logout: (state) => {
          set(() => ({ ...state, accessToken: "", user: null }));
        },
        setProfile: async (response, navigte) => {
          try {
            set((state) => ({ ...state, user: response }));
          } catch (err) {
            alert("Error: ", err);
            navigte("/login");
            console.log("Error: ", err);
          }
        },
      };
    },
    { name: "user-profile" }
  )
);

export default useZutandStore;
