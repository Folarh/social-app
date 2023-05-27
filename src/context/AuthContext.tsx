import React, { createContext, useReducer, useContext } from "react";

// Define the shape of the user object
interface User {
  id: number;
  username: string;
}

// Define the shape of the state object
interface State {
  user: User | null;
  isAuthenticated: boolean;
}

// Define the available actions for the reducer
type Action = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

// Define the initial state
const initialState: State = {
  user: null,
  isAuthenticated: false,
};

// Define the reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

// Create the context
export const AuthContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Create the context provider
const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
