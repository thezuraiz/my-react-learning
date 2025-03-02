import { useReducer } from "react";

const UseReducerHook = () => {
  const initialStates = { count: 0 };

  const reducer = (states, action) => {
    console.log("Action: ", action);
    switch (action.type) {
      case "Inc":
        return { count: states.count + 1 };

      case "Dec":
        return { count: states.count > 0 ? states.count - 1 : states.count };

      default:
        console.log("Invalid Action");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialStates);
  return (
    <div className="w-1/4 mx-auto bg-red-200 m-5 p-5 rounded-lg">
      <h3 className="font-medium text-center">Count: {state.count}</h3>
      <div className="flex justify-between items-center">
        <button
          className="px-4 py-2 rounded-xl bg-green-500 m-5"
          onClick={() => dispatch({ type: "Inc" })}
        >
          Inncrement
        </button>
        <button
          className="px-4 py-2 rounded-xl bg-green-500 m-5"
          onClick={() => dispatch({ type: "Dec" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
