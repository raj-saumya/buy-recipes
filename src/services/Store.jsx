import React, { createContext, useReducer } from "react";

const initialState = {
  isLoading: false,
  recipesList: []
};

export const CTX = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case "UPDATE_RECIPES":
      return {
        ...state,
        recipesList: action.payload
      };
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CTX.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </CTX.Provider>
  );
};

export default Store;
