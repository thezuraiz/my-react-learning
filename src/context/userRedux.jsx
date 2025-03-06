import { createStore } from "redux";

const initialState = (() => {
  const savedUser = localStorage.getItem("userProfile");
  return savedUser ? JSON.parse(savedUser) : {};
})();

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("State: ", initialState);
      localStorage.setItem(
        "userProfile",
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const userStore = createStore(userReducer);

export default userStore;
