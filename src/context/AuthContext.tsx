import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import { auth } from "../firebase/config";

interface User {
  // Define the user properties
  id: number;
  username: string;
}

interface AuthState {
  user: User | null;
  authIsReady: boolean;
}

interface AuthAction {
  type: string;
  payload?: any;
}

interface AuthContextValue extends AuthState {
  dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };

    default:
      return state;
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
// // Define the shape of the user object
// interface User {
//   id: number;
//   username: string;
// }

// // Define the shape of the state object
// interface State {
//   user: User | null;
//   isAuthenticated: boolean;
// }

// // Define the auth provider children prop
// interface MyComponentProps {
//   children: ReactNode;
// }

// // Define the available actions for the reducer
// // type Action =
// //   | { type: "LOGIN"; payload: User }
// //   | { type: "LOGOUT" }
// //   | { type: "AUTH_IS_READY"; payload: User };

// interface AuthAction {
//    type: string
//    payload?: any;
//   }

// // Define the initial state
// const initialState: State = {
//   user: null,
//   isAuthenticated: false,
// };

// interface AuthContextValue extends State{
//     dispatch: React.Dispatch<AuthAction>;
// }

// // Define the reducer function
// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         user: action.payload,
//         isAuthenticated: true,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         user: null,
//         isAuthenticated: false,
//       };

//     case "AUTH_IS_READY":
//       return {...state, user: action.payload, isAuthenticated: true };

//     default:
//       return state;
//   }
// }

// // Create the context
// export const AuthContext = createContext<AuthContextValue>

// // Create the context provider
// export const AuthProvider: React.FC<MyComponentProps> = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const unsub = auth.onAuthStateChanged((user) => {
//       dispatch({ type: "AUTH_IS_READY", payload: user });
//       unsub();
//     });
//   }, []);
//   console.log("AuthContext state", state);

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
